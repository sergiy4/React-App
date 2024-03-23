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
    const newTask = this.taskRepository.create(createTaskDto);
    await this.taskRepository.save(newTask);
  }

  public async findAll() {
    return this.taskRepository.find();
  }

  public async findOne(id: number) {
    return this.taskRepository.findOne({
      where: { id },
    });
  }

  public async update(id: number, updateTaskDto: Partial<UpdateTaskType>) {
    await this.taskRepository.update(id, updateTaskDto);
  }

  public async remove(id: number) {
    await this.taskRepository.delete(id);
  }
}
