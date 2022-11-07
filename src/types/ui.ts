import {ReactNode} from 'react';
import {Fonts} from '@/styles/vars';

export interface IMainTableItem {
  id: string;
  columns: {
    addButton: ReactNode;
    rank: string;
    name: ReactNode;
    priceUsd: string;
    marketCapUsd: string;
    vwap24Hr: string;
    supply: string;
    volumeUsd24Hr: string;
    changePercent24Hr: string;
  }
}

export interface IPagination {
  currencyPerPage: number;
  totalCurrency: number;
}

export interface IListItem {
  id: number;
  title: string;
  value: string;
  complete?: string;
}

export interface ITopCurrency {
  id: string;
  symbol: string;
  usd: number;
  usdDiff: number;
  percentDiff: number;
}

export interface IFont {
  name: Fonts;
  path: string;
}

export type line = 'line';

export interface IDiffs {
  usdDiff: number;
  percentDiff: number;
}