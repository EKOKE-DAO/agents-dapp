import * as React from 'react';
import { WalletProvider } from 'react-ic-wallet';

interface Context {
  appSuccess?: string;
  appError?: string;
  setAppError: (error?: string) => void;
  setAppSuccess: (message?: string) => void;
  icWallet?: WalletProvider;
  setIcWallet?: (icWallet: WalletProvider | undefined) => void;
}

const AppContext = React.createContext<Context>({
  setAppError: () => {},
  setAppSuccess: () => {},
});

const AppContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [appError, setAppError] = React.useState<string>();
  const [appSuccess, setAppSuccess] = React.useState<string>();
  const [icWallet, setIcWallet] = React.useState<WalletProvider | undefined>();

  return (
    <AppContext.Provider
      value={{
        appError,
        appSuccess,
        setAppError,
        setAppSuccess,
        icWallet,
        setIcWallet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => React.useContext(AppContext);
