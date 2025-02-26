import 'react-loading-skeleton/dist/skeleton.css';
import { IcWalletProvider } from 'react-ic-wallet';

import AppLayout from './js/components/AppLayout';
import AppContextProvider, {
  useAppContext,
} from './js/components/App/AppContext';
import AppError from './js/components/Status/AppError';
import AppSuccess from './js/components/Status/AppSuccess';

const App = () => (
  <AppContextProvider>
    <AppLayoutWrapper />
  </AppContextProvider>
);

const AppLayoutWrapper = () => {
  const { icWallet } = useAppContext();

  return (
    <IcWalletProvider provider={icWallet}>
      <AppError />
      <AppSuccess />
      <AppLayout />
    </IcWalletProvider>
  );
};

export default App;
