import * as MdIcons from 'react-icons/md';

import { Route } from '../../../../utils/routes';
import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Link from '../../../reusable/Link';
import { useAppContext } from '../../AppContext';
import Paragraph from '../../../reusable/Paragraph';

const Welcome = () => {
  const { agent } = useAppContext();

  if (agent === undefined) {
    return null;
  }

  return (
    <Container.FlexCols>
      <Container.Container>
        <Heading.H1>
          Hello, <strong>{agent.name}</strong>!
        </Heading.H1>
        <Paragraph.Leading>
          Welcome to your <strong>real estate dashboard</strong>. Here, you can
          manage your real estate listings, view your properties, create new
          listings and manage your sell contracts.
        </Paragraph.Leading>
      </Container.Container>
      <Container.Container className="grid grid-cols-3 gap-8 items-start justify-around">
        <QuickLink
          icon={
            <MdIcons.MdHome size={32} className="inline mr-2 text-brandRed" />
          }
          label="View your real estate listings"
          route={Route.REAL_ESTATE_LIST}
        />
        <QuickLink
          icon={
            <MdIcons.MdAddHomeWork
              size={32}
              className="inline mr-2 text-brandRed"
            />
          }
          label="Create a new real estate listing"
          route={Route.REAL_ESTATE_CREATE}
        />
      </Container.Container>
    </Container.FlexCols>
  );
};

interface QuickLinkProps {
  icon: React.ReactNode;
  label: string;
  route: Route;
}

const QuickLink = ({ icon, label, route }: QuickLinkProps) => (
  <Link.Default className="w-full h-full" href={route}>
    <Container.Card hoverScale>
      <Container.FlexCols className="items-center gap-2">
        {icon}
        <span className="text-lg block">{label}</span>
      </Container.FlexCols>
    </Container.Card>
  </Link.Default>
);

export default Welcome;
