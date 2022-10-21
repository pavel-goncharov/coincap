import {FC, ReactNode} from 'react';
import {Container} from 'components/UI/Modal/Modal.styled';
import {MdOutlineClose} from 'react-icons/md';
import Button, {BtnModes} from 'components/UI/Button/Button';

interface IModal {
  isActive: boolean;
  handler: () => void;
  children: ReactNode;
  title: string;
}

export const Modal: FC<IModal> = (props) => {
  const {isActive, handler, children, title} = props;
  return (
    <Container
      onClick={handler}
      isActive={isActive} 
    >
      <div onClick={e => e.stopPropagation()}>
        <div>
          <span>{title}</span>
          <Button
            mode={BtnModes.ICON}
            handler={handler}
            icon={<MdOutlineClose/>}
          />
        </div>
        {children}
      </div>
    </Container>
  );
}