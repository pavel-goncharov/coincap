import {FC, useEffect, useState} from 'react';
import {Container, Content, PagButton} from 'components/UI/Pagination/Pagination.styled';
import {IPagination} from 'types/ui';
import Button, {BtnModes} from 'components/UI/Button/Button';
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {useActions} from 'hooks/useActions';
import {getItem, setItem} from 'utils/localStorage';
import {LocalStorageKeys} from 'utils/localStorage';

const Pagination: FC<IPagination> = (props) => {
  const {currencyPerPage, totalCurrency} = props;

  const currentPage = useTypedSelector(store => store.common.mainPagItem);
  const {setMainPagItem} = useActions();

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    const pagNumbers: number[] = calcPagNumbers();
    setPageNumbers(pagNumbers);

    const mainPagItem = getItem<number>(LocalStorageKeys.MAIN_PAG_ITEM);    
    if(mainPagItem) {
      const hasNumber: boolean = pagNumbers.includes(mainPagItem);
      setMainPagItem(hasNumber ? mainPagItem : 1);
    } else {
      setItem(LocalStorageKeys.MAIN_PAG_ITEM, 1);
    }
  }, []);

  function calcPagNumbers(): number[] {
    const pageNumbers = [];
    
    for(let i: number = 1; i <= Math.ceil(totalCurrency / currencyPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }
  
  function goToPrevPage(): void {
    setMainPagItem(currentPage - 1);
  }

  function goToNextPage(): void {
    setMainPagItem(currentPage + 1);
  }

  const isFirstPage: boolean = currentPage === 1;
  const isActivePage = (page: number): boolean => page === currentPage;
  const isLastPage: boolean = currentPage === Math.ceil(totalCurrency / currencyPerPage);

  return (
    <Container>
      <Content>
        <Button 
          mode={BtnModes.ICON}
          icon={<BsFillArrowLeftSquareFill/>}
          handler={goToPrevPage}
          disabled={isFirstPage}
        />
        <ul>
          {pageNumbers.map(page =>
            <li key={page}>
              <PagButton
                onClick={() => setMainPagItem(page)}
                isActive={isActivePage(page)}
              >
                {page}
              </PagButton>
            </li>
          )}
        </ul>
        <Button 
          mode={BtnModes.ICON}
          icon={<BsFillArrowRightSquareFill/>}
          handler={goToNextPage}
          disabled={isLastPage}
        />
      </Content>
    </Container>
  );
}

export default Pagination;