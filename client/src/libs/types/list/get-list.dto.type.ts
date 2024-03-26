import { Task } from '../types';
import { List } from './list.type';

type GetListResponseDto = List & {
  tasks: Task[];
};

export { type GetListResponseDto };
