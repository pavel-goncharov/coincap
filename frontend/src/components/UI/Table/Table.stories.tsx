import {ComponentMeta, ComponentStory} from '@storybook/react';
import Table from '@/components/UI/Table/Table';
import {IAsset} from '@/types/api';
import {IMainTableItem} from '@/types/ui';
import {calcTableValue} from '@/utils/table';
import Button, {BtnIconKeys} from '../Button/Button';
import {MouseEvent, ReactNode} from 'react';
import CurrencyTitle, {CurrencyTitleModes} from '@/components/Common/CurrencyTitle/CurrencyTitle';

const initHeaders: string[] = [
  'Add', 'Rank', 'Name', 'price', 'Market Cap',
  'VWAP(24Hr)', 'Supply', 'Volume(24Hr)',
  'Change(24Hr)'
];

const assets: IAsset[] = [
  {
    id: "bitcoin",
    rank: "1",
    symbol: "BTC",
    name: "Bitcoin",
    supply: "17193925.0000000000000000",
    maxSupply: "21000000.0000000000000000",
    marketCapUsd: "119150835874.4699281625807300",
    volumeUsd24Hr: "2927959461.1750323310959460",
    priceUsd: "6929.8217756835584756",
    changePercent24Hr: "-0.8101417214350335",
    vwap24Hr: "7175.0663247679233209"
  },
  {
    id: "ethereum",
    rank: "2",
    symbol: "ETH",
    name: "Ethereum",
    supply: "101160540.0000000000000000",
    maxSupply: null,
    marketCapUsd: "40967739219.6612727047843840",
    volumeUsd24Hr: "1026669440.6451482672850841",
    priceUsd: "404.9774667045200896",
    changePercent24Hr: "-0.0999626159535347",
    vwap24Hr: "415.3288028454417241"
  }
];


function getCurrencyName(currency: IAsset): ReactNode {
  return <CurrencyTitle 
    mode={CurrencyTitleModes.TABLE} 
    name={currency.name}
    symbol={currency.symbol}
  />
}

function handlerAddBtn(e: MouseEvent<HTMLButtonElement>): void {
  e.stopPropagation();
  alert('Handler addBtn')
}

function getDataForCryptoTable(cryptoInfo: IAsset[]): IMainTableItem[] {
  const cryptoInfoDataTable = cryptoInfo.map(cryptoInfo => ({
    id: cryptoInfo.id,
    columns: {
      addButton: 
        <Button
          iconKey={BtnIconKeys.PLUS}
          handler={e => handlerAddBtn(e)}
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

const initRows: IMainTableItem[] = getDataForCryptoTable(assets);

export default {
  title: 'UI/Table',
  component: Table,
  argTypes: {
    headers: {
      description: 'Array of table headers',
      control: {
        type: 'object'
      }
    },
    rows: {
      description: 'Array of RowItems',
      control: {
        type: 'object'
      }
    },
    columnsColor: {
      description: 'What columns to set color',
      table: {
        defaultValue: {summary: 'undefined'},
      }
    },
    rowHandler: {
      description: 'Handler when apply click on row'
    }
  }
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args}/>

export const Default = Template.bind({});
Default.args = {
  headers: initHeaders,
  rows: initRows,
  columnsColor: [8],
  rowHandler: () => alert('row handler')
};
