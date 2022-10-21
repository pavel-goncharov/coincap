import {FC, ReactNode, useEffect, useState} from 'react';
import Table from 'components/UI/Table/Table';
import {IAsset} from 'types/api';
import {IMainTableItem, IPagination} from 'types/ui';
import AddModal from 'components/Common/AddModal/AddModal';
import {calcTableValue} from 'utils/table';
import Button, {BtnModes} from 'components/UI/Button/Button';
import {BsPlusSquareFill} from 'react-icons/bs';
import CurrencyTitle, {TdNameModes} from 'components/Common/CurrencyTitle/CurrencyTitle';

const Main: FC = () => {
  const [currency, setCurrency] = useState<IMainTableItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
  const [currencyPerPage] = useState<number>(10);
  const [currentCurrency, setCurrentCurrency] = useState<IAsset | null>(null);

  // const isLoading: boolean = !currency.length || !currentCurrency;
  const isLoading: boolean = !currency.length;

  useEffect(() => {    
    fetchCryptoInfo();
  }, []);

  async function fetchCryptoInfo(): Promise<void> {
    const cryptoInfo: IAsset[] = await fetch('https://api.coincap.io/v2/assets')
      .then(res => res.json())
      .then(result => result.data);
    const cryptoInfoDataTable = getDataForCryptoTable(cryptoInfo);
    setCurrency(cryptoInfoDataTable);
  }

  function getDataForCryptoTable(cryptoInfo: IAsset[]): IMainTableItem[] {
    const cryptoInfoDataTable = cryptoInfo.map(cryptoInfo => ({
      id: cryptoInfo.id,
      columns: {
        addButton: 
          <Button
            mode={BtnModes.ICON}
            icon={<BsPlusSquareFill/>}
            handler={(e) => handlerAddBtn(e, cryptoInfo)}
            key={cryptoInfo.id}
          />,
        rank: calcTableValue(cryptoInfo.rank),
        name: getCurrencyName(cryptoInfo),
        priceUsd: calcTableValue(cryptoInfo.priceUsd, '$'),
        marketCapUsd: calcTableValue(cryptoInfo.marketCapUsd, '$'),
        vwap24Hr: calcTableValue(cryptoInfo.vwap24Hr, '$'),
        supply:  calcTableValue(cryptoInfo.supply),
        volumeUsd24Hr: calcTableValue(cryptoInfo.volumeUsd24Hr, '$'),
        changePercent24Hr: calcTableValue(cryptoInfo.changePercent24Hr, '%', false)
      }
    }));
  
    return cryptoInfoDataTable;
  }

  function goToPage(pageNumber: number): void {
    setCurrentPage(pageNumber);
  }

  function changeCurrentPage(pageNumber: number): void {
    setCurrentPage(pageNumber);
  }

  function handlerModalAdd(): void {
    setIsActiveModal(!isActiveModal);
  }

  function handlerAddBtn(e: Event, currency: IAsset): void {
    e.stopPropagation();
    setCurrentCurrency(currency);
    handlerModalAdd();
  }

  function getCurrencyName(currency: IAsset): ReactNode {
    return <CurrencyTitle mode={TdNameModes.TABLE} currency={currency}/>
  }

  const tHeaders: string[] = [
    'Add', 'Rank', 'Name', 'Prise', 'Market Cap',
    'VWAP(24Hr)', 'Supply', 'Volume(24Hr)',
    'Change(24Hr)'
  ];

  const pag: IPagination = {
    currencyPerPage,
    totalCurrency: currency.length,
    goToPage,
    currentPage,
    changeCurrentPage
  };

  const lastCurrencyPerPage: number = currentPage * currencyPerPage;
  const firstCurrencyPerPage: number = lastCurrencyPerPage - currencyPerPage;
  const currentCurrencyPerPage: IMainTableItem[] = currency.slice(firstCurrencyPerPage, lastCurrencyPerPage); 
  const columnsColor: number[] = [0, 8];
  const isMoveToPageRow: boolean = true; 

  return (
    <main>
      {currentCurrency &&
        <AddModal
          isActive={isActiveModal}
          handler={handlerModalAdd}
          currency={currentCurrency}
        />
      }
      <Table
        tHeaders={tHeaders}
        tData={currentCurrencyPerPage}
        isLoading={isLoading}
        columnsColor={columnsColor}
        isMoveToPageRow={isMoveToPageRow}
        pag={pag}
      />
    </main>
  );
}

export default Main;