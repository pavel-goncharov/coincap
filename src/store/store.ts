import {combineReducers, configureStore} from '@reduxjs/toolkit';
import appApi from 'api/api';
import commonSlice from 'store/slices/common.slice';
import bagSlice from 'store/slices/bag.slice';

const sliceReducers = {
  common: commonSlice.reducer,
  bag: bagSlice.reducer
}

const rootReducer = combineReducers({
  ...sliceReducers,
  [appApi.reducerPath]: appApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(appApi.middleware)
}); 

export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;