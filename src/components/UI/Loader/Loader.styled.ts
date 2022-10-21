import styled, {keyframes} from 'styled-components';
import {Colors} from 'styles/vars';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.span`
  position: absolute;
  left: 50%;
  margin-left: -24px;
  width: 48px;
  height: 48px;
  border: 5px solid ${Colors.PURPLE};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;  
`;