import styled from 'styled-components';
import {Aligns, flex, Justifys} from 'styles/mixins/flex';
import {Colors} from 'styles/vars';

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
`;