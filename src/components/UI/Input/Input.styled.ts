import styled from 'styled-components';
import {Colors, Fonts} from 'styles/vars';

export const Container = styled.input.attrs({
  type: 'number', 
  step: 0.01,
  min: 0.01,
  max: 9999999999999998, 
  placeholder: 'input number'
})`
  width: 100%;
  padding: 10px 20px;
  border: 3px solid ${Colors.DARK_BLUE};
  outline: none;
  border-radius: 5px;
  font-family: ${Fonts.INTER_SEMIBOLD};

  &:focus {
    border-color: ${Colors.PURPLE};
  }
`;