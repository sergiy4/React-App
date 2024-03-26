import {
  type CreateListDto,
  type List,
  type GetListResponseDto,
  type UpdateListDto,
  type DeleteListRequestDto,
} from '../../libs/types/types';
import { ApiRoutes, HttpMethod } from '../../libs/enums/enums';
import { apiSlice } from '../../libs/packages/api/api';

export const listApi = apiSlice.instance.injectEndpoints({
  endpoints: (builder) => ({
    createList: builder.mutation<List, CreateListDto>({
      query: ({ name }) => ({
        url: ApiRoutes.LIST,
        method: HttpMethod.POST,
        body: {
          name,
        },
      }),
    }),
    updateList: builder.mutation<List, UpdateListDto>({
      query: ({ name, id }) => ({
        url: `${ApiRoutes.LIST}/${id}`,
        method: HttpMethod.PATCH,
        body: {
          name,
        },
      }),
    }),
    deleteList: builder.query<void, DeleteListRequestDto>({
      query: ({ id }) => ({
        url: `${ApiRoutes.LIST}/${id}`,
        method: HttpMethod.DELETE,
      }),
    }),
    getAllLists: builder.query<GetListResponseDto[], void>({
      query: () => ({
        url: ApiRoutes.LIST,
        method: HttpMethod.GET,
      }),
    }),
    getOneList: builder.query<GetListResponseDto[], { id: number }>({
      query: ({ id }) => ({
        url: `${ApiRoutes.LIST}/${id}`,
        method: HttpMethod.GET,
      }),
    }),
  }),
});

export const {
  useCreateListMutation,
  useUpdateListMutation,
  useGetAllListsQuery,
  useGetOneListQuery,
  useDeleteListQuery,
} = listApi;
