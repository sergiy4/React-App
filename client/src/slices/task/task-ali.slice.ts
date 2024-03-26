import {
  type CreateTaskRequestDto,
  type DeleteTaskRequestDto,
  type GetTaskResponseDto,
  type Task,
  type UpdateTaskRequestDto,
} from '../../libs/types/types';
import { ApiRoutes, HttpMethod } from '../../libs/enums/enums';
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
    }),
    deleteTask: builder.query<void, DeleteTaskRequestDto>({
      query: ({ id }) => ({
        url: `${ApiRoutes.TASK}/${id}`,
        method: HttpMethod.DELETE,
      }),
    }),
    getAllTasks: builder.query<GetTaskResponseDto[], void>({
      query: () => ({
        url: ApiRoutes.TASK,
        method: HttpMethod.GET,
      }),
    }),
    getOneTask: builder.query<GetTaskResponseDto[], { id: number }>({
      query: ({ id }) => ({
        url: `${ApiRoutes.TASK}/${id}`,
        method: HttpMethod.GET,
      }),
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useGetAllTasksQuery,
  useGetOneTaskQuery,
  useDeleteTaskQuery,
} = taskApi;
