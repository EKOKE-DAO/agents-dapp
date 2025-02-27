import Container from '../../reusable/Container';
import Welcome from './Home/Welcome';

const Home = () => (
  <Container.FlexCols className="gap-8 items-center">
    <Welcome />
  </Container.FlexCols>
);

export default Home;
