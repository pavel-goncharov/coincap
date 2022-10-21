import styled, {css} from 'styled-components';
import {Aligns, Directions, flex, Justifys} from 'styles/mixins/flex';
import {Colors, Fonts} from 'styles/vars';
import {TdNameModes} from 'components/Common/CurrencyTitle/CurrencyTitle';

interface ICurrencyTitle {
  mode: TdNameModes;
}

export const Container = styled.div<ICurrencyTitle>`
  ${flex({ai: Aligns.CENTER, g: '10px'})}
  
  > div {
    &:first-child {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: ${Colors.YELLOW};
      font-family: ${Fonts.INTER_BOLD};
      ${flex({jc: Justifys.CENTER, ai: Aligns.CENTER})}
    }

    &:nth-child(2) {
      ${flex({fd: Directions.COLUMN})}
    }
  }

  ${(props) => {
    switch (props.mode) {
      case TdNameModes.TABLE:
        return css`
          > div {
            &:nth-child(2) {
              > span:nth-child(2) {
                font-size: 0.688rem;
                opacity: 0.7;
              }
            }
          }
        `;
      case TdNameModes.MODAL:
        return css`
          span {
            font-size: 1.25rem;
            font-family: ${Fonts.INTER_SEMIBOLD};
          }

          @media (max-width: 576px) {
            > div {
              &:first-child {
                width: 22px;
                height: 22px;
              }
            }

            span {
              font-size: 1rem;
              line-height: 22px;
            }
          }
        `;
      }
    }
  }
`;