import styled from 'styled-components';
import {Colors, Fonts} from '@/styles/vars'; 

export const Container = styled.label`
  display: inline-block;
  padding: 5px 26px 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-family: ${Fonts.INTER_SEMIBOLD};
  user-select: none;
  background-color: ${Colors.DARK_BLUE};
  color: ${Colors.WHITE};
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: ${Colors.PURPLE};
  }

  > input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  > span {
    position: absolute;
    top: 10px;
    right: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${Colors.WHITE};
  }

  &:hover input ~ span {
    background-color: ${Colors.PURPLE_LIGHT};
  }

  > input:checked ~ span {
    background-color: ${Colors.GREEN};
  }
`;