import * as React from 'react';
import { useIcWallet, WalletProvider } from 'react-ic-wallet';

import { useAppContext } from './App/AppContext';
import { setUserIcWallet } from '../utils/storage';
import Container from './reusable/Container';
import WalletSelector from './IcConnect/WalletSelector';
import { getAgentByPrincipal } from '../api/getAgent';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const IcAuthWall = ({ children }: Props) => {
  const { status, connect, principal, disconnect } = useIcWallet();
  const { icWallet, setIcWallet, setAppError, setAppSuccess, agent, setAgent } =
    useAppContext();

  const onSelectWallet = (wallet: WalletProvider) => {
    if (setIcWallet) {
      setIcWallet(wallet);
    }
  };

  React.useEffect(() => {
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
          setAppSuccess(`Connected to wallet with agency ${agency.name}`);
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

  // show wallet selector
  return (
    <Container.FlexCols className="w-full">
      <WalletSelector onSelect={onSelectWallet} />
    </Container.FlexCols>
  );
};

export default IcAuthWall;
