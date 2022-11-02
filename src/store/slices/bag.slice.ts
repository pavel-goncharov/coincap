import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SliceNames} from 'constants/slices';
import {ICurrency, IHistory, IPayloadSetNumber} from 'types/bag';
import {getTotalNumber} from 'utils/bag';
import {setItem} from 'utils/localStorage';
import {LocalStorageKeys} from 'constants/localStorage';
import {mockIds} from 'constants/mock';

export interface IBagState {
  currency: ICurrency[];
  ids: string[];
} 

const initialState: IBagState = {
  currency: [],
  ids: mockIds
};

const bagSlice = createSlice({
  name: SliceNames.BAG,
  initialState,
  reducers: {
    initBagState(state, action: PayloadAction<IBagState>) {
      const {currency, ids} = action.payload;
      state.currency = currency;
      state.ids = ids;
    },
    setNumberCurrency(state, action: PayloadAction<IPayloadSetNumber>) {  
      const {asset, number} = action.payload;
      const currentCurrency: ICurrency[] = state.currency;
      const currencyOne = currentCurrency.find(currencyOne => currencyOne.id === asset.id);
      
      const historyItem: IHistory = {
        date: Date.now(),
        number,
        priceUsd: Number(asset.priceUsd)
      };
      
      if(currencyOne) {      
        currencyOne.history.push(historyItem);
      } else {
        const newBagCurrency: ICurrency = {
          id: asset.id,
          name: asset.name,
          symbol: asset.symbol,
          priceUsd: Number(asset.priceUsd),
          history: [historyItem]
        };
        currentCurrency.push(newBagCurrency);
        state.currency = currentCurrency;
        state.ids.push(asset.id);
      }
      setItem(LocalStorageKeys.BAG, state);
    },
    sellCurrencyOne(state, action: PayloadAction<string>) {
      const currencyOne = state.currency.find(currencyOne => currencyOne.id === action.payload);
      if(currencyOne) {
        const totalNumber: number = getTotalNumber(currencyOne.history);
        
        const historyItem = {
          date: Date.now(),
          number: totalNumber * (-1),
          priceUsd: currencyOne.priceUsd
        };
        currencyOne.history.push(historyItem);

        setItem(LocalStorageKeys.BAG, state);
      }
    }
  }
});

export default bagSlice;