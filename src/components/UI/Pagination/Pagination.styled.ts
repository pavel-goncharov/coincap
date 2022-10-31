import styled, {css} from 'styled-components';
import {Aligns, flex, Justifys} from 'styles/mixins/flex';
import {Colors} from 'styles/vars';

interface IPagButton {
  isActive: boolean;
}

export const Container = styled.div`
  ${flex()}
`;

export const Content = styled.div`
  height: 30px;
  margin: 0 auto;
  ${flex({g: '10px'})}
  
  ul {
    height: 100%;
    ${flex({g: '5px'})}
    
    > li {
      height: 100%;
      border-radius: 50%;
      
      &:hover {
        background-color: ${Colors.PURPLE_LIGHT};
      }
    } 
  }
  
  button {
    height: 100%;
    > svg {
      width: 30px;
      height: 100%;
    }
  }
`;

export const PagButton = styled.button<IPagButton>`
  width: 30px;
  height: 100%;
  padding: 5px 10px;
  border: none;
  border-radius: inherit;
  font-size: 0.875rem;
  ${flex({jc: Justifys.CENTER, ai: Aligns.CENTER})};

  ${(props) => {
    switch (props.isActive) {
      case true:
        return css`
          background-color: ${Colors.PURPLE};
          color: ${Colors.WHITE};
        `;
      case false:
        return css`
          background-color: inherit;
          color: inherit;
        `;
      }
    }
  }
`;