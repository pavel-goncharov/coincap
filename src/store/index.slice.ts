import bagSlice from 'store/slices/bag.slice';
import commonSlice from 'store/slices/common.slice';

const Slices = {
  ...bagSlice.actions,
  ...commonSlice.actions
}

export default Slices;