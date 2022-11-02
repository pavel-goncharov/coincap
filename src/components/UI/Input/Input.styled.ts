import styled from 'styled-components';
import {Colors, Fonts} from 'styles/vars';
import {maxNumber} from 'constants/ui';

export const Container = styled.input.attrs({
  type: 'number', 
  step: 0.01,
  min: 0.01,
  max: maxNumber, 
  placeholder: 'input number'
})`
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