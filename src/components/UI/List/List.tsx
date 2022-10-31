import {FC} from 'react';
import {IListItem} from 'types/ui';
import {Container} from 'components/UI/List/List.styled';

export const enum ListModes {
  CURRENCY_PAGE = 'currencyPage',
  BAG_HEAD = 'bagHead',
  BAG_CURRENCY = 'bagCurrency'
}

interface IList {
  mode: ListModes;
  items: IListItem[];
  checked?: boolean;
}

const List: FC<IList> = (props) => {
  const {mode, items, checked} = props;
  return (
    <Container mode={mode}>
      {items.map(item => 
        <li key={item.id}>
          <span>{item.title}&#58;</span>
          {checked ? 
            <span>{checked ? item.complete : item.value}</span>
            :
            <span>{item.value}</span>
          }
        </li>
      )}
    </Container>
  );
}

export default List;