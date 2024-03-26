import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { type ConfigPackage } from '../config/consfig';
import { TAG } from '../../enums/enums';

class ApiSlice {
  #instance;

  public get instance() {
    return this.#instance;
  }

  public constructor(config: ConfigPackage) {
    this.#instance = createApi({
      baseQuery: fetchBaseQuery({
        baseUrl: `${config.ENV.API.SERVER}${config.ENV.API.PATH}`,
      }),
      tagTypes: [TAG.LIST, TAG.HISTORY, TAG.TASK],
      endpoints: (builder) => ({}),
    });
  }
}

export { ApiSlice };
