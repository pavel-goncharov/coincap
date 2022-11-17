import axios from 'axios'
import {IArgReqAssets, IAsset, IArgsReqAssetOne, IArgsReqHistory, IHistory, IQueryHistory} from '@/types/coinCapApi';
import {getIdCoincapPath} from '@/utils';

export enum CoinCapApiUrls {
  ASSETS = '/assets',
  ASSET_ONE = '/assets/:id',
  HISTORY = '/assets/:id/history'
}

const coincapApiHost = axios.create({
  baseURL: 'https://api.coincap.io/v2',
});

export async function getAssets(args: IArgReqAssets): Promise<IAsset[]> {
  return await coincapApiHost.get(CoinCapApiUrls.ASSETS, {params: args}).then(res => res.data);
}

export async function getAssetOne(args: IArgsReqAssetOne): Promise<IAsset> {
  const id: string = args.id;
  const path: string = getIdCoincapPath(CoinCapApiUrls.ASSET_ONE, id);
  const assetOne: IAsset = await coincapApiHost.get(path).then(res => res.data);
  return assetOne;
}

export async function getHistory(args: IArgsReqHistory): Promise<IHistory[]> {
  const id: string = args.id;
  const query: IQueryHistory = {
    interval: args.interval, 
    start: args.start,
    end: args.end
  };
  const path: string = getIdCoincapPath(CoinCapApiUrls.HISTORY, id);
  const history: IHistory[] = await coincapApiHost.get(path, {params: query}).then(res => res.data);
  return history;
}