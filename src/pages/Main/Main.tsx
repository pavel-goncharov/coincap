import {FC, MouseEvent, ReactNode, useEffect, useState} from 'react';
import Table from '@/components/UI/Table/Table';
import {IAsset} from '@/types/api';
import {IMainTableItem} from '@/types/ui';
import AddModal from '@/components/Common/BuyingModal/BuyingModal';
import {calcTableValue} from '@/utils/table';
import Button, {BtnModes} from '@/components/UI/Button/Button';
import {BsPlusSquareFill} from 'react-icons/bs';
import CurrencyTitle, {CurrencyTitleModes} from '@/components/Common/CurrencyTitle/CurrencyTitle';
import {useTypedSelector} from '@/hooks/useTypedSelector';
import {useActions} from '@/hooks/useActions';
import {Loader} from '@/components/UI/Loader/Loader.styled';
import {useGetAssetsQuery} from '@/api/endPoints';
import {getFirstCurrency} from '@/utils/currency';
import {limit} from '@/api/constants';

const Main: FC = () => {
  const currentPage = useTypedSelector(store => store.common.mainPagItem);
  const {data: assets, isLoading} = useGetAssetsQuery({offset: getFirstCurrency(currentPage, limit), limit});

  const {setIsActiveBuyingModal} = useActions();

  const [currency, setCurrency] = useState<IMainTableItem[]>([]);
  const [currentCurrency, setCurrentCurrency] = useState<IAsset | null>(null);

  useEffect(() => {
    if(assets) {
      const cryptoInfoDataTable = getDataForCryptoTable(assets);
      setCurrency(cryptoInfoDataTable);
    }
  }, [assets]);

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
      <Table
        tHeaders={tHeaders}
        tData={currency}
        columnsColor={columnsColor}
      />
    </main>
  );
}

export default Main;