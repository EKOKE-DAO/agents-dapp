import { Agency } from '../data/agency';
import { deferredMinterRequest } from './api';
import { mockAgents } from './mock';

export const getAgentByPrincipal = async (id: string): Promise<Agency> => {
  return await deferredMinterRequest('GET', `/agent/${id}`, mockAgents()[0]);
};
