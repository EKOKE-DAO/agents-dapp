export interface RealEstate {
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
  square_meters?: number;
  rooms?: number;
  bathrooms?: number;
  bedrooms?: number;
  floors?: number;
  balconies?: number;
  garden?: boolean;
  pool?: boolean;
  garage?: boolean;
  parking?: boolean;
  elevator?: boolean;
  year_of_construction?: number;
  energy_class?: string;
  youtube?: string;
}
