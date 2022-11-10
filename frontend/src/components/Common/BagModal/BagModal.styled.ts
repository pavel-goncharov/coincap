import styled from 'styled-components';
import {flex, Justifys, Wraps} from '@/styles/mixins/flex';
import {Colors} from '@/styles/vars';

export const ListItem = styled.li`
  padding: 15px 20px;
  border: 2px solid ${Colors.PURPLE_LIGHT_TWO};
  border-radius: 20px;
  background-color: ${Colors.GRAY_LIGHT};

  & + li {
    margin-top: 10px;
  }

  > div {
    ${flex({jc: Justifys.BETWEEN, fw: Wraps.WRAP, g: '5px 10px'})}
  }
`;