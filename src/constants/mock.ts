import {IBagState} from 'store/slices/bag.slice';
import {IAsset} from 'types/api';
import {ICurrency, IHistory} from 'types/bag';

interface IPartInitBag {
  usd: number;
  currency: ICurrencyPartInitBag[];
}

interface ICurrencyPartInitBag {
  id: string;
  history: IHistory[];
}

export const partInitBag: IPartInitBag = {
  usd: 10000,
  currency: [
    {
      id: 'bitcoin', 
      history: [
        {
          date: 1666523695089,
          number: 1,
          priceUsd: 19158.2236223111825587
        }
      ]
    },
    {
      id: 'ethereum',
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
      id: 'tether',
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
  ]
}

function getHistoryById(currency: ICurrencyPartInitBag[] | ICurrency[], id: string): IHistory[] {
  return currency.find(currencyOne => currencyOne.id === id)?.history || [];
}

export function getDataBag(lastBag: IPartInitBag | IBagState, assets: IAsset[]): IBagState {
  const idInitCurrency: string[] = lastBag.currency.map(currencyOne => currencyOne.id);
  
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
    currency
  }

  return initBag;
}