import { IsEnum, IsNotEmpty } from 'class-validator';
import { TaskPriority } from '../libs/enums/enums';

export class CreateTaskDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  listId: number;

  @IsNotEmpty()
  @IsEnum(TaskPriority)
  priority: string;
}
