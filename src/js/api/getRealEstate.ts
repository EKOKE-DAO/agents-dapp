import { RealEstate } from '../data/real_estate';
import deferredDataRequest from './api';
import { mockRealEstate } from './mock';

/**
 * @description Get real estte by ID.
 * @param id property ID
 * @returns Real estate data
 */
const getRealEstate = async (id: bigint): Promise<RealEstate> => {
  const url = `/real-estate/${id}`;

  return await deferredDataRequest('GET', url, mockRealEstate(id));
};

export default getRealEstate;
