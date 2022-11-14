import {Router} from 'express';
import RouterController, {CoinCapApiUrls} from '@/controllers';

const router = Router();

router.get(CoinCapApiUrls.ASSETS, RouterController.getAssets);
router.get(CoinCapApiUrls.ASSET_ONE, RouterController.getAssetOne);
router.get(CoinCapApiUrls.HISTORY, RouterController.getHistory);

export default router;