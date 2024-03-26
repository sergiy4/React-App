import { History } from '../types';
import { Task } from './task.type';

type GetTaskResponseDto = Task & {
  histories: History[];
};

export { type GetTaskResponseDto };
