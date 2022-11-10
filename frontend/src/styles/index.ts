import styled, {createGlobalStyle} from 'styled-components';
import {initFontFaces, fonts} from '@/styles/fonts';
import {Fonts} from '@/styles/vars';


export const IndexStyled = createGlobalStyle`
  ${initFontFaces(fonts)}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${Fonts.INTER_REGULAR};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Container = styled.div`
  padding: 10px 35px;

  @media (max-width: 576px) {
    padding: 10px 15px;
  }
`;