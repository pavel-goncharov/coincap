import {IHistory} from 'types/bag';
import {ICurrency} from 'types/bag';
import {IDiffs, ITopCurrency} from 'types/ui';
import {getTotalNumber} from 'utils/bag';
import {roundNumber} from 'utils/common';

export function getTopTreeCurrency(currency: ICurrency[]): ITopCurrency[] {
  const allCurrency: ITopCurrency[] = currency.map((currencyOne: ICurrency) => {
    const currentUsd = getTotalNumber(currencyOne.history, currencyOne.priceUsd);
    const {usdDiff, percentDiff} = getDiffs(currentUsd, currencyOne.history);
  
    return ({
      id: currencyOne.id,
      symbol: currencyOne.symbol,
      usd: currentUsd,
      usdDiff,
      percentDiff
    })
  });

  const topTree: ITopCurrency[] = sortCurrency(allCurrency);

  return topTree;
}

function getDiffs(currentUsd: number, history: IHistory[]): IDiffs {
  const usdInvestments: number = history.reduce(
    (prev, current) => prev + roundNumber(current.number * current.priceUsd) ,
    0
  );

  const usdDiff: number = roundNumber(currentUsd - usdInvestments);
  const percentDiff: number = roundNumber((usdDiff / usdInvestments) * 100);

  const result: IDiffs = {
    usdDiff,
    percentDiff
  }
  return result;
}

function sortCurrency(currency: ITopCurrency[]): ITopCurrency[] {
  return currency.sort((a, b) => b.usd - a.usd).slice(0, 3);
} 