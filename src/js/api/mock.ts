import { Agency } from '../data/agency';
import { RealEstate } from '../data/real_estate';

export const mockAgency = (owner: string): Agency => {
  return {
    address: 'Via Roma 1',
    name: 'Agency',
    agent: 'Miriam',
    city: 'Milano',
    continent: 'Europe',
    country: 'Italy',
    email: 'miriamlagente@gmail.com',
    logo: 'https://placecats.com/300/300',
    mobile: '+39 333 1234567',
    owner,
    region: 'Lombardia',
    vat: 'IT12345678901',
    website: 'https://www.agency.com',
    zip_code: '20121',
  };
};

export const mockRealEstate = (id: bigint): RealEstate => {
  return {
    id,
    name: 'Villa in the heart of London',
    description: 'A beautiful villa in the heart of London',
    image: 'https://placecats.com/300/300',
    address: 'Via Roma 1',
    country: 'Italy',
    continent: 'Europe',
    region: 'Lombardia',
    zipCode: '20121',
    latitude: 45.464664,
    longitude: 9.18854,
    zone: 'City Center',
    squareMeters: 200,
    rooms: 4,
    bathrooms: 2,
    bedrooms: 2,
    floors: 2,
    balconies: 1,
    garden: true,
    garage: true,
    pool: false,
    parking: false,
    yearOfConstruction: 2017,
    energyClass: 'A',
    youtubeUrl: 'https://www.youtube.com/watch?v=DHaeadPJoJY',
  };
};

export const mockAgents = (lat?: string, lng?: string): Agency[] => {
  return [
    {
      address: 'Via Roma 1',
      name: 'Case de Miriam',
      agent: 'Miriam',
      city: 'Milano',
      continent: 'Europe',
      country: 'Italy',
      email: 'miriamlagente@gmail.com',
      logo: 'https://placecats.com/200/200',
      mobile: '+39 333 1234567',
      owner: 'v5vof-zqaaa-aaaal-ai5cq',
      region: 'Lombardia',
      vat: 'IT12345678901',
      website: 'https://www.agency.com',
      zip_code: '20121',
      lat: lat || '45.464664',
      lng: lng || '9.188540',
    },
    {
      address: 'Via Roma 1',
      name: 'Milan Houses',
      agent: 'Miriam',
      city: 'Milano',
      continent: 'Europe',
      country: 'Italy',
      email: 'miriamlagente@gmail.com',
      logo: 'https://placecats.com/200/200',
      mobile: '+39 333 1234567',
      owner: 'qoctq-giaaa-aaaaa-aaaea-cai',
      region: 'Lombardia',
      vat: 'IT12345678901',
      website: 'https://www.agency.com',
      zip_code: '20121',
      lat: lat || '45.464664',
      lng: lng || '9.188540',
    },
  ];
};
