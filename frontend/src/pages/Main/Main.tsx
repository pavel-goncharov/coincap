import {FC, MouseEvent, ReactNode, useEffect, useState} from 'react';
import Table from '@/components/UI/Table/Table';
import {IAsset} from '@/types/api';
import {IMainTableItem} from '@/types/ui';
import AddModal from '@/components/Common/BuyingModal/BuyingModal';
import {calcTableValue} from '@/utils/table';
import Button, {BtnIconKeys} from '@/components/UI/Button/Button';
import CurrencyTitle, {CurrencyTitleModes} from '@/components/Common/CurrencyTitle/CurrencyTitle';
import {useTypedSelector} from '@/hooks/useTypedSelector';
import {useActions} from '@/hooks/useActions';
import {Loader} from '@/components/UI/Loader/Loader.styled';
import {useGetAssetsQuery} from '@/api/endPoints';
import {getFirstCurrency} from '@/utils/currency';
import {limit, totalCurrency} from '@/api/constants';
import {RoutePaths} from '@/router/router';
import {generatePath, useNavigate} from 'react-router-dom';
import Pagination from '@/components/UI/Pagination/Pagination';
import {TableContainer} from '@/components/UI/Table/Table.styled';


const Main: FC = () => {
  const currentPage = useTypedSelector(store => store.common.mainPagItem);
  const {data: assets, isLoading} = useGetAssetsQuery({offset: getFirstCurrency(currentPage, limit), limit});

  const {setIsActiveBuyingModal} = useActions();
  const navigate = useNavigate();

  const [currency, setCurrency] = useState<IMainTableItem[]>([]);
  const [currentCurrency, setCurrentCurrency] = useState<IAsset | null>(null);

  useEffect(() => {
    if(assets) {
      const cryptoInfoDataTable = getDataForCryptoTable(assets);
      setCurrency(cryptoInfoDataTable);
    }
  }, [assets]);


  function goToCurrencyPage(id: string): void {
    const pagePath = generatePath(RoutePaths.CURRENCY, {id});
    navigate(pagePath);
  }

  function getDataForCryptoTable(cryptoInfo: IAsset[]): IMainTableItem[] {
    const cryptoInfoDataTable = cryptoInfo.map(cryptoInfo => ({
      id: cryptoInfo.id,
      columns: {
        addButton: 
          <Button
            iconKey={BtnIconKeys.PLUS}
            handler={(e) => handlerAddBtn(e, cryptoInfo)}
            key={cryptoInfo.id}
          />,
        rank: calcTableValue(cryptoInfo.rank),
        name: getCurrencyName(cryptoInfo),
        priceUsd: calcTableValue(cryptoInfo.priceUsd, '$'),
        marketCapUsd: calcTableValue(cryptoInfo.marketCapUsd, '$'),
        vwap24Hr: calcTableValue(cryptoInfo.vwap24Hr, '$') || 'no data',
        supply: calcTableValue(cryptoInfo.supply),
        volumeUsd24Hr: calcTableValue(cryptoInfo.volumeUsd24Hr, '$'),
        changePercent24Hr: calcTableValue(cryptoInfo.changePercent24Hr, '%', false, true)
      }
    }));
  
    return cryptoInfoDataTable;
  }

  function handlerAddBtn(e: MouseEvent<HTMLButtonElement>, currency: IAsset): void {
    e.stopPropagation();
    setCurrentCurrency(currency);
    setIsActiveBuyingModal();
  }

  function getCurrencyName(currency: IAsset): ReactNode {
    return <CurrencyTitle 
      mode={CurrencyTitleModes.TABLE} 
      name={currency.name}
      symbol={currency.symbol}
    />
  }

  const tHeaders: string[] = [
    'Add', 'Rank', 'Name', 'price', 'Market Cap',
    'VWAP(24Hr)', 'Supply', 'Volume(24Hr)',
    'Change(24Hr)'
  ];

  const columnsColor: number[] = [8];
  
  if(isLoading) {
    return <Loader/>
  }

  return (
    <main>
      <AddModal
        currency={currentCurrency}
      />
      <TableContainer>
        <Table
          headers={tHeaders}
          rows={currency}
          columnsColor={columnsColor}
          rowHandler={goToCurrencyPage}
        />
        <Pagination 
          currencyPerPage={limit}
          totalCurrency={totalCurrency}
        />
      </TableContainer>
    </main>
  );
}

export default Main;