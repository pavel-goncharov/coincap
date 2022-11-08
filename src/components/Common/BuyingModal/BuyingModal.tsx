import {FC, FormEvent, useState} from 'react';
import {Modal} from '@/components/UI/Modal/Modal';
import {Container} from '@/components/Common/BuyingModal/BuyingModal.styled';
import InputNumber from '@/components/UI/InputNumber/InputNumber';
import Button, {BtnTypes, BtnModes} from '@/components/UI/Button/Button';
import {IAsset} from '@/types/api';
import {roundNumber} from '@/utils/common';
import {useActions} from '@/hooks/useActions';
import {IPayloadSetNumber} from '@/types/bag';
import {useTypedSelector} from '@/hooks/useTypedSelector';
import {IInputNumberSt} from '@/components/UI/InputNumber/InputNumber.styled';

interface IAddModal {
  currency: IAsset | null;
}

const AddModal: FC<IAddModal> = (props) => {
  const {currency} = props;

  const isActiveBuyingModal: boolean = useTypedSelector(state => state.common.isActiveBuyingModal);
  const {setNumberCurrency, setIsActiveBuyingModal} = useActions();

  const [value, setValue] = useState<number>(1);

  function getHintStr(value: number, currency: IAsset | null): string {
    const number: number = value <= maxNumber ? value : maxNumber;
    const totalUsd: number = roundNumber(number * Number(currency?.priceUsd));
    return `${number} ${currency?.symbol} = $${totalUsd}`;
  }

  function handlerOnSubmit(e: FormEvent<HTMLInputElement>): void {
    e.preventDefault();
    if(currency) {
      const args: IPayloadSetNumber = {
        asset: currency,
        number: value
      };
      setNumberCurrency(args);
      setIsActiveBuyingModal();
    }
  }

  const maxNumber: number = 1000000000;
  const inputPropsSt: IInputNumberSt = {
    step: 0.01,
    min: 0.01,
    max: maxNumber, 
    placeholder: 'input number'
  }
  const addModalTitle: string = `Buying ${currency?.symbol}`
  const btnTitle: string = 'Confirm';
  const hintStr: string = getHintStr(value, currency);

  return (
    <Modal 
      isActive={isActiveBuyingModal} 
      handler={setIsActiveBuyingModal}
      title={addModalTitle}
    >
      <Container>
        <InputNumber
          value={value}
          setValue={setValue}
          propsSt={inputPropsSt}
        />
        <p>{hintStr}</p>
        <Button
          type={BtnTypes.SUBMIT}
          title={btnTitle}
          handler={handlerOnSubmit}
        />          
      </Container>
    </Modal>
  );
}

export default AddModal;