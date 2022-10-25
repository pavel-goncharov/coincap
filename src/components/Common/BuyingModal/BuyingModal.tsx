import {FC, FormEvent, useState} from 'react';
import {Modal} from 'components/UI/Modal/Modal';
import {Container} from 'components/Common/BuyingModal/BuyingModal.styled';
import Input from 'components/UI/Input/Input';
import Button, {BtnTypes, BtnModes} from 'components/UI/Button/Button';
import {IAsset} from 'types/api';
import {roundNumber} from 'utils/common';
import {useActions} from 'hooks/useActions';
import {IPayloadSetNumber} from 'types/bag';
import {useTypedSelector} from 'hooks/useTypedSelector';

interface IAddModal {
  currency: IAsset;
}

const AddModal: FC<IAddModal> = (props) => {
  const {currency} = props;

  const isActiveBuyingModal: boolean = useTypedSelector(state => state.common.isActiveBuyingModal);

  const {setNumberCurrency, setIsActiveBuyingModal} = useActions();

  const [value, setValue] = useState<number>(1);

  function getConverterStr(value: number, currency: IAsset): string {
    const totalUSD: number = roundNumber(value * Number(currency.priceUsd)); 
    return `${value} ${currency.symbol} = $${totalUSD}`;
  }

  function handlerOnSubmit(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();
    const args: IPayloadSetNumber = {
      id: currency.id,
      priceUsd: Number(currency.priceUsd),
      number: value
    };
    setNumberCurrency(args);
    setIsActiveBuyingModal();
  }

  const addModalTitle: string = `Buying ${currency.symbol}`
  const btnTitle: string = 'Confirm';
  const converter: string = getConverterStr(value, currency);
  return (
    <Modal 
      isActive={isActiveBuyingModal} 
      handler={setIsActiveBuyingModal}
      title={addModalTitle}
    >
      <Container>
        <Input
          value={value}
          setValue={setValue}
        />
        <p>{converter}</p>
        <Button
          type={BtnTypes.submit}
          mode={BtnModes.TITLE}
          title={btnTitle}
          handler={handlerOnSubmit}
        />          
      </Container>
    </Modal>
  );
}

export default AddModal;