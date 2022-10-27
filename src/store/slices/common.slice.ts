import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LocalStorageKeys} from 'constants/localStorage';
import {SliceNames} from 'constants/slices';
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
  name: SliceNames.COMMON,
  initialState,
  reducers: {
    setMainPagItem(state, action: PayloadAction<number>) {
      state.mainPagItem = action.payload;
      setItem(LocalStorageKeys.MAIN_PAG_ITEM, state.mainPagItem);
    },
    setIsActiveBuyingModal(state) {
      state.isActiveBuyingModal = !state.isActiveBuyingModal;
    },
    setAssets(state, action: PayloadAction<IAsset[]>) {
      state.assets = action.payload;
    }
  }
});

export default commonSlice;