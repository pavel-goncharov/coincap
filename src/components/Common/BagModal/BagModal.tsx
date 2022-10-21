import {FC} from 'react';
import Button, {BtnModes} from 'components/UI/Button/Button';
import {TdNameModes} from 'components/Common/CurrencyTitle/CurrencyTitle';
import {Modal} from 'components/UI/Modal/Modal';
import {IListItem} from 'types/ui';
import {ListItem} from 'components/Common/BagModal/BagModal.styled';
import {IAsset} from 'types/api';
import List, {ListModes} from 'components/UI/List/List';
import CurrencyTitle from 'components/Common/CurrencyTitle/CurrencyTitle';

interface IBagModal {
  isActive: boolean;
  handler: () => void;
}

const BagModal: FC<IBagModal> = (props) => {
  const {isActive, handler} = props;
  const title: string = 'My bag';
  const btn: IAsset = {
    id: 'bitcoin',
    rank: '1',
    symbol: 'BTC',
    name: 'Multi Collateral DAI',
    supply: '17193925.0000000000000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '119179791817.6740161068269075',
    volumeUsd24Hr: '2928356777.6066665425687196',
    priceUsd: '6931.5058555666618359',
    changePercent24Hr: '-0.8101417214350335',
    vwap24Hr: '7175.0663247679233209'
  };

  const headList: IListItem[] = [
    { 
      id: 0,
      title: 'USD',
      value: '$21000000.0000000000000001'
    },
    { 
      id: 1,
      title: 'Bag',
      value: '$21000000.0000000000000001'
    }
  ];

  const currencyInfoList: IListItem[] = [
    { 
      id: 0,
      title: 'MATIC',
      value: '21000000.0000000000000001'
    },
    { 
      id: 1,
      title: 'USD',
      value: '$21000000.0000000000000001'
    }
  ];

  const btnTitle: string = 'Sell';

  return (
    <Modal isActive={isActive} handler={handler} title={title}>
      <List mode={ListModes.BAG_HEAD} items={headList}/>
      <ul>
        <ListItem>
          <div>
            <CurrencyTitle mode={TdNameModes.MODAL} currency={btn}/>
            <Button mode={BtnModes.REMOVE} handler={alert} title={btnTitle}/>
          </div> 
          <List mode={ListModes.BAG_CURRENCY} items={currencyInfoList}/>
        </ListItem>
      </ul>        
    </Modal>
  );
}

export default BagModal;