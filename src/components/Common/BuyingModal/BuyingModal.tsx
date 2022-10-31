import {FC, FormEvent, useState} from 'react';
import {Modal} from 'components/UI/Modal/Modal';
import {Container, Hint} from 'components/Common/BuyingModal/BuyingModal.styled';
import Input from 'components/UI/Input/Input';
import Button, {BtnTypes, BtnModes} from 'components/UI/Button/Button';
import {IAsset} from 'types/api';
import {roundNumber} from 'utils/common';
import {useActions} from 'hooks/useActions';
import {IPayloadSetNumber} from 'types/bag';
import {useTypedSelector} from 'hooks/useTypedSelector';

interface IAddModal {
  currency: IAsset | null;
}

const AddModal: FC<IAddModal> = (props) => {
  const {currency} = props;

  const isActiveBuyingModal: boolean = useTypedSelector(state => state.common.isActiveBuyingModal);
  const usdBag: number = useTypedSelector(state => state.bag.usd);

  const {setNumberCurrency, setIsActiveBuyingModal} = useActions();

  const [value, setValue] = useState<number>(1);

  function getTotalUsd(value: number, currency: IAsset | null): number {
    return roundNumber(value * Number(currency?.priceUsd)); 
  }

  function getHintStr(isEnough: boolean, currency: IAsset | null, totalUsd: number): string {
    return isEnough ?
      `${value} ${currency?.symbol} = $${totalUsd}` : 
      'Not enough funds';
  }

  function handlerOnSubmit(e: FormEvent<HTMLInputElement>, isEnough: boolean) {
    e.preventDefault();
    if(currency && isEnough) {
      const args: IPayloadSetNumber = {
        asset: currency,
        number: value
      };
      setNumberCurrency(args);
      setIsActiveBuyingModal();
    }
  }

  const addModalTitle: string = `Buying ${currency?.symbol}`
  const btnTitle: string = 'Confirm';
  const AddedCurrencyUsd: number = getTotalUsd(value, currency);
  const isEnough: boolean = usdBag >= AddedCurrencyUsd;
  const hintStr: string = getHintStr(isEnough, currency, AddedCurrencyUsd);

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
        <Hint
          isEnough={isEnough} 
        >
          {hintStr}
        </Hint>
        <Button
          type={BtnTypes.submit}
          mode={BtnModes.TITLE}
          title={btnTitle}
          handler={e => handlerOnSubmit(e, isEnough)}
          disabled={!isEnough}
        />          
      </Container>
    </Modal>
  );
}

export default AddModal;