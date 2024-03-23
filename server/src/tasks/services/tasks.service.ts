import { Injectable } from '@nestjs/common';
import { Task } from '../entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskType, UpdateTaskType } from '../libs/types/types';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  public async create(createTaskDto: CreateTaskType) {
    return 'This action adds a new task';
  }

  public async findAll() {
    return `This action returns all tasks`;
  }

  public async findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  public async update(id: number, updateTaskDto: Partial<UpdateTaskType>) {
    return `This action updates a #${id} task`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
