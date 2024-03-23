import { IsNotEmpty } from 'class-validator';

export class CreateTaskListDto {
  @IsNotEmpty()
  name: string;
}
