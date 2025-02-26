import Container from '../reusable/Container';
import { Route } from '../../utils/routes';
import TopbarLink from './TopbarLink';
import Dropdown from './Dropdown';
import IcConnect from '../IcConnect';

import EkokeLogo from '../../../assets/images/ekoke-logo.webp';

const Desktop = () => (
  <div className="fixed block sm:hidden left-0 top-0 h-[80px] w-full bg-page z-40 shadow-sm">
    <Container.FlexRow className="justify-between items-center px-4">
      <Container.Container className="hidden 3xl:block flex-1" />
      <Container.FlexRow className="items-center justify-between gap-8">
        <img src={EkokeLogo} alt="EKOKE DAO" height={40} width={40} />
        <TopbarLink name={'Home'} href={Route.HOME} />
        <Dropdown
          name="Real Estate"
          entries={[
            {
              name: 'New real estate',
              route: Route.REAL_ESTATE_CREATE,
            },
          ]}
        />
      </Container.FlexRow>
      <Container.Flex className="flex-1 justify-end 3xl:justify-start px-8">
        <IcConnect />
      </Container.Flex>
    </Container.FlexRow>
  </div>
);

export default Desktop;
