import {FC} from 'react';
import {Container} from '@/components/UI/Button/Button.styled';
import {BsPlusSquareFill, BsFillBagFill, BsFillTrashFill, BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs';
import {MdOutlineClose} from 'react-icons/md';

export enum BtnIconKeys {
  BAG = 'bag',
  PLUS = 'plus',
  TRASH = 'trash',
  CLOSE = 'close',
  LEFT_ARROW = 'leftArrow',
  RIGHT_ARROW = 'rightArrow',
}

interface IBtnIcons {
  [BtnKeys: string]: JSX.Element; 
}

const btnIcons: IBtnIcons = {
  [BtnIconKeys.BAG]: <BsFillBagFill/>,
  [BtnIconKeys.PLUS]: <BsPlusSquareFill/>,
  [BtnIconKeys.TRASH]: <BsFillTrashFill/>,
  [BtnIconKeys.CLOSE]: <MdOutlineClose/>,
  [BtnIconKeys.LEFT_ARROW]: <BsFillArrowLeftSquareFill/>,
  [BtnIconKeys.RIGHT_ARROW]: <BsFillArrowRightSquareFill/>,
}

export enum BtnTypes {
  BUTTON = 'button',
  SUBMIT = 'submit'
}

export enum BtnModes {
  TEXT = 'text',
  ICON = 'icon',
  DOUBLE = 'double'
}

interface IGetModeAndChildren {
  mode: BtnModes;
  children: JSX.Element;
}

interface IButton {
  type?: BtnTypes;
  title?: string;
  iconKey?: string;
  handler: (...args: any) => void;
  disabled?: boolean;
  isRemove?: boolean;
}

const Button: FC<IButton> = (props) => {
  const {type, title, iconKey: icon, handler, disabled, isRemove} = props;
  
  function getModeAndChildren(title: string | undefined, iconKey: string | undefined): IGetModeAndChildren {
    if(iconKey && btnIcons.hasOwnProperty(iconKey)) {
      const icon = btnIcons[iconKey];
      if(title) {
        return ({
          mode: BtnModes.DOUBLE,
          children: <>
            <span>{title}</span>
            {icon}
          </>
        });
      } else {
        return ({
          mode: BtnModes.ICON,
          children: icon
        });
      }
    } else {
      return ({
        mode: BtnModes.TEXT,
        children: <span>{title}</span>
      });
    }
  }

  const {mode, children}: IGetModeAndChildren = getModeAndChildren(title, icon);
  return (
    <Container
      type={type || BtnTypes.BUTTON}
      mode={mode}
      onClick={handler}
      isRemove={isRemove || false}
      disabled={disabled || false}
    >
      {children}
    </Container>
  );
}

export default Button;