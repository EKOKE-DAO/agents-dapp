import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useIcWallet } from 'react-ic-wallet';

import { useAppContext } from '../AppContext';
import { RealEstate } from '../../../data/real_estate';
import getRealEstate from '../../../api/getRealEstate';
import Loading from './Loading';
import { Helmet } from '../../SeoEngine';
import Container from '../../reusable/Container';
import Heading from '../../reusable/Heading';
import RealEstateForm from './RealEstateForm';
import ConfirmPopup from '../../reusable/ConfirmPopup';
import { Continent as ContinentInternal } from '../../../data/agency';
import { useAgentContext } from '../../../ic/AgentContext';
import {
  Continent as ContinentIc,
  RealEstate as RealEstateIc,
} from '../../../ic/deferred_minter.did';

const continentIc = (continent: ContinentInternal): ContinentIc => {
  if (continent === 'Africa') {
    return { Africa: null };
  }
  if (continent === 'Antarctica') {
    return { Antarctica: null };
  }
  if (continent === 'Asia') {
    return { Asia: null };
  }
  if (continent === 'Europe') {
    return { Europe: null };
  }
  if (continent === 'NorthAmerica') {
    return { NorthAmerica: null };
  }
  if (continent === 'Oceania') {
    return { Oceania: null };
  }
  if (continent === 'SouthAmerica') {
    return { SouthAmerica: null };
  }

  throw new Error(`Invalid continent: ${continent}`);
};

const RealEstateEdit = () => {
  const { setAppError, setAppSuccess } = useAppContext();
  const { deferredMinter } = useAgentContext();
  const { principal } = useIcWallet();
  const { id } = useParams<{ id: string }>();

  const [realEstate, setRealEstate] = React.useState<RealEstate>();
  const [loading, setLoading] = React.useState(false);
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  const onSubmit = () => {
    console.log('submitting:', realEstate);

    setShowConfirmation(true);
    setLoading(true);
  };

  const onCancel = () => {
    setShowConfirmation(false);
    setLoading(false);
  };

  const onConfirm = () => {
    setShowConfirmation(false);

    const idBigInt = BigInt(Number(id));

    if (
      deferredMinter === undefined ||
      realEstate === undefined ||
      principal == null
    ) {
      setAppError('Agent not initialized');
      return;
    }

    const payload: RealEstateIc = {
      region: realEstate.region ? [realEstate.region] : [],
      latitude: realEstate.latitude ? [realEstate.latitude] : [],
      longitude: realEstate.longitude ? [realEstate.longitude] : [],
      zip_code: realEstate.zip_code ? [realEstate.zip_code] : [],
      deleted: false,
      square_meters: realEstate.square_meters
        ? [BigInt(realEstate.square_meters)]
        : [],
      country: realEstate.country ? [realEstate.country] : [],
      bedrooms: realEstate.bedrooms ? [BigInt(realEstate.bedrooms)] : [],
      floors: realEstate.floors ? [BigInt(realEstate.floors)] : [],
      city: realEstate.city ? [realEstate.city] : [],
      name: realEstate.name,
      pool: realEstate.pool ? [realEstate.pool] : [],
      zone: realEstate.zone ? [realEstate.zone] : [],
      garage: realEstate.garage ? [realEstate.garage] : [],
      garden: realEstate.garden ? [realEstate.garden] : [],
      agency: principal,
      continent: realEstate.continent
        ? [continentIc(realEstate.continent as ContinentInternal)]
        : [],
      description: realEstate.description,
      address: realEstate.address ? [realEstate.address] : [],
      elevator: realEstate.elevator ? [realEstate.elevator] : [],
      youtube: realEstate.youtube ? [realEstate.youtube] : [],
      image: realEstate.image ? [realEstate.image] : [],
      balconies: realEstate.balconies ? [BigInt(realEstate.balconies)] : [],
      bathrooms: realEstate.bathrooms ? [BigInt(realEstate.bathrooms)] : [],
      parking: realEstate.parking ? [realEstate.parking] : [],
      year_of_construction: realEstate.year_of_construction
        ? [BigInt(realEstate.year_of_construction)]
        : [],
      energy_class: realEstate.energy_class ? [realEstate.energy_class] : [],
      rooms: realEstate.rooms ? [BigInt(realEstate.rooms)] : [],
    };

    console.log('creating real estate:', payload, 'using minter');

    deferredMinter
      .update_real_estate(idBigInt, payload)
      .then((res) => {
        setLoading(false);

        if ('Ok' in res) {
          reload();
          console.log('real estate update:', idBigInt);
          setAppSuccess(`Real Estate updated successfully with id ${idBigInt}`);
        } else {
          setAppError(`Error creating real estate: ${JSON.stringify(res.Err)}`);
          console.error(
            'failed to create real estate:',
            JSON.stringify(res.Err),
          );
        }
      })
      .catch((e) => {
        setAppError(`Error creating real estate: ${e.message}`);
        setLoading(false);
        console.error('failed to create real estate', e);
      });
  };

  const reload = () => {
    const idBigInt = BigInt(Number(id));

    getRealEstate(idBigInt)
      .then(setRealEstate)
      .catch((e) => {
        setAppError('Failed to load real estate');
        console.error('Failed to load real estate', e);
      });
  };

  React.useEffect(() => {
    reload();
  }, [id]);

  if (!realEstate) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Edit {realEstate.name}</title>
        <meta
          name="description"
          content={`Editing ${realEstate.description}`}
        />
        <meta property="og:title" content={realEstate.name} />
        <meta property="og:description" content={realEstate.description} />
      </Helmet>
      <Container.FlexCols className="items-center justify-center gap-4 w-full">
        <Heading.H1>Create Real Estate</Heading.H1>
        <RealEstateForm
          formState={realEstate}
          setFormState={setRealEstate}
          onSubmit={onSubmit}
          loading={loading}
        />
        <ConfirmPopup
          hidden={!showConfirmation}
          onCancel={onCancel}
          onConfirm={onConfirm}
          title="Update Real Estate"
          message="Are you sure you want to update this real estate?"
        />
      </Container.FlexCols>
    </>
  );
};

export default RealEstateEdit;
