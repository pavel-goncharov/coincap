import styled from 'styled-components';
import {Colors} from '@/styles/vars';

interface ITd {
  color?: Colors;
}

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TableSt = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  overflow-x: auto;

  td, th {
    padding: 5px;
    text-align: left;

    &:first-of-type {
      width: 50px;
    }

    &:nth-child(3) {
      min-width: 205px;
    }
  }

  th {
    background-color: ${Colors.PURPLE};
    color: ${Colors.WHITE};
  }

  td {
    font-size: 0.875rem;
  }

  > tbody {
    tr:not(:last-child) {
      border-bottom: 1px solid ${Colors.PURPLE_LIGHT};
    }

    > tr:hover {
      background-color: ${Colors.PURPLE_LIGHT};
      cursor: pointer;
    }
  }
`;

export const Td = styled.td<ITd>`
  color: ${props => props.color};
`;