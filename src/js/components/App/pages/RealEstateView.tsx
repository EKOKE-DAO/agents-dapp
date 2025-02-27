import * as React from 'react';
import { useParams } from 'react-router-dom';

import { useAppContext } from '../AppContext';
import { RealEstate } from '../../../data/real_estate';
import getRealEstate from '../../../api/getRealEstate';
import Loading from './Loading';
import { Helmet } from '../../SeoEngine';
import Container from '../../reusable/Container';
import RealEstateCard from './RealEstateView/RealEstateCard';

const RealEstateView = () => {
  const { setAppError } = useAppContext();
  const { id } = useParams<{ id: string }>();

  const [realEstate, setRealEstate] = React.useState<RealEstate>();

  React.useEffect(() => {
    const idBigInt = BigInt(Number(id));

    getRealEstate(idBigInt)
      .then(setRealEstate)
      .catch((e) => {
        setAppError('Failed to load real estate');
        console.error('Failed to load real estate', e);
      });
  }, [id]);

  if (!realEstate) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>{realEstate.name}</title>
        <meta name="description" content={realEstate.description} />
        <meta property="og:title" content={realEstate.name} />
        <meta property="og:description" content={realEstate.description} />
      </Helmet>
      <Container.Container>
        <Container.Container className="flex-1">
          <RealEstateCard realEstate={realEstate} />
        </Container.Container>
      </Container.Container>
    </>
  );
};

export default RealEstateView;
