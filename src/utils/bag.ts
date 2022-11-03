import {IBagState} from 'store/slices/bag.slice';
import {IAsset} from 'types/api';
import {ICurrency, ICurrencyPartInitBag, IHistory, IPartInitBag} from 'types/bag';
import {IListItem} from 'types/ui';
import {roundNumber} from 'utils/common';

export function getTotalCostBag(currency: ICurrency[]): number {
  return roundNumber(currency.reduce(
    (prev, current) => prev + getTotalNumber(current.history, current.priceUsd),
    0
  ));
}

export function getCurrencyInfo(currency: ICurrency): IListItem[] {
  const totalNumber: number = getTotalNumber(currency.history);

  const totalUsd: string = `$${roundNumber(totalNumber * currency.priceUsd)}`;

  const listItem: IListItem[] = [
    {
      id: 0,
      title: currency.symbol,
      value: totalNumber.toString()
    },
    {
      id: 1,
      title: 'USD',
      value: totalUsd
    },
  ];

  return listItem;
}

export function getTotalNumber(history: IHistory[], priceUsd?: number): number {
  const totalNumber: number = history.reduce(
    (prev, current) => prev + current.number,
    0
  );

  if(priceUsd) return roundNumber(totalNumber * priceUsd);

  return totalNumber;
}

export function isSpent(history: IHistory[]): boolean {
  return getTotalNumber(history) === 0;
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
    currency,
    ids: idInitCurrency
  }

  return initBag;
}