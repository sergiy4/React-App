/* eslint-disable unicorn/prefer-spread */
import { configureStore } from '@reduxjs/toolkit';
import { StoreInstance } from './libs/types/types';
import { ConfigPackage } from '../config/consfig';
import { AppEnvironment } from '../../enums/enums';
import { apiSlice } from '../api/api';

class Store {
  #instance: StoreInstance;

  public get instance(): StoreInstance {
    return this.#instance;
  }

  public constructor(config: ConfigPackage) {
    this.#instance = configureStore({
      devTools: config.ENV.APP.ENVIRONMENT !== AppEnvironment.PRODUCTION,
      reducer: {
        [apiSlice.instance.reducerPath]: apiSlice.instance.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.instance.middleware),
    });
  }
}

export { Store };
