import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskListDto } from './create-task_list.dto';

export class UpdateTaskListDto extends PartialType(CreateTaskListDto) {}
