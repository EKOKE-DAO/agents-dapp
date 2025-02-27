import deferredDataRequest, { makeQueryArgs } from './api';
import { mockContractIds } from './mock';

interface Filters {
  agent?: string;
  name?: string;
  description?: string;
  address?: string;
  country?: string;
  continent?: string;
  region?: string;
  zipCode?: string;
  latitude?: string;
  longitude?: string;
  radius?: string;
  zone?: string;
  city?: string;
  squareMeters?: number;
  rooms?: number;
}

const getRealEstates = async (filters?: Filters): Promise<bigint[]> => {
  const url = `/real-estate?${makeQueryArgs(filters ?? {})}`;

  return await deferredDataRequest('GET', url, mockContractIds());
};

export default getRealEstates;
