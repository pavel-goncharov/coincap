import {FC} from 'react';
import {Container} from 'components/Common/CurrencyTitle/CurrencyTitle.styled';

export enum CurrencyTitleModes {
  TABLE = 'table',
  MODAL = 'modal'
}

interface ICurrencyTitle {
  name: string;
  symbol: string;
  mode: CurrencyTitleModes;
} 

const CurrencyTitle: FC<ICurrencyTitle> = (props) => {
  const {name, symbol, mode} = props;
  const firstChar: string = name[0]; 
  return (
    <Container mode={mode}>
      <div>{firstChar}</div>
      <div>
        <span>{name}</span>
        {mode !== CurrencyTitleModes.MODAL && 
          <span>{symbol}</span>
        }
      </div>
    </Container>
  );
}

export default CurrencyTitle;