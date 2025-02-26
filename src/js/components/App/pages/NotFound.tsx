import Container from '../../reusable/Container';
import Heading from '../../reusable/Heading';
import Link from '../../reusable/Link';
import { Route } from '../../../utils/routes';
import { Helmet } from '../../SeoEngine';

const NotFound = () => (
  <>
    <Helmet>
      <meta name="googlebot" content="noindex, nofollow" />
    </Helmet>
    <Container.Container className="text-center">
      <Heading.H1>404</Heading.H1>
      <Heading.H2 className="text-center">Page not found</Heading.H2>
      <Link.Paragraph href={Route.HOME}>Go back to home</Link.Paragraph>
    </Container.Container>
  </>
);

export default NotFound;
