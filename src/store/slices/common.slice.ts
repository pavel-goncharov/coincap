import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LocalStorageKeys} from 'constants/localStorage';
import {SliceNames} from 'constants/slices';
import {setItem} from 'utils/localStorage';

interface ICommonState {
  mainPagItem: number;
  isActiveBuyingModal: boolean;
} 

const initialState: ICommonState = {
  mainPagItem: 1,
  isActiveBuyingModal: false
};

const commonSlice = createSlice({
  name: SliceNames.COMMON,
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