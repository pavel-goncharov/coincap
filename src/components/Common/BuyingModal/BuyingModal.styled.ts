import styled, {css} from 'styled-components';
import {flex, Directions} from 'styles/mixins/flex';
import {Colors} from 'styles/vars';

interface IHint {
  isEnough: boolean;
}

export const Container = styled.form`
  ${flex({fd: Directions.COLUMN, g: '10px'})}
`;

export const Hint = styled.p<IHint>`
  ${(props) => {
    switch (props.isEnough) {
      case true:
        return css`
          color: ${Colors.DARK_BLUE};
        `;
      case false:
        return css`
          color: ${Colors.RED};
        `;
    }
  }}
`;