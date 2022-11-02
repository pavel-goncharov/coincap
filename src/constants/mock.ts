import {IBagState} from 'store/slices/bag.slice';
import {IAsset} from 'types/api';
import {ICurrency, IHistory} from 'types/bag';

export interface IPartInitBag {
  usd: number;
  currency: ICurrencyPartInitBag[];
  ids: string[];
}

interface ICurrencyPartInitBag {
  id: string;
  history: IHistory[];
}

export const mockIds: string[] = ['bitcoin', 'ethereum', 'tether'];

export const partInitBag: IPartInitBag = {
  usd: 100000,
  currency: [
    {
      id: mockIds[0], 
      history: [
        {
          date: 1666523695089,
          number: 1,
          priceUsd: 19158.2236223111825587
        }
      ]
    },
    {
      id: mockIds[1],
      history: [
        {
          date: 1666523772809,
          number: 1,
          priceUsd: 1304.7502802068171964
        },
        {
          date: 1666523817954,
          number: 1,
          priceUsd: 1304.6402263206339640
        }
      ]
    },
    {
      id:  mockIds[2],
      history: [
        {
          date: 1666523858451,
          number: 1,
          priceUsd: 1.0003733161348173
        },
        {
          date: 1666523905269,
          number: 1,
          priceUsd: 1.0003913045474208
        },
        {
          date: 1666523940022,
          number: 1,
          priceUsd: 1.0003568661471072
        }
      ]
    }
  ],
  ids: mockIds
}

function getHistoryById(currency: ICurrencyPartInitBag[] | ICurrency[], id: string): IHistory[] {
  return currency.find(currencyOne => currencyOne.id === id)?.history || [];
}

export function getDataBag(lastBag: IPartInitBag | IBagState, assets: IAsset[]): IBagState {
  const idInitCurrency: string[] = lastBag.ids;
  
  const assetsInitCurrency: IAsset[] = [];
  assets.forEach(asset => {
    if(idInitCurrency.includes(asset.id)) {
      assetsInitCurrency.push(asset);
    }
  });

  const currency: ICurrency[] = assetsInitCurrency.map(asset => ({
    id: asset.id,
    name: asset.name,
    symbol: asset.symbol,
    priceUsd: Number(asset.priceUsd),
    history: getHistoryById(lastBag.currency, asset.id)
  }));

  const initBag: IBagState = {
    usd: lastBag.usd,
    currency,
    ids: idInitCurrency
  }

  return initBag;
}