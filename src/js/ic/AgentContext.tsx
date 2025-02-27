import * as React from 'react';
import { ActorSubclass } from '@dfinity/agent';
import { useIcWallet } from 'react-ic-wallet';

import {
  DeferredMinter,
  idlFactory as deferredMinterIdlFactory,
} from './deferred_minter.did';

const DEFERRED_MINTER_CANISTER_ID = '2f5ik-ciaaa-aaaal-aruna-cai';

interface Context {
  deferredMinter?: ActorSubclass<DeferredMinter>;
}

const AgentContext = React.createContext<Context>({});

const AgentContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [deferredMinter, setDeferredMinter] =
    React.useState<ActorSubclass<DeferredMinter>>();

  const { createActor, status } = useIcWallet();

  React.useEffect(() => {
    if (status === 'connected') {
      createActor(DEFERRED_MINTER_CANISTER_ID, deferredMinterIdlFactory).then(
        (actor) => {
          setDeferredMinter(actor as ActorSubclass<DeferredMinter>);
        },
      );
    } else {
      setDeferredMinter(undefined);
    }
  }, [status]);

  return (
    <AgentContext.Provider value={{ deferredMinter }}>
      {children}
    </AgentContext.Provider>
  );
};

export default AgentContextProvider;

export const useAgentContext = () => React.useContext(AgentContext);
