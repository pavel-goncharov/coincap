import styled, {css} from 'styled-components';
import {Aligns, Directions, Displays, flex, Justifys} from 'styles/mixins/flex';
import {Colors, Fonts} from 'styles/vars';

interface IContainerModal {
  isActive: boolean;
}

export const Container = styled.div<IContainerModal>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.BLACK_ALPHA};
  transition: .5s;
  z-index: 1;
  ${flex({jc: Justifys.CENTER, ai: Aligns.CENTER})}
 
  > div {
    max-height: 80vh;
    padding: 20px;
    border-radius: 5px;
    background-color: ${Colors.WHITE};
    transition: .5s;
    overflow-y: auto;
    ${flex({d: Displays.INLINE, fd: Directions.COLUMN, g: '10px'})}

    > div {
     ${flex({jc: Justifys.BETWEEN, g: '40px'})}
     
      > span {
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-family: ${Fonts.INTER_SEMIBOLD};
      }

      svg {
        position: relative;
        top: 1px;
      }
    };
  }

  @media (max-width: 576px) {
    > div {
      max-width: 300px;
    }
  }

  ${(props) => {
    switch (props.isActive) {
      case true:
        return css`
          opacity: 1;
          pointer-events: all;
          > div {
            transform: scale(1);
          }
        `;
      case false:
        return css`
          opacity: 0;
          pointer-events: none;
          > div {
            transform: scale(0.5);
          }
        `;
      }
    }
  }
`;