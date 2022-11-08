import styled, {css} from 'styled-components';
import {Aligns, flex, Justifys} from '@/styles/mixins/flex';
import {Colors, Fonts} from '@/styles/vars';
import {BtnModes} from '@/components/UI/Button/Button';

interface IButton {
  mode: BtnModes;
  isRemove: boolean;
}

export const Container = styled.button<IButton>`
  min-height: 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${Colors.WHITE};

  ${(props) => {
    switch (props.mode) {
      case BtnModes.TEXT:
        return css`
          padding: 5px 20px;
          font-size: 1rem;
          line-height: 1rem;
          background-color: ${Colors.DARK_BLUE};
  
          &:hover {
            background-color: ${props.isRemove ? Colors.RED : Colors.PURPLE};
          }

          &:disabled {
            background-color: ${Colors.GRAY};
          }
        `;
      case BtnModes.ICON:
        return css`
          padding: 0;
          font-size: 1.5rem;
          line-height: 1.5rem;
          background-color: ${Colors.WHITE};
          
          svg {
            height: 1.5rem;
            width: 1.5rem;
            fill: ${Colors.DARK_BLUE};

            &:hover {
              fill: ${props.isRemove ? Colors.RED : Colors.PURPLE};
            }
          }

          &:disabled {
            svg {
              fill: ${Colors.GRAY};
            }
          }
        `;
      case BtnModes.DOUBLE:
        return css`
          padding: 5px 10px;
          font-size: 1.5rem;
          line-height: 1.5rem;
          background-color: ${Colors.DARK_BLUE};
  
          svg {
            width: 18px;
            height: 18px;
          }

          &:hover {
            background-color: ${props.isRemove ? Colors.RED : Colors.PURPLE};
          }

          &:disabled {
            background-color: ${Colors.GRAY};
          }
        `;
      }
    }
  }
  ${flex({jc: Justifys.CENTER, ai: Aligns.CENTER, g: '10px'})}

  > span {
    font-family: ${Fonts.INTER_SEMIBOLD};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;