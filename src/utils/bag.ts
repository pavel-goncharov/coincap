import {ICurrency, IHistory} from 'types/bag';
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