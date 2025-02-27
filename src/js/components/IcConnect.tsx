import * as React from 'react';
import { WalletProvider, useIcWallet } from 'react-ic-wallet';

import Button from './reusable/Button';
import Container from './reusable/Container';
import InternetComputer from './svg/InternetComputer';
import { useAppContext } from './App/AppContext';
import WalletSelector from './IcConnect/WalletSelector';
import { setUserIcWallet } from '../utils/storage';
import DisconnectPopup from './IcConnect/DisconnectPopup';

const IcConnect = () => {
  const { status, connect, disconnect, principal } = useIcWallet();
  const { icWallet, setIcWallet, setAppError, setAgent, agent } =
    useAppContext();
  const [showWalletSelector, setShowWalletSelector] = React.useState(false);
  const [showDisconnectPopup, setShowDisconnectPopup] = React.useState(false);

  const disabled = ['initializing', 'unavailable', 'connecting'].includes(
    status,
  );

  const onDisconnect = () => {
    if (setIcWallet) {
      setIcWallet(undefined);
    }
    setUserIcWallet(undefined);
    if (setAgent) {
      setAgent(undefined);
    }

    return disconnect();
  };

  const onClick = () => {
    if (status === 'notConnected') {
      setShowWalletSelector(true);
    } else if (status === 'connected') {
      setShowDisconnectPopup(true);
    }
    return undefined;
  };

  const onWalletSelect = (wallet: WalletProvider) => {
    if (setIcWallet) {
      setIcWallet(wallet);
    }
    setShowWalletSelector(false);
  };

  const text = (): React.ReactNode => {
    const spanText = () => {
      if (status === 'initializing') return 'Initializing...';
      if (status === 'unavailable') return 'IC Wallet not available';
      if (status === 'notConnected') return 'Login';
      if (status === 'connecting') return 'Connecting...';
      if (status === 'connected' && agent !== undefined) return agent.name;
      if (status === 'connected')
        return `${principal.toString().substring(0, 18)}...`;
    };

    const img = agent?.logo ? (
      <img
        src={agent.logo}
        alt={agent.name}
        className="inline rounded-full mr-2"
        width={32}
        height={32}
      />
    ) : (
      <InternetComputer className="inline w-[32px] mr-2" />
    );

    return (
      <span>
        {img}
        {spanText()}
      </span>
    );
  };

  React.useEffect(() => {
    console.log('ic status', status, 'ic wallet', icWallet);
    if (icWallet !== undefined && status === 'notConnected') {
      connect()
        .then(() => {
          setUserIcWallet(icWallet);
        })
        .catch((e) => {
          console.error('Failed to connect to wallet', e);
          setAppError('Failed to connect to wallet');
        });
    }
  }, [icWallet, status, connect]);

  return (
    <>
      <Container.FlexRow className="items-center gap-8">
        <Button.Primary
          className="my-0 !mb-0"
          onClick={onClick}
          disabled={disabled}
        >
          {text()}
        </Button.Primary>
      </Container.FlexRow>
      {showWalletSelector ? <WalletSelector onSelect={onWalletSelect} /> : null}
      {showDisconnectPopup ? (
        <DisconnectPopup
          onDisconnect={onDisconnect}
          onDismiss={() => setShowDisconnectPopup(false)}
        />
      ) : null}
    </>
  );
};

export default IcConnect;
