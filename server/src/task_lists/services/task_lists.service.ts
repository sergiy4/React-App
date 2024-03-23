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

  public async findAll() {
    return this.taskListsRepository.find({
      relations: {
        tasks: true,
      },
    });
  }

  public async findOne(id: number) {
    return this.taskListsRepository.findOne({
      where: { id },
    });
  }

  public async update(id: number, updateTaskListDto: UpdateTaskListDto) {
    await this.taskListsRepository.update(id, updateTaskListDto);
  }

  public async remove(id: number) {
    await this.taskListsRepository.delete(id);
  }
}
