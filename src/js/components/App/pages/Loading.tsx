import Container from '../../reusable/Container';
import Spinner from '../../reusable/Spinner';

const Loading = () => (
  <Container.FlexCols className="items-center justify-center w-full h-screen bg-page">
    <Container.Container>
      <Spinner size="w-[300px] h-[300px]" />
      <span className="text-xl block text-center text-brandBtn py-4">
        Loading...
      </span>
    </Container.Container>
  </Container.FlexCols>
);

export default Loading;
