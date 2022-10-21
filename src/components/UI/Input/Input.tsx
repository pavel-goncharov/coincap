import {FC} from 'react';
import {Container} from 'components/UI/Input/Input.styled';

interface IInput {
  value: number;
  setValue: (newValue: number) => void; 
}

const Input: FC<IInput> = (props) => {
  const {value, setValue} = props;
  return (
    <Container
      value={value}
      onChange={e => setValue(Number(e.target.value))}
    />
  );
}

export default Input;