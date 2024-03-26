import { ApiRoutes, HttpMethod } from '../../libs/enums/enums';
import { apiSlice } from '../../libs/packages/api/api';
import { type History } from '../../libs/types/types';

export const historyApi = apiSlice.instance.injectEndpoints({
  endpoints: (builder) => ({
    getAllHistory: builder.query<History[], void>({
      query: () => ({
        url: ApiRoutes.HISTORY,
        method: HttpMethod.GET,
      }),
    }),
  }),
});

export const { useGetAllHistoryQuery } = historyApi;
