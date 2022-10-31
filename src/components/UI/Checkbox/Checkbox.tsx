import {FC} from 'react';
import {Container} from 'components/UI/Checkbox/Checkbox.styled';

interface ICheckbox {
  title?: string;
  checked: boolean;
  handler: () => void;
}

const Checkbox: FC<ICheckbox> = (props) => {
  const {title, checked, handler} = props;
  const inputType: string = 'checkbox';
  return (
    <Container>
      {title}
      <input
        type={inputType}
        checked={checked}
        onChange={handler}
      />
      <span/>
    </Container>
  );
}

export default Checkbox;