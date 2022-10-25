import {FC, ReactNode} from 'react';
import {Container} from 'components/UI/Button/Button.styled';

export enum BtnTypes {
  button = 'button',
  submit = 'submit'
}

export enum BtnModes {
  ICON = 'icon',
  TITLE = 'title',
  DOUBLE = 'double',
  REMOVE = 'remove'
}

interface IButton {
  type?: BtnTypes;
  mode: BtnModes;
  title?: string;
  icon?: ReactNode;
  handler: (...args: any) => void;
  disabled?: boolean;
}

const Button: FC<IButton> = (props) => {
  const {type, mode, title, icon, handler, disabled} = props;
  return (
    <Container
      type={type || BtnTypes.button}
      mode={mode}
      onClick={handler}
      disabled={disabled}
    >
      {title && <span>{title}</span>}
      {icon}
    </Container>
  );
}

export default Button;