import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LocalStorageKeys} from 'utils/localStorage';
import {IAsset} from 'types/api';
import {setItem} from 'utils/localStorage';

interface ICommonState {
  mainPagItem: number;
  isActiveBuyingModal: boolean;
  assets: IAsset[];
} 

const initialState: ICommonState = {
  mainPagItem: 1,
  isActiveBuyingModal: false,
  assets: []
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setMainPagItem(state, action: PayloadAction<number>) {
      state.mainPagItem = action.payload;
      setItem(LocalStorageKeys.MAIN_PAG_ITEM, state.mainPagItem);
    },
    setIsActiveBuyingModal(state) {
      state.isActiveBuyingModal = !state.isActiveBuyingModal;
    }
  }
});

export default commonSlice;