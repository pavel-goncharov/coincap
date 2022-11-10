import {IAsset} from '@/types/api';
import {IListItem} from '@/types/ui';
import {calcTableValue} from '@/utils/table';

export function getCurrencyList(currency: IAsset): IListItem[] {
  const currencyList: IListItem[] = [
    {
      id: 0, 
      title: 'Rank', 
      value: calcTableValue(currency?.rank!), 
      complete: currency?.rank
    },
    {
      id: 1, 
      title: 'price', 
      value: calcTableValue(currency?.priceUsd!, '$'), 
      complete: `$${currency?.priceUsd}`
    },
    {
      id: 2, 
      title: 'Market Cap', 
      value: calcTableValue(currency?.marketCapUsd!, '$'), 
      complete: `$${currency?.marketCapUsd}`
    },
    {
      id: 3, 
      title: 'VWAP(24Hr)', 
      value: calcTableValue(currency?.vwap24Hr!, '$'), 
      complete: `$${currency?.vwap24Hr}`
    },
    {
      id: 4, 
      title: 'Supply', 
      value: calcTableValue(currency?.supply!), 
      complete: currency?.supply
    },
    {
      id: 5, 
      title: 'Max supply', 
      value: calcTableValue(currency?.maxSupply || 'no data'), 
      complete: currency?.maxSupply || 'no data'
    },
    {
      id: 6, 
      title: 'Volume(24Hr)', 
      value: calcTableValue(currency?.volumeUsd24Hr!, '$'), 
      complete: `$${currency?.volumeUsd24Hr}`
    },
    {
      id: 7, 
      title: 'Change(24Hr)', 
      value: calcTableValue(currency?.changePercent24Hr!, '%', false, true), 
      complete: `${currency?.changePercent24Hr}%`
    }
  ];
  return currencyList;
}