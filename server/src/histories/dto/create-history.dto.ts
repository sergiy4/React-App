import { IsNotEmpty } from 'class-validator';

export class CreateHistoryDto {
  @IsNotEmpty()
  description: string;
}
