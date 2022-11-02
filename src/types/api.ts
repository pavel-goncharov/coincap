export interface IAsset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface IHistory {
  priceUsd: string;
  time: number;
  circulatingSupply: string;
  data: string;
}

export interface IArgsHistory {
  id: string;
  interval: string;
  fromEnd: number;
}

export interface IArgsAssets {
  offset?: number;
  limit?: number;
  ids?: string;
}