export interface RealEstate {
  id: bigint;
  name: string;
  description: string;
  image?: string;
  address?: string;
  country?: string;
  continent?: string;
  region?: string;
  zipCode?: string;
  latitude?: number;
  longitude?: number;
  zone?: string;
  city?: string;
  squareMeters?: number;
  rooms?: number;
  bathrooms?: number;
  bedrooms?: number;
  floors?: number;
  balconies?: number;
  garden: boolean;
  pool: boolean;
  garage: boolean;
  parking: boolean;
  yearOfConstruction?: number;
  energyClass?: string;
  youtubeUrl?: string;
}
