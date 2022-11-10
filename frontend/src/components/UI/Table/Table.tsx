import {FC, ReactNode} from 'react';
import {TableSt, Td} from '@/components/UI/Table/Table.styled';
import {IMainTableItem} from '@/types/ui';
import {setColorTd} from '@/utils/table';

interface ITable {
  headers: string[];
  rows: IMainTableItem[];
  columnsColor?: number[];
  rowHandler: (id: string) => void;
}

const Table: FC<ITable> = (props) => {
  const {headers, rows, columnsColor, rowHandler} = props;

  return (
    <TableSt>
      <thead>
        <tr>
          {headers.map((header, index) => 
            <th key={index}>{header}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((rowItem: IMainTableItem) =>
          <tr
            onClick={() => rowHandler(rowItem.id)} 
            key={rowItem.id}
          >
            {Object.values(rowItem.columns).map((dataCell: string | ReactNode, y: number) =>
              <Td
                color={setColorTd(columnsColor!, y, dataCell)}
                key={y}
              >
                {dataCell}
              </Td>
            )}
          </tr> 
        )}
      </tbody>
    </TableSt>
  );
}

export default Table;