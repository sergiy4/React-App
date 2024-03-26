import {
  type CreateTaskRequestDto,
  type DeleteTaskRequestDto,
  type GetTaskResponseDto,
  type Task,
  type UpdateTaskRequestDto,
} from '../../libs/types/types';
import { ApiRoutes, HttpMethod, TAG } from '../../libs/enums/enums';
import { apiSlice } from '../../libs/packages/api/api';

export const taskApi = apiSlice.instance.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation<Task, CreateTaskRequestDto>({
      query: ({ description, listId, name, priority }) => ({
        url: ApiRoutes.TASK,
        method: HttpMethod.POST,
        body: {
          name,
          description,
          listId,
          priority,
        },
      }),
      invalidatesTags: [TAG.TASK],
    }),
    updateTask: builder.mutation<Task, UpdateTaskRequestDto>({
      query: ({ description, listId, name, priority, id }) => ({
        url: `${ApiRoutes.TASK}/${id}`,
        method: HttpMethod.PATCH,
        body: {
          name,
          description,
          listId,
          priority,
        },
      }),
      invalidatesTags: [TAG.TASK],
    }),
    deleteTask: builder.mutation<void, DeleteTaskRequestDto>({
      query: ({ id }) => ({
        url: `${ApiRoutes.TASK}/${id}`,
        method: HttpMethod.DELETE,
      }),
      invalidatesTags: [TAG.TASK],
    }),
    getAllTasks: builder.query<GetTaskResponseDto[], void>({
      query: () => ({
        url: ApiRoutes.TASK,
        method: HttpMethod.GET,
      }),
      providesTags: (result) => {
        if (result) {
          return [
            { type: TAG.TASK, id: TAG.TASK },
            ...result.map((list) => ({
              type: TAG.TASK,
              id: list.id,
            })),
          ];
        } else return [{ type: TAG.TASK, id: TAG.LIST }];
      },
    }),
    getOneTask: builder.query<GetTaskResponseDto, { id: number }>({
      query: ({ id }) => ({
        url: `${ApiRoutes.TASK}/${id}`,
        method: HttpMethod.GET,
      }),
      providesTags: (result) => {
        if (result) {
          return [{ type: TAG.TASK, id: result.id }];
        }
        return [{ type: TAG.TASK, id: TAG.LIST }];
      },
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useGetAllTasksQuery,
  useGetOneTaskQuery,
  useDeleteTaskMutation,
} = taskApi;
