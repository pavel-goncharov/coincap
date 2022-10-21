import {FC} from 'react';
import {Container} from 'components/Common/CurrencyTitle/CurrencyTitle.styled';
import {IAsset} from 'types/api';

export enum TdNameModes {
  TABLE = 'table',
  MODAL = 'modal'
}

interface ITdName {
  currency: IAsset;
  mode: TdNameModes;
} 

const CurrencyTitle: FC<ITdName> = (props) => {
  const {currency, mode} = props;
  const firstChar: string = currency.name[0]; 
  return (
    <Container mode={mode}>
      <div>{firstChar}</div>
      <div>
        <span>{currency.name}</span>
        {mode !== TdNameModes.MODAL && 
          <span>{currency.symbol}</span>
        }
      </div>
    </Container>
  );
}

export default CurrencyTitle;