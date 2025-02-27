import * as React from 'react';
import { useIcWallet, WalletProvider } from 'react-ic-wallet';

import { useAppContext } from './App/AppContext';
import { getUserIcWallet, setUserIcWallet } from '../utils/storage';
import Container from './reusable/Container';
import WalletSelector from './IcConnect/WalletSelector';
import { getAgentByPrincipal } from '../api/getAgent';
import Spinner from './reusable/Spinner';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const IcAuthWall = ({ children }: Props) => {
  const { status, connect, principal, disconnect } = useIcWallet();
  const { icWallet, setIcWallet, setAppError, agent, setAgent } =
    useAppContext();

  const onSelectWallet = (wallet: WalletProvider) => {
    if (setIcWallet) {
      setIcWallet(wallet);
    }
  };

  React.useEffect(() => {
    if (status === 'connected' && icWallet === undefined && setIcWallet) {
      const storageWallet = getUserIcWallet();
      if (storageWallet !== undefined) {
        setIcWallet(storageWallet);
      }
    }

    console.log('ic status', status, 'ic wallet', icWallet);
    if (
      icWallet !== undefined &&
      status === 'notConnected' &&
      setIcWallet !== undefined
    ) {
      connect()
        .then(() => {
          setUserIcWallet(icWallet);
        })
        .catch((e) => {
          console.error('Failed to connect to wallet', e);
          setAppError('Failed to connect to wallet');
        });
    }

    if (
      icWallet !== undefined &&
      status === 'connected' &&
      principal !== null &&
      setAgent !== undefined &&
      setIcWallet !== undefined
    ) {
      // get agent associated to this wallet
      const principalStr = principal.toText();

      getAgentByPrincipal(principalStr)
        .then((agency) => {
          setAgent(agency);
        })
        .catch((e) => {
          setAppError(`Could not find agent for principal ${principalStr}`);
          console.error("Couldn't find agent for principal", principalStr, e);

          // disconnect wallet
          setIcWallet(undefined);

          return disconnect();
        });
    }
  }, [icWallet, status, connect, principal, setAgent, setIcWallet]);

  if (status === 'connected' && icWallet !== undefined && agent !== undefined) {
    return <>{children}</>;
  }

  if (status === 'connected' && icWallet !== undefined && agent === undefined) {
    return (
      <Container.FlexCols className="items-center justify-center w-screen h-screen bg-page">
        <Container.Container>
          <Spinner size="w-[300px] h-[300px]" />
          <span className="text-xl block text-center text-brandBtn py-4">
            Loading...
          </span>
        </Container.Container>
      </Container.FlexCols>
    );
  }

  // show wallet selector
  return (
    <Container.FlexCols className="w-full">
      <WalletSelector onSelect={onSelectWallet} />
    </Container.FlexCols>
  );
};

export default IcAuthWall;
