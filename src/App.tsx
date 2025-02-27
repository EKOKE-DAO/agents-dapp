import 'react-loading-skeleton/dist/skeleton.css';
import { IcWalletProvider } from 'react-ic-wallet';

import AppLayout from './js/components/AppLayout';
import AppContextProvider, {
  useAppContext,
} from './js/components/App/AppContext';
import AppError from './js/components/Status/AppError';
import AppSuccess from './js/components/Status/AppSuccess';
import IcAuthWall from './js/components/IcAuthWall';
import AgentContextProvider from './js/ic/AgentContext';

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
      <IcAuthWall>
        <AgentContextProvider>
          <AppLayout />
        </AgentContextProvider>
      </IcAuthWall>
    </IcWalletProvider>
  );
};

export default App;
