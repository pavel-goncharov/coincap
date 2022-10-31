import styled from 'styled-components';
import {Aligns, flex} from 'styles/mixins/flex';
import {Colors, Fonts} from 'styles/vars';

interface ISpanDiff {
  color: Colors;
}

export const Container = styled.ul`
  height: 16px;
  overflow: auto hidden;
  ${flex({ai: Aligns.CENTER, g: '20px'})}
  
  &::-webkit-scrollbar {
    display: none;
  }

  > li {
    height: 100%;
    font-size: 0.75rem;
    ${flex({g: '5px'})}

    > span {
      white-space: nowrap;
      &:first-child {
      font-family: ${Fonts.INTER_SEMIBOLD};
        color: ${Colors.PURPLE};
      }
    }
  }
`;

export const SpanDiff = styled.span<ISpanDiff>`
  color: ${props => props.color};
`;