import {FC, useState} from 'react';
import {Container} from 'components/UI/Header/Header.styled';
import Button, {BtnModes} from 'components/UI/Button/Button';
import {BsFillBagFill} from 'react-icons/bs';
import Logo from 'components/UI/Logo/Logo';
import {ITopCurrency} from 'types/ui';
import BagModal from 'components/Common/BagModal/BagModal';

const Header: FC = () => {
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);

  function handlerModalAdd(): void {
    setIsActiveModal(!isActiveModal);
  }

  const topCurrency: ITopCurrency[] = [
    {
      name: 'MATIC',
      usd: '$9999999,999999', 
      usdDiff: '-$9999999,999999', 
      percentDiff: '-0.0058%'
    },
    {
      name: 'MATIC',
      usd: '$9999999,999999', 
      usdDiff: '-$9999999,999999', 
      percentDiff: '-0.0058%'
    },
    {
      name: 'MATIC',
      usd: '$9999999,999999', 
      usdDiff: '-$9999999,999999', 
      percentDiff: '-0.0058%'
    }
  ];

  return (
    <Container>
      <section>
        <Logo/>
        <Button
          mode={BtnModes.ICON}
          handler={() => setIsActiveModal(!isActiveModal)}
          icon={<BsFillBagFill/>}
        />
      </section>
      <ul>
        {topCurrency.map((currency, index) =>
          <li key={index}>
            <span>{currency.name}:&nbsp;</span>
            <span>{currency.usd}&nbsp;</span>
            <span>{currency.usdDiff}&nbsp;</span>
            <span>({currency.percentDiff})</span>
          </li>
        )}
      </ul>
      <BagModal isActive={isActiveModal} handler={handlerModalAdd}/>
    </Container>
  );
}

export default Header;