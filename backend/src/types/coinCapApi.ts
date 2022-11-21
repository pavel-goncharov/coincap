import {z} from 'zod';

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

export const zArgReqAssets = z.object({
  offset: z.number().optional(),
  limit: z.number().optional(),
  ids: z.string().optional()
});
export type IArgReqAssets = z.infer<typeof zArgReqAssets>;

export const zArgsReqAssetOne = z.object({
  id: z.string()
});
export type IArgsReqAssetOne = z.infer<typeof zArgsReqAssetOne>;

const zQueryHistory = z.object({
  interval: z.string(),
  start: z.number(),
  end: z.number()
});
export type IQueryHistory = z.infer<typeof zQueryHistory>;

export const zArgsReqHistory = z.intersection(zArgsReqAssetOne, zQueryHistory);
export type IArgsReqHistory = z.infer<typeof zArgsReqHistory>;