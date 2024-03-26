import {
  type CreateListDto,
  type List,
  type GetListResponseDto,
  type UpdateListDto,
  type DeleteListRequestDto,
} from '../../libs/types/types';
import { ApiRoutes, HttpMethod, TAG } from '../../libs/enums/enums';
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
      invalidatesTags: [TAG.LIST],
    }),
    updateList: builder.mutation<List, UpdateListDto>({
      query: ({ name, id }) => ({
        url: `${ApiRoutes.LIST}/${id}`,
        method: HttpMethod.PATCH,
        body: {
          name,
        },
      }),
      invalidatesTags: [TAG.LIST],
    }),
    deleteList: builder.mutation<void, DeleteListRequestDto>({
      query: ({ id }) => ({
        url: `${ApiRoutes.LIST}/${id}`,
        method: HttpMethod.DELETE,
      }),
      invalidatesTags: [TAG.LIST],
    }),
    getAllLists: builder.query<GetListResponseDto[], void>({
      query: () => ({
        url: ApiRoutes.LIST,
        method: HttpMethod.GET,
      }),
      providesTags: (result) => {
        if (result) {
          return [
            { type: TAG.LIST, id: TAG.LIST },
            ...result.map((list) => ({
              type: TAG.LIST,
              id: list.id,
            })),
          ];
        } else return [{ type: TAG.LIST, id: TAG.LIST }];
      },
    }),
    getOneList: builder.query<GetListResponseDto, { id: number }>({
      query: ({ id }) => ({
        url: `${ApiRoutes.LIST}/${id}`,
        method: HttpMethod.GET,
      }),
      providesTags: (result) => {
        if (result) {
          return [{ type: TAG.LIST, id: result.id }];
        }
        return [{ type: TAG.LIST, id: TAG.LIST }];
      },
    }),
  }),
});

export const {
  useCreateListMutation,
  useUpdateListMutation,
  useGetAllListsQuery,
  useGetOneListQuery,
  useDeleteListMutation,
} = listApi;
