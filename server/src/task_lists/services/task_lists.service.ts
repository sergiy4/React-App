import { Injectable } from '@nestjs/common';
import { CreateTaskListDto } from '../dto/create-task_list.dto';
import { UpdateTaskListDto } from '../dto/update-task_list.dto';

@Injectable()
export class TaskListsService {
  create(createTaskListDto: CreateTaskListDto) {
    return 'This action adds a new taskList';
  }

  findAll() {
    return `This action returns all taskLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskList`;
  }

  update(id: number, updateTaskListDto: UpdateTaskListDto) {
    return `This action updates a #${id} taskList`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskList`;
  }
}
