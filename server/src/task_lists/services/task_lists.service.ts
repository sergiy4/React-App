import { Injectable } from '@nestjs/common';
import { CreateTaskListDto } from '../dto/create-task_list.dto';
import { UpdateTaskListDto } from '../dto/update-task_list.dto';
import { Repository } from 'typeorm';
import { TaskList } from '../entities/task_list.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskListsService {
  constructor(
    @InjectRepository(TaskList)
    private readonly taskListsRepository: Repository<TaskList>,
  ) {}

  public async create(createTaskListDto: CreateTaskListDto) {
    const newList = this.taskListsRepository.create(createTaskListDto);
    await this.taskListsRepository.save(newList);
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
