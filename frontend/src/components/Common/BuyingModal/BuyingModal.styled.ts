import styled from 'styled-components';
import {flex, Directions} from '@/styles/mixins/flex';

export const Container = styled.form`
  ${flex({fd: Directions.COLUMN, g: '10px'})}
`;