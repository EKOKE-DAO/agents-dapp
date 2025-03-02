import * as React from 'react';

import { RealEstate } from '../../../data/real_estate';
import { useAgentContext } from '../../../ic/AgentContext';
import { useAppContext } from '../AppContext';
import Container from '../../reusable/Container';
import Heading from '../../reusable/Heading';
import ConfirmPopup from '../../reusable/ConfirmPopup';
import { useIcWallet } from 'react-ic-wallet';
import { Continent as ContinentInternal } from '../../../data/agency';
import {
  Continent as ContinentIc,
  RealEstate as RealEstateIc,
} from '../../../ic/deferred_minter.did';
import RealEstateForm from './RealEstateForm';

const DEFAULT_FORM_STATE: RealEstate = {
  name: '',
  description: '',
  garage: false,
  garden: false,
  pool: false,
  parking: false,
  elevator: false,
  agency: '',
  image: null,
  address: null,
  country: null,
  continent: null,
  region: null,
  zip_code: null,
  latitude: null,
  longitude: null,
  zone: null,
  city: null,
  square_meters: null,
  bedrooms: null,
  floors: null,
  balconies: null,
  bathrooms: null,
  year_of_construction: null,
  energy_class: null,
  rooms: null,
  youtube: null,
};

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

const RealEstateCreate = () => {
  const { setAppSuccess, setAppError } = useAppContext();
  const { deferredMinter } = useAgentContext();
  const { principal } = useIcWallet();

  const [formState, setFormState] = React.useState<RealEstate>({
    ...DEFAULT_FORM_STATE,
    agency: principal ? principal.toText() : '',
  });
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = () => {
    console.log('submitting:', formState);

    setShowConfirmation(true);
    setLoading(true);
  };

  const onCancel = () => {
    setShowConfirmation(false);
    setLoading(false);
  };

  const onConfirm = () => {
    setShowConfirmation(false);

    if (deferredMinter === undefined || principal == null) {
      setAppError('Agent not initialized');
      return;
    }

    const payload: RealEstateIc = {
      region: formState.region ? [formState.region] : [],
      latitude: formState.latitude ? [formState.latitude] : [],
      longitude: formState.longitude ? [formState.longitude] : [],
      zip_code: formState.zip_code ? [formState.zip_code] : [],
      deleted: false,
      square_meters: formState.square_meters
        ? [BigInt(formState.square_meters)]
        : [],
      country: formState.country ? [formState.country] : [],
      bedrooms: formState.bedrooms ? [BigInt(formState.bedrooms)] : [],
      floors: formState.floors ? [BigInt(formState.floors)] : [],
      city: formState.city ? [formState.city] : [],
      name: formState.name,
      pool: formState.pool ? [formState.pool] : [],
      zone: formState.zone ? [formState.zone] : [],
      garage: formState.garage ? [formState.garage] : [],
      garden: formState.garden ? [formState.garden] : [],
      agency: principal,
      continent: formState.continent
        ? [continentIc(formState.continent as ContinentInternal)]
        : [],
      description: formState.description,
      address: formState.address ? [formState.address] : [],
      elevator: formState.elevator ? [formState.elevator] : [],
      youtube: formState.youtube ? [formState.youtube] : [],
      image: formState.image ? [formState.image] : [],
      balconies: formState.balconies ? [BigInt(formState.balconies)] : [],
      bathrooms: formState.bathrooms ? [BigInt(formState.bathrooms)] : [],
      parking: formState.parking ? [formState.parking] : [],
      year_of_construction: formState.year_of_construction
        ? [BigInt(formState.year_of_construction)]
        : [],
      energy_class: formState.energy_class ? [formState.energy_class] : [],
      rooms: formState.rooms ? [BigInt(formState.rooms)] : [],
    };

    console.log('creating real estate:', payload, 'using minter');

    deferredMinter
      .create_real_estate(payload)
      .then((res) => {
        setLoading(false);

        if ('Ok' in res) {
          setFormState({ ...DEFAULT_FORM_STATE, agency: principal.toText() });
          const id = res.Ok;
          console.log('real estate created:', id);
          setAppSuccess(`Real Estate created successfully with id ${id}`);
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

  return (
    <Container.FlexCols className="items-center justify-center gap-4 w-full">
      <Heading.H1>Create Real Estate</Heading.H1>
      <RealEstateForm
        formState={formState}
        setFormState={setFormState}
        onSubmit={onSubmit}
        loading={loading}
      />
      <ConfirmPopup
        hidden={!showConfirmation}
        onCancel={onCancel}
        onConfirm={onConfirm}
        title="Create Real Estate"
        message="Are you sure you want to create this real estate?"
      />
    </Container.FlexCols>
  );
};

export default RealEstateCreate;
