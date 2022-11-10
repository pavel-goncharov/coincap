import styled from 'styled-components';
import {flex} from '@/styles/mixins/flex';
import {Colors, Fonts} from '@/styles/vars';

export const Container = styled.div`
  cursor: pointer;
  ${flex()}

  > h1 {
    font-size: 2rem;
    line-height: 2rem;
    height: 32px;
    font-family: ${Fonts.OPEN_SANS_BOLD};
    color: ${Colors.DARK_BLUE};

    > span {
      color: ${Colors.PURPLE};
    }
  }

  &:hover {
    > h1 {
      color: ${Colors.PURPLE};

      > span {
        color: ${Colors.DARK_BLUE};
      }
    } 
  }
`;