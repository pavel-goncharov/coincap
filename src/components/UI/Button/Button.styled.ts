import styled, {css} from 'styled-components';
import {Aligns, flex, Justifys} from '@/styles/mixins/flex';
import {Colors, Fonts} from '@/styles/vars';
import {BtnModes} from '@/components/UI/Button/Button';

interface IButton {
  mode: BtnModes;
}

export const Container = styled.button<IButton>`
  padding: 0;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  line-height: 1.5rem;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  ${flex({jc: Justifys.CENTER, ai: Aligns.CENTER, g: '10px'})}

  &:hover {
    svg {
      fill: ${Colors.PURPLE};
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  > span {
    font-family: ${Fonts.INTER_SEMIBOLD};
  }

  svg {
    fill: ${Colors.DARK_BLUE};
    height: 1.5rem;
    width: 1.5rem;
  }
  
  ${(props) => {
    switch (props.mode) {
      case BtnModes.ICON:
        return css`
          &:disabled {
            svg{
              fill: ${Colors.GRAY};
            }
          }
        `;
      case BtnModes.TITLE:
        return css`
          padding: 5px 20px;
          font-size: 1rem;
          background-color: ${Colors.DARK_BLUE};
          color: ${Colors.WHITE};

          &:hover {
            background-color: ${Colors.PURPLE};
          }

          &:disabled {
            background-color: ${Colors.GRAY};
          }
        `;
      case BtnModes.DOUBLE:
        return css`
          padding: 5px 10px;
          background-color: ${Colors.DARK_BLUE};
          color: ${Colors.WHITE};

          svg{
            fill: ${Colors.WHITE};
          }

          &:hover {
            background-color: ${Colors.PURPLE};

            svg{
              fill: ${Colors.WHITE};
            }
          }
        `;
      case BtnModes.REMOVE:
        return css`
          &:hover {
            svg {
              fill: ${Colors.RED};
            }
          }
        `;
      }
    }
  }
`;