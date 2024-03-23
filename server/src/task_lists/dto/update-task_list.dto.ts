import { IsNotEmpty } from 'class-validator';

export class UpdateTaskListDto {
  @IsNotEmpty()
  name: string;
}
