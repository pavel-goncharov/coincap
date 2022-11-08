import {FC, useState} from 'react';
import {Container} from '@/components/UI/Header/Header.styled';
import Button, {BtnIconKeys} from '@/components/UI/Button/Button';
import Logo from '@/components/UI/Logo/Logo';
import BagModal from '@/components/Common/BagModal/BagModal';
import TopCurrency from '@/components/UI/Header/TopCurrency/TopCurrency';

const Header: FC = () => {
  const [isActiveBagModal, setIsActiveBagModal] = useState<boolean>(false);

  function handlerBagModal(): void {
    setIsActiveBagModal(!isActiveBagModal);
  }

  return (
    <Container>
      <section>
        <Logo/>
        <Button
          handler={handlerBagModal}
          iconKey={BtnIconKeys.BAG}
        />
      </section>
      <TopCurrency/>
      <BagModal
        isActive={isActiveBagModal}
        handler={handlerBagModal}
      />
    </Container>
  );
}

export default Header;