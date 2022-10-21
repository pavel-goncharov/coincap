import {FC, useState} from 'react';
import {Modal} from 'components/UI/Modal/Modal';
import {Container} from 'components/Common/AddModal/AddModal.styled';
import Input from 'components/UI/Input/Input';
import Button, {BtnModes} from 'components/UI/Button/Button';
import {IAsset} from 'types/api';
import { roundNumber } from 'utils/table';

interface IAddModal {
  isActive: boolean;
  handler: () => void;
  currency: IAsset;
}

const AddModal: FC<IAddModal> = (props) => {
  const {isActive, handler, currency} = props;
  const [value, setValue] = useState<number>(1);

  function getConverterStr(value: number, currency: IAsset): string {
    const totalUSD: number = roundNumber(value * Number(currency.priceUsd)); 
    return `${value} ${currency.symbol} = $${totalUSD}`;
  }

  const addModalTitle: string = `Buying ${currency.symbol}`
  const btnTitle: string = 'Confirm';
  const converter: string = getConverterStr(value, currency);
  return (
    <Modal isActive={isActive} handler={handler} title={addModalTitle}>
      <Container>
        <Input
          value={value}
          setValue={setValue}
        />
        <p>{converter}</p>
        <Button
          mode={BtnModes.TITLE}
          title={btnTitle}
          handler={alert}
        />          
      </Container>
    </Modal>
  );
}

export default AddModal;