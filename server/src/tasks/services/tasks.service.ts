import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from '../entities/task.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskType, UpdateTaskType } from '../libs/types/types';
import { TaskListsService } from 'src/task_lists/services/task_lists.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly tasksListService: TaskListsService,
    private readonly entityManager: EntityManager,
  ) {}

  public async create(createTaskDto: CreateTaskType) {
    let newTask: Task;
    if (createTaskDto.taskListId) {
      const list = await this.tasksListService.findOne(
        createTaskDto.taskListId,
      );
      if (!list)
        throw new HttpException('List not found', HttpStatus.BAD_REQUEST);

      newTask = this.taskRepository.create({
        ...createTaskDto,
        taskList: list,
      });
    } else {
      newTask = this.taskRepository.create(createTaskDto);
    }

    await this.entityManager.save(newTask);
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
