export interface Agency {
  address: string;
  agent: string;
  city: string;
  continent: Continent;
  country: string;
  email: string;
  lat?: string;
  lng?: string;
  logo?: string;
  mobile: string;
  name: string;
  owner: string;
  region: string;
  vat: string;
  website: string;
  zip_code: string;
}

export type Continent =
  | 'Africa'
  | 'Antarctica'
  | 'Asia'
  | 'Europe'
  | 'NorthAmerica'
  | 'Oceania'
  | 'SouthAmerica';
