import {FC, ReactNode} from 'react';
import {Container, Content, Td} from 'components/UI/Table/Table.styled';
import {RoutePaths} from 'router/router';
import {generatePath, useNavigate} from 'react-router-dom';
import {IMainTableItem, IPagination} from 'types/ui';
import Pagination from 'components/UI/Pagination/Pagination';
import {Loader} from 'components/UI/Loader/Loader.styled';
import {setColorTd} from 'utils/table';

interface ITable {
  tHeaders: string[];
  tData: IMainTableItem[];
  isLoading: boolean;
  columnsColor?: number[];
  isMoveToPageRow: boolean;
  pag: IPagination;
}

const Table: FC<ITable> = (props) => {
  const {tHeaders, tData, isLoading, columnsColor, isMoveToPageRow, pag} = props;
  const {currencyPerPage, totalCurrency} = pag;

  const navigate = useNavigate();

  function goToCurrencyPage(id: string): void {
    if(!isMoveToPageRow) return; 
    const pagePath = generatePath(RoutePaths.CURRENCY, {id});
    navigate(pagePath);
  }

  if(isLoading) {
    return <Loader/>
  }

  return (
    <Container>
      <Content>
        <thead>
          <tr>
            {tHeaders.map((header, index) => 
              <th key={index}>{header}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {tData.map((rowItem: IMainTableItem) =>
            <tr
              onClick={() => goToCurrencyPage(rowItem.id)} 
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
      </Content>
      <Pagination 
        currencyPerPage={currencyPerPage}
        totalCurrency={totalCurrency}
      />
    </Container>
  );
}

export default Table;