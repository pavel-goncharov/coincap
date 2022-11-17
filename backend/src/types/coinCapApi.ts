export interface IAsset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
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

export interface IArgReqAssets {
  offset: number | null;
  limit: number | null;
  ids: string | null;
}

export interface IArgsReqAssetOne {
  id: string;
}

export interface IQueryHistory {
  interval: string; 
  start: number;
  end: number;
}

export interface IArgsReqHistory extends IArgsReqAssetOne, IQueryHistory {}