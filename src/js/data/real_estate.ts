export interface RealEstate {
  name: string;
  description: string;
  agency: string;
  image: string | null;
  address: string | null;
  country: string | null;
  continent: string | null;
  region: string | null;
  zip_code: string | null;
  latitude: number | null;
  longitude: number | null;
  zone: string | null;
  city: string | null;
  square_meters: number | null;
  rooms: number | null;
  bathrooms: number | null;
  bedrooms: number | null;
  floors: number | null;
  balconies: number | null;
  garden: boolean | null;
  pool: boolean | null;
  garage: boolean | null;
  parking: boolean | null;
  elevator: boolean | null;
  year_of_construction: number | null;
  energy_class: string | null;
  youtube: string | null;
}
