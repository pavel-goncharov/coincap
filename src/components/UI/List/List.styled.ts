import styled, {css} from 'styled-components';
import {Directions, flex} from '@/styles/mixins/flex';
import {Colors, Fonts} from '@/styles/vars';
import {ListModes} from '@/components/UI/List/List';

interface IList {
  mode: ListModes;
}

export const Container = styled.ul<IList>`
  > li {
    ${flex()}
    > span {
      &:first-of-type {
        font-family: ${Fonts.INTER_BOLD};
        text-transform: uppercase;
      }
    }
  }

  @media (max-width: 576px) {
    > li  {
      flex-direction: ${Directions.COLUMN};
    }
  }
  
  ${(props) => {
    switch (props.mode) {
      case ListModes.CURRENCY_PAGE:
        return css`
          > li {
            gap: 0px 20px;
            font-size: 1rem;

            &:not(:last-child) {
              margin-bottom: 10px;
            }

            > span {
              &:first-of-type {
                width: 131px;
              }
            }
          }
        `;
      case ListModes.BAG_HEAD:
        return css`
          margin-bottom: 10px;
          max-width: 260px;
  
          > li {
            gap: 0 5px;
            > span {
              &:first-of-type {
                width: 39px;
                color: ${Colors.PURPLE};
              }
              &:nth-child(2) {
                width: auto;
              }
            }
          }
        `;
      case ListModes.BAG_CURRENCY:
        return css`
          margin-top: 5px;
          > li {
            gap: 0 5px;
            font-size: 0.875rem;
            > span {
              &:first-of-type {
                width: 51px;
              }
            }
          }
        `;
      }
    }
  }
`;