import {FC, useState} from 'react';
import {Container} from '@/components/UI/Header/Header.styled';
import Button, {BtnModes} from '@/components/UI/Button/Button';
import {BsFillBagFill} from 'react-icons/bs';
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
          mode={BtnModes.ICON}
          handler={handlerBagModal}
          icon={<BsFillBagFill/>}
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