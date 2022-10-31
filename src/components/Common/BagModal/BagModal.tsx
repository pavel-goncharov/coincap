import {FC, Fragment} from 'react';
import Button, {BtnModes} from 'components/UI/Button/Button';
import {CurrencyTitleModes} from 'components/Common/CurrencyTitle/CurrencyTitle';
import {Modal} from 'components/UI/Modal/Modal';
import {IListItem} from 'types/ui';
import {ListItem} from 'components/Common/BagModal/BagModal.styled';
import List, {ListModes} from 'components/UI/List/List';
import CurrencyTitle from 'components/Common/CurrencyTitle/CurrencyTitle';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {getCurrencyInfo, getTotalCostBag, isSpent} from 'utils/bag';
import {ICurrency} from 'types/bag';
import {useActions} from 'hooks/useActions';

interface IBagModal {
  isActive: boolean;
  handler: () => void;
}

const BagModal: FC<IBagModal> = (props) => {
  const {isActive, handler} = props;
  
  const usd: number = useTypedSelector(store => store.bag.usd);
  const currencyBag: ICurrency[] = useTypedSelector(store => store.bag.currency);
  const totalCostBag: number = getTotalCostBag(usd, currencyBag);
  const {sellCurrencyOne} = useActions();
  
  function sellHandler(id: string) {
    sellCurrencyOne(id);
  }

  const title: string = 'My bag';
  const headList: IListItem[] = [
    {id: 0, title: 'USD', value: `$${usd}`},
    {id: 1, title: 'Bag', value: `$${totalCostBag}`}
  ];
  const btnTitle: string = 'Sell';

  return (
    <Modal isActive={isActive} handler={handler} title={title}>
      <List mode={ListModes.BAG_HEAD} items={headList}/>
      <ul>
        {currencyBag.map((cur: ICurrency) => 
          <Fragment key={cur.id}>
            {!isSpent(cur.history) &&
              <ListItem>
                <div>
                  <CurrencyTitle
                    mode={CurrencyTitleModes.MODAL}
                    name={cur.name}
                    symbol={cur.symbol}
                  />
                  <Button
                    mode={BtnModes.REMOVE}
                    handler={() => sellHandler(cur.id)}
                    title={btnTitle}
                  />
                </div> 
                <List mode={ListModes.BAG_CURRENCY} items={getCurrencyInfo(cur)}/>
              </ListItem>
            }
          </Fragment>
        )}
      </ul>        
    </Modal>
  );
}

export default BagModal;