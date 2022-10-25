import {FC, Fragment} from 'react';
import {ITopCurrency} from 'types/ui';
import {Container, SpanDiff} from 'components/UI/Header/TopCurrency/TopCurrency.styled';
import {ICurrency} from 'types/bag';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {getTopTreeCurrency} from 'utils/topCurrency';
import {getStrSignNumber, setColorText} from 'utils/common';

const TopCurrency: FC = () => {
  const currency: ICurrency[] = useTypedSelector(state => state.bag.currency);
  const items: ITopCurrency[] = getTopTreeCurrency(currency);
  
  function getSymbol(symbol: string): string {
    return `${symbol}:`;
  }
  
  function getUsd(usd: number): string {
    return `$${usd}`;
  }
  
  function getDiff(item: ITopCurrency): string {
    const {usdDiff, percentDiff} = item;
    let sign: string = getStrSignNumber(usdDiff);
    const result: string = `${sign}${Math.abs(usdDiff)} (${Math.abs(percentDiff)}%)`;
    return result;
  }

  return (
    <Container>
      {items.map((item: ITopCurrency) => 
        <Fragment key={item.id}>
          {Boolean(item.usd) &&
            <li key={item.id}>
              <span>{getSymbol(item.symbol)}</span>
              <span>{getUsd(item.usd)}</span>
              {Boolean(item.usdDiff) &&
                <SpanDiff color={setColorText(item.usdDiff)}>
                  {getDiff(item)}
                </SpanDiff>
              }
            </li>
          }
        </Fragment> 
      )}
    </Container>
  );
}

export default TopCurrency;