import * as React from 'react';
import { useIcWallet, WalletProvider } from 'react-ic-wallet';

import { useAppContext } from './App/AppContext';
import { setUserIcWallet } from '../utils/storage';
import Container from './reusable/Container';
import WalletSelector from './IcConnect/WalletSelector';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const IcAuthWall = ({ children }: Props) => {
  const { status, connect } = useIcWallet();
  const { icWallet, setIcWallet, setAppError, setAppSuccess } = useAppContext();

  const onSelectWallet = (wallet: WalletProvider) => {
    if (setIcWallet) {
      setIcWallet(wallet);
    }
  };

  React.useEffect(() => {
    console.log('ic status', status, 'ic wallet', icWallet);
    if (icWallet !== undefined && status === 'notConnected') {
      connect()
        .then(() => {
          setUserIcWallet(icWallet);
          setAppSuccess('Connected to wallet');
        })
        .catch((e) => {
          console.error('Failed to connect to wallet', e);
          setAppError('Failed to connect to wallet');
        });
    }
  }, [icWallet, status, connect]);

  if (status === 'connected' && icWallet !== undefined) {
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
