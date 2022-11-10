import styled, {css} from 'styled-components';

interface IChartContainer {
  hasData: boolean;
}
export const Container = styled.div<IChartContainer>`
  width: 100%;
  ${(props) => {
    switch (props.hasData) {
      case true:
        return css`
          height: 35vw;
        `;
      case false:
        return css`
          margin-top: 5px;
        `;
      }
    }
  }
`;