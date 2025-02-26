import * as React from 'react';

interface Context {
  appSuccess?: string;
  appError?: string;
  setAppError: (error?: string) => void;
  setAppSuccess: (message?: string) => void;
}

const AppContext = React.createContext<Context>({
  setAppError: () => {},
  setAppSuccess: () => {},
});

const AppContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [appError, setAppError] = React.useState<string>();
  const [appSuccess, setAppSuccess] = React.useState<string>();

  return (
    <AppContext.Provider
      value={{
        appError,
        appSuccess,
        setAppError,
        setAppSuccess,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => React.useContext(AppContext);
