import Container from './reusable/Container';
import Page from './reusable/Page';
import Header from './Header';
import Footer from './Footer';
import Routes from './App/Routes';
import { BrowserRouter } from 'react-router-dom';

const AppLayout = () => {
  return (
    <Page.BlankPage>
      <Header />
      <Container.PageContent
        className={`bg-page w-page pt-[20px] sm:pt-[40px] pb-16 min-h-[80vh] mt-[80px] sm:mt-[140px]`}
      >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Container.PageContent>
      <Footer />
    </Page.BlankPage>
  );
};

export default AppLayout;
