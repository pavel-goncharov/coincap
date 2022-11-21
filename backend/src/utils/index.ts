// import {CoinCapApiUrls} from '@/controllers';
import {CoinCapApiUrls} from '../controllers';

export function getIdCoincapPath(coincapUrl: CoinCapApiUrls, id: string): string {
  return coincapUrl.replace(/:id/, id);
}