import {
  type UnknownAction,
  configureStore,
  ThunkMiddleware,
  Tuple,
} from '@reduxjs/toolkit';
import { apiSlice } from '../../../api/api';

type RootReducer = {
  [apiSlice.instance.reducerPath]: ReturnType<typeof apiSlice.instance.reducer>;
};

type StoreInstance = ReturnType<
  typeof configureStore<
    RootReducer,
    UnknownAction,
    Tuple<[ThunkMiddleware<RootReducer, UnknownAction>]>
  >
>;

export { type StoreInstance };
