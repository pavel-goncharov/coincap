import {FC} from 'react';
import {Container, IInputNumberSt} from 'components/UI/InputNumber/InputNumber.styled';

interface IInputNumber {
  value: number;
  setValue: (newValue: number) => void; 
  propsSt: IInputNumberSt;
}

const InputNumber: FC<IInputNumber> = (props) => {
  const {value, setValue, propsSt} = props;
  return (
    <Container
      value={value}
      onChange={e => setValue(Number(e.target.value))}
      {...propsSt}
    />
  );
}

export default InputNumber;