// eslint-disable-rules @typescript-eslint/no-explicit-any

export enum Route {
  CONTACTS = 'contacts',
  COOKIES = 'cookie-policy',
  HOME = 'home',
  PRIVACY = 'privacy',
  REAL_ESTATE_CREATE = 'real-estate/create',
  REAL_ESTATE_LIST = 'real-estate',
  REAL_ESTATE_VIEW = 'real-estate/:id',
  REAL_ESTATE_EDIT = 'real-estate/:id/edit',
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Route {
  export function url(route: Route): string {
    if (route === Route.HOME) {
      return `/`;
    }

    return `/${route}`;
  }

  export function isRoute(keyOrValue: any): boolean {
    return isEnumKey(keyOrValue) || isEnumValue(keyOrValue);
  }

  export function realEstateViewUrl(id: bigint): string {
    return `/real-estate/${id.toString()}`;
  }

  export function realEstateEditUrl(id: bigint): string {
    return `/real-estate/${id.toString()}/edit`;
  }
}

function isEnumKey(key: any): boolean {
  return Object.keys(Route).includes(key);
}

function isEnumValue(value: any): boolean {
  return Object.values(Route).includes(value);
}

export interface MenuEntries {
  [key: string]: MenuEntry;
}

interface MenuEntry {
  label: string;
  link?: Route;
  section?: string;
}

export const getIdFromHash = (): string | undefined => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const hash = window.location.hash;
  const lastIndex = hash.lastIndexOf('#');

  if (lastIndex < 0) {
    return undefined;
  }

  return hash.slice(lastIndex + 1);
};
