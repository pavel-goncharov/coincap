import {Router} from 'express';
import RouterController from '@/controllers/router.controller';

const router = Router();

const enum CoinCapApiUrls {
  ASSETS = '/assets',
  ASSET_ONE = '/assets/:id',
  HISTORY = '/assets/:id/history'
}

router.get(CoinCapApiUrls.ASSETS, RouterController.getAssets);
router.get(CoinCapApiUrls.ASSET_ONE, RouterController.getAssetOne);
router.get(CoinCapApiUrls.HISTORY, RouterController.getHistory);

export default router;