import * as React from 'react';

import Container from '../../reusable/Container';
import { useAppContext } from '../AppContext';
import { RealEstate } from '../../../data/real_estate';
import getRealEstates from '../../../api/getRealEstates';
import getRealEstate from '../../../api/getRealEstate';
import Skeleton from 'react-loading-skeleton';
import RealEstateCard from './RealEstateList/RealEstateCard';
import Heading from '../../reusable/Heading';

interface RealEstateWithId {
  id: bigint;
  data: RealEstate;
}

const getAllRealEstates = async (
  agent: string,
): Promise<RealEstateWithId[]> => {
  const ids = await getRealEstates({
    agent,
  });

  return await Promise.all(
    ids.map(async (id) => {
      const data = await getRealEstate(id);
      return {
        id,
        data,
      };
    }),
  );
};

const RealEstateList = () => {
  const { agent, setAppError } = useAppContext();

  const [realEstateList, setRealEstateList] = React.useState<
    RealEstateWithId[] | undefined
  >(undefined);

  React.useEffect(() => {
    if (agent === undefined) {
      return;
    }

    getAllRealEstates(agent.owner)
      .then((realEstates) => {
        setRealEstateList(realEstates);
      })
      .catch((error) => {
        setAppError('Failed to fetch real estates');
        console.error(error);
      });
  }, [agent]);

  console.log(realEstateList);

  const items = realEstateList
    ? realEstateList.map((realEstate) => (
        <RealEstateCard
          key={realEstate.id.toString()}
          id={realEstate.id}
          realEstate={realEstate.data}
        />
      ))
    : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <Container.Card key={i} className="w-[400px] h-[400px]">
          <Skeleton count={10} />
        </Container.Card>
      ));

  return (
    <Container.FlexCols className="gap-8 items-center">
      <Heading.H1>Your listed real estates</Heading.H1>
      <Container.Container className="grid grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 gap-8 items-start">
        {items}
      </Container.Container>
    </Container.FlexCols>
  );
};

export default RealEstateList;
