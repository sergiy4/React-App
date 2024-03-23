import { Test, TestingModule } from '@nestjs/testing';
import { TaskListsController } from './task_lists.controller';
import { TaskListsService } from '../services/task_lists.service';

describe('TaskListsController', () => {
  let controller: TaskListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskListsController],
      providers: [TaskListsService],
    }).compile();

    controller = module.get<TaskListsController>(TaskListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
