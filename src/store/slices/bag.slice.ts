import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SliceNames} from 'constants/slices';
import {ICurrency, IPayloadSetNumber} from 'types/bag';
import {getTotalNumber} from 'utils/bag';
import {setItem} from 'utils/localStorage';
import {LocalStorageKeys} from 'constants/localStorage';

export interface IBagState {
  usd: number;
  currency: ICurrency[];
} 

const initialState: IBagState = {
  usd: 0,
  currency: []
};

const bagSlice = createSlice({
  name: SliceNames.BAG,
  initialState,
  reducers: {
    initBagState(state, action: PayloadAction<IBagState>) {
      const {usd, currency} = action.payload;
      state.usd = usd;
      state.currency = currency;
    },
    setNumberCurrency(state, action: PayloadAction<IPayloadSetNumber>) {  
      const {id, number, priceUsd} = action.payload;
      const currencyOne = state.currency.find(currencyOne => currencyOne.id === id);
      if(currencyOne) {
        const historyItem = {
          date: Date.now(),
          number,
          priceUsd
        };
        currencyOne.history.push(historyItem);
        setItem(LocalStorageKeys.BAG, state);
      }
    },
    sellCurrencyOne(state, action: PayloadAction<string>) {
      const currencyOne = state.currency.find(currencyOne => currencyOne.id === action.payload);
      if(currencyOne) {
        const totalNumber: number = getTotalNumber(currencyOne.history);
        const usd: number = getTotalNumber(currencyOne.history, currencyOne.priceUsd);
        
        const historyItem = {
          date: Date.now(),
          number: totalNumber * (-1),
          priceUsd: currencyOne.priceUsd
        };
        currencyOne.history.push(historyItem);

        state.usd += usd;
        setItem(LocalStorageKeys.BAG, state);
      }
    }
  }
});

export default bagSlice;