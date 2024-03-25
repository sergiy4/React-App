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
    const list = await this.tasksListService.findOne(createTaskDto.listId);
    if (!list)
      throw new HttpException('List not found', HttpStatus.BAD_REQUEST);

    const newTask = this.taskRepository.create({
      ...createTaskDto,
      taskList: list,
    });

    await this.entityManager.save(newTask);
  }

  public async findAll() {
    return this.taskRepository.find();
  }

  public async findOne(id: number) {
    return this.taskRepository.findOne({
      where: { id },
      relations: {
        histories: true,
      },
    });
  }

  public async update(id: number, updateTaskDto: UpdateTaskType) {
    const task = await this.taskRepository.findOneBy({ id });

    if (!task)
      throw new HttpException('Task not found', HttpStatus.BAD_REQUEST);
    task.name = updateTaskDto?.name;
    task.description = updateTaskDto?.description;
    task.priority = updateTaskDto?.priority;

    if (updateTaskDto.listId) {
      const list = await this.tasksListService.findOne(updateTaskDto.listId);

      if (!list)
        throw new HttpException('List not found', HttpStatus.BAD_REQUEST);
      task.taskList = list;
    }

    await this.taskRepository.save(task);
  }

  public async remove(id: number) {
    await this.taskRepository.delete(id);
  }
}
