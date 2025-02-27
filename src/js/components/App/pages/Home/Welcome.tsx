import * as MdIcons from 'react-icons/md';

import { Route } from '../../../../utils/routes';
import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Link from '../../../reusable/Link';
import { useAppContext } from '../../AppContext';

const Welcome = () => {
  const { agent } = useAppContext();

  if (agent === undefined) {
    return null;
  }

  return (
    <Container.FlexCols>
      <Container.Container>
        <Heading.H1>
          Welcome <strong>{agent.name}</strong>!
        </Heading.H1>
      </Container.Container>
      <Container.Container className="grid grid-cols-3 gap-8 items-start justify-around">
        <Link.Default className="w-full h-full" href={Route.REAL_ESTATE_CREATE}>
          <Container.Card hoverScale>
            <span className="text-lg">
              <MdIcons.MdHome size={24} className="inline mr-2 text-brandRed" />
              Create a new real estate listing
            </span>
          </Container.Card>
        </Link.Default>
      </Container.Container>
    </Container.FlexCols>
  );
};

export default Welcome;
