import styled from 'styled-components';
import {Colors, Fonts} from 'styles/vars';

export interface IInputNumberSt {
  step: number,
  min: number,
  max: number, 
  placeholder: string;
}

export const Container = styled.input.attrs((props: IInputNumberSt) => ({
  type: 'number',
  step: props.step,
  min: props.min,
  max: props.max,
  placeholder: props.placeholder
}))<IInputNumberSt>`
  width: 100%;
  padding: 10px 20px;
  border: 3px solid ${Colors.DARK_BLUE};
  outline-offset: -3px;
  border-radius: 5px;
  font-family: ${Fonts.INTER_SEMIBOLD};

  &:focus {
    outline: 3px solid ${Colors.PURPLE};
  }
`;