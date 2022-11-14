import {Request, Response} from 'express';
import axios from 'axios'
import {IAsset, IHistory} from '@/types/coinCapApi';
import {getIdCoincapPath} from '@/utils';

export enum CoinCapApiUrls {
  ASSETS = '/assets',
  ASSET_ONE = '/assets/:id',
  HISTORY = '/assets/:id/history'
}

const coincapApiHost = axios.create({
  baseURL: 'https://api.coincap.io/v2',
});

class RouterController {
  async getAssets(req: Request, res: Response<IAsset[]>) {
    const assets: IAsset[] = await coincapApiHost.get(CoinCapApiUrls.ASSETS, {params: req.query}).then(res => res.data);
    return res.json(assets);
  }
  
  async getAssetOne(req: Request, res: Response<IAsset>) {
    const id: string = req.params.id;
    const path: string = getIdCoincapPath(CoinCapApiUrls.ASSET_ONE, id);
    const assetOne: IAsset = await coincapApiHost.get(path).then(res => res.data);
    return res.json(assetOne);
  }

  async getHistory(req: Request, res: Response<IHistory>) {
    const id: string = req.params.id;
    const path: string = getIdCoincapPath(CoinCapApiUrls.HISTORY, id);
    const history: IHistory = await coincapApiHost.get(path, {params: req.query}).then(res => res.data);
    return res.json(history);
  }
}

export default new RouterController();