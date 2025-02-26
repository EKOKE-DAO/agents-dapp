import * as React from 'react';
import { ActorSubclass } from '@dfinity/agent';
import { useIcWallet } from 'react-ic-wallet';

import { IcpLedger, idlFactory as icpLedgerIdlFactory } from './icp-ledger.did';
import {
  Marketplace,
  idlFactory as marketplaceIdlFactory,
} from './marketplace.did';

const ICP_LEDGER_CANISTER_ID = 'ryjl3-tyaaa-aaaaa-aaaba-cai';
const MARKETPLACE_CANISTER_ID = 'ss2fx-dyaaa-aaaar-qacoq-cai'; // FIXME: change

interface Context {
  icpLedger?: ActorSubclass<IcpLedger>;
  marketplace?: ActorSubclass<Marketplace>;
}

const AgentContext = React.createContext<Context>({});

const AgentContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [icpLedger, setIcpLedger] = React.useState<ActorSubclass<IcpLedger>>();
  const [marketplace, setMarketplace] =
    React.useState<ActorSubclass<Marketplace>>();

  const { createActor, status } = useIcWallet();

  React.useEffect(() => {
    if (status === 'connected') {
      createActor(ICP_LEDGER_CANISTER_ID, icpLedgerIdlFactory).then((actor) => {
        setIcpLedger(actor as ActorSubclass<IcpLedger>);
      });
      createActor(MARKETPLACE_CANISTER_ID, marketplaceIdlFactory).then(
        (actor) => {
          setMarketplace(actor as ActorSubclass<Marketplace>);
        },
      );
    } else {
      setIcpLedger(undefined);
      setMarketplace(undefined);
    }
  }, [status]);

  return (
    <AgentContext.Provider value={{ icpLedger, marketplace }}>
      {children}
    </AgentContext.Provider>
  );
};

export default AgentContextProvider;

export const useAgentContext = () => React.useContext(AgentContext);
