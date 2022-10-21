import styled from 'styled-components';
import {Aligns, flex, Justifys} from 'styles/mixins/flex';
import {Colors, Fonts} from 'styles/vars';

export const Container = styled.header`
  height: 68px;
  margin-bottom: 20px;
  background-color: ${Colors.WHITE};
  color: ${Colors.DARK_BLUE};

  > section {
    height: 52px;
    padding-bottom: 10px;
    ${flex({jc:Justifys.BETWEEN, ai: Aligns.CENTER})}
  }

  > ul {
    height: 16px;
    overflow: auto hidden;
    ${flex({ai: Aligns.CENTER, g: '10px'})}
    
    &::-webkit-scrollbar {
      display: none;
    }
  
    > li {
      height: 100%;
      font-size: 0.75rem;

      > span {
        &:first-child {
        font-family: ${Fonts.INTER_SEMIBOLD};
          color: ${Colors.PURPLE};
        }
      }
    }
  }
`;