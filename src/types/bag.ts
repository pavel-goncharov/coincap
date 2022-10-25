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
  id: string;
  priceUsd: number;
  number: number;
}