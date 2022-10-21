import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Chart from 'components/UI/Chart/Chart';
import {IAsset} from 'types/api';
import {IListItem, line} from 'types/ui';
import Button, {BtnModes} from 'components/UI/Button/Button';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import List, {ListModes} from 'components/UI/List/List';
import AddModal from 'components/Common/AddModal/AddModal';
import {BsPlusSquareFill} from 'react-icons/bs';
import {Main} from 'pages/Currency/Currency.styled';
import {ChartData} from 'chart.js';
import {Loader} from 'components/UI/Loader/Loader.styled';
import {chartOptions, getChartData} from 'utils/chart';


const Currency: FC = () => {
  const {id} = useParams();
  const [currency, setCurrency] = useState<IAsset | null>(null);
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(true);
  const [chartData, setChartData] = useState<ChartData<line> | null>(null);

  const isLoading: boolean = !currency || !chartData;

  useEffect(() => {    
    fetchCryptoInfo();
    fetchCryptoHistory();
  }, []);

  async function fetchCryptoInfo(): Promise<void> {
    const cryptoInfo = await fetch(`https://api.coincap.io/v2/assets/${id}`)
      .then(res => res.json())
      .then(result => result.data);
    setCurrency(cryptoInfo);
  }

  async function fetchCryptoHistory(): Promise<void> {
    const hourInMs: number = 60 * 60 * 1000;
    const end: number = Date.now();
    const start: number = end - 25 * hourInMs;
    const cryptoHistory = await fetch(`https://api.coincap.io/v2/assets/${id}/history?interval=h1&start=${start}&end=${end}`)
      .then(res => res.json())
      .then(result => result.data);
    const historyChartData = getChartData(cryptoHistory);
    setChartData(historyChartData);
  }

  function handlerSwitch(): void {
    setChecked(!checked);
  };

  function handlerModalAdd(): void {
    setIsActiveModal(!isActiveModal);
  }

  const title: string = `${currency?.name} (${currency?.symbol})`;
  const checkboxTitle: string = 'More';
  const btnTitle: string = 'Add';

  const currencyList: IListItem[] = [
    {id: 0, title: 'Rank', value: '1', complete: currency?.rank},
    {id: 1, title: 'Prise', value: '1', complete: currency?.priceUsd},
    {id: 2, title: 'Market Cap', value: '1', complete: currency?.marketCapUsd},
    {id: 3, title: 'VWAP(24Hr)', value: '1', complete: currency?.vwap24Hr},
    {id: 4, title: 'Supply', value: '1', complete: currency?.supply},
    {id: 5, title: 'Max supply', value: '1', complete: currency?.maxSupply || 'no data'},
    {id: 6, title: 'Volume(24Hr)', value: '1', complete: currency?.volumeUsd24Hr},
    {id: 7, title: 'Change(24Hr)', value: '1', complete: currency?.changePercent24Hr}
  ];

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
        handler={handlerModalAdd}
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
      {currency &&
        <AddModal
          isActive={isActiveModal}
          handler={handlerModalAdd} 
          currency={currency}
        />
      }
    </Main>
  );
}

export default Currency;