import {useDispatch} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';
import {TypedDispatch} from '@/store/store';
import Slices from '@/store/index.slice';

const useTypedDispatch = () => useDispatch<TypedDispatch>();

export const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(Slices, dispatch);
};