import {FC} from 'react';
import {Container, Content, PagButton} from 'components/UI/Pagination/Pagination.styled';
import {IPagination} from 'types/ui';
import Button, {BtnModes} from 'components/UI/Button/Button';
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs';

const Pagination: FC<IPagination> = (props) => {
  const {currencyPerPage, totalCurrency, goToPage, currentPage, changeCurrentPage} = props;

  function getPageNumbers(): number[] {
    const pageNumbers = [];
    
    for(let i: number = 1; i <= Math.ceil(totalCurrency / currencyPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }
  
  function goToPrevPage(): void {
    changeCurrentPage(currentPage - 1);
  }

  function goToNextPage(): void {
    changeCurrentPage(currentPage + 1);
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
          {getPageNumbers().map(page =>
            <li key={page}>
              <PagButton
                onClick={() => goToPage(page)}
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