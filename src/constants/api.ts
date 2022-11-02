export const API_URL = 'https://api.coincap.io/v2';
export const apiReducerPath = 'api';

export const apiTags = {
  bag: 'Bag',
}

export enum ApiUrls {
  ASSETS = '/assets',
  ASSET_ONE = '/assets/:id',
  HISTORY = '/assets/:id/history'
}

export const limit: number = 10;
export const totalCurrency: number = 100;