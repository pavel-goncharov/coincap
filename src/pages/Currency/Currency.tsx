import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Chart from 'components/UI/Chart/Chart';
import {IAsset} from 'types/api';
import {IListItem, line} from 'types/ui';
import Button, {BtnModes} from 'components/UI/Button/Button';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import List, {ListModes} from 'components/UI/List/List';
import AddModal from 'components/Common/BuyingModal/BuyingModal';
import {BsPlusSquareFill} from 'react-icons/bs';
import {Main} from 'pages/Currency/Currency.styled';
import {ChartData} from 'chart.js';
import {Loader} from 'components/UI/Loader/Loader.styled';
import {chartOptions, getChartData} from 'utils/chart';
import {useGetAssetOneQuery, useGetHistoryQuery} from 'api/endPoints';
import {getCurrencyList} from 'pages/Currency/currency.data';
import {getArgsHistory} from 'utils/currency';
import {useActions} from 'hooks/useActions';

const Currency: FC = () => {
  const {id} = useParams();
  
  const {data: asset, isLoading: isLoadingAsset} = useGetAssetOneQuery(id!);
  const {data: history, isLoading: isLoadingHistory} = useGetHistoryQuery(getArgsHistory(id!));

  const {setIsActiveBuyingModal} = useActions();

  const [currency, setCurrency] = useState<IAsset | null>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [chartData, setChartData] = useState<ChartData<line> | null>(null);

  const isLoading: boolean = isLoadingAsset || !currency || isLoadingHistory || !chartData;
  
  useEffect(() => {
    if(asset && history) {
      setCurrency(asset);
      const historyChartData = getChartData(history);
      setChartData(historyChartData);
    }
  }, [asset, history]);

  function handlerSwitch(): void {
    setChecked(!checked);
  };

  const currencyList: IListItem[] = getCurrencyList(currency!);
  const title: string = `${currency?.name} (${currency?.symbol})`;
  const checkboxTitle: string = 'More';
  const btnTitle: string = 'Add';

  if(isLoading) {
    return <Loader/>
  }

  return ( 
    <Main>
      <h2>{title}</h2>
      <Checkbox
        title={checkboxTitle}
        checked={checked}
        handler={handlerSwitch}
      />
      <Button 
        mode={BtnModes.DOUBLE}
        title={btnTitle}
        icon={<BsPlusSquareFill/>}
        handler={setIsActiveBuyingModal}
      />        
      <List
        mode={ListModes.CURRENCY_PAGE}
        items={currencyList}
        checked={checked}
      />
      <Chart
        options={chartOptions}
        data={chartData}
      />
      <AddModal
        currency={currency}
      />
    </Main>
  );
}

export default Currency;