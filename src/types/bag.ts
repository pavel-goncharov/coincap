import {IAsset} from 'types/api';

export interface ICurrency {
  id: string;
  name: string;
  symbol: string;
  priceUsd: number;
  history: IHistory[];
}

export interface IHistory {
  date: number;
  number: number;
  priceUsd: number;
}

export interface IPayloadSetNumber {
  asset: IAsset;
  number: number;
}

export interface IPartInitBag {
  currency: ICurrencyPartInitBag[];
  ids: string[];
}

export interface ICurrencyPartInitBag {
  id: string;
  history: IHistory[];
}