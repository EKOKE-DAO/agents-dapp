const DEFERRED_DATA_API_URL = 'https://2m6dw-uaaaa-aaaal-arumq-cai.raw.icp0.io';
const DEFERRED_MINTER_API_URL =
  'https://2f5ik-ciaaa-aaaal-aruna-cai.raw.icp0.io';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const MOCK_ENABLED: boolean = false;

/**
 * @description Sends a request to the deferred-minter API
 * @param method the HTTP method to use
 * @param path the path to the API endpoint
 * @param mock a mock to return in case of no API URL
 * @param onError a callback to call in case of an error
 * @returns
 */
export const deferredMinterRequest = async <T>(
  method: Method,
  path: string,
  mock: T,
  onError?: (statusCode: number, error: any) => void,
): Promise<T> =>
  __sendJsonRequest(
    DEFERRED_MINTER_API_URL,
    method,
    path,
    mock,
    undefined,
    onError,
  );

/**
 * @description Sends a request to the deferred-data API
 * @param method the HTTP method to use
 * @param path the path to the API endpoint
 * @param mock a mock to return in case of no API URL
 * @param onError a callback to call in case of an error
 * @returns
 */
const deferredDataRequest = async <T>(
  method: Method,
  path: string,
  mock: T,
  onError?: (statusCode: number, error: any) => void,
): Promise<T> =>
  __sendJsonRequest(
    DEFERRED_DATA_API_URL,
    method,
    path,
    mock,
    undefined,
    onError,
  );

const __sendJsonRequest = async <T>(
  apiUrl: string,
  method: Method,
  path: string,
  mock: T,
  body?: any,
  onError?: (statusCode: number, error: any) => void,
): Promise<T> => {
  const development = process.env.NODE_ENV === 'development' && MOCK_ENABLED;
  if (development) {
    console.log('MOCK', method, path);
    // simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 200));
    return mock;
  }

  let url = `${apiUrl}${path}`;
  if (path.startsWith('http')) {
    url = path;
  }

  const headers = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    body: body !== undefined ? JSON.stringify(body) : undefined,
    method,
    headers,
  });

  if (response.ok) {
    try {
      return await response.json();
    } catch (e) {
      console.log(
        'Error parsing JSON',
        e,
        response.status,
        response.statusText,
        response.url,
        response.body,
      );
      return {} as T;
    }
  }

  const statusCode = response.status;
  const error = await response.text();

  if (onError) {
    onError(statusCode, error);
  }

  throw new Error(error);
};

export const sendMultipartFormDataRequest = async <T>(
  method: 'POST' | 'PUT',
  path: string,
  mock: T,
  formData: FormData,
  onError?: (statusCode: number, error: any) => void,
): Promise<T> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.log('MOCK', method, path);
    // simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mock;
  }

  const url = `${apiUrl}${path}`;

  const response = await fetch(url, {
    body: formData,
    method,
    credentials: 'include',
  });

  if (response.ok) {
    try {
      return await response.json();
    } catch (e) {
      console.log(
        'Error parsing JSON',
        e,
        response.status,
        response.statusText,
        response.url,
        response.body,
      );
      return {} as T;
    }
  }

  const statusCode = response.status;
  const error = await response.text();

  if (onError) {
    onError(statusCode, error);
  }

  throw new Error(error);
};

export default deferredDataRequest;

export const makeQueryArgs = <T extends object>(opts: T): string => {
  return Object.keys(opts)
    .filter((key) => {
      const value = opts[key as keyof T];

      if (value === undefined) return false;

      if (typeof value === 'boolean' && value === false) return false;

      return true;
    })
    .map((key) => {
      const value = opts[key as keyof T];
      if (value === undefined) {
        return '';
      }

      if (typeof value === 'boolean' && value) {
        return `${key}=1`;
      }

      if (value === null) {
        return `${key}=1`;
      }

      if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean'
      ) {
        return `${key}=${encodeURIComponent(value)}`;
      }

      return '';
    })
    .join('&');
};

export interface Signature {
  message: string;
  signature: string;
}
