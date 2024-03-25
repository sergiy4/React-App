import { Module } from '@nestjs/common';
import { TasksService } from './services/tasks.service';
import { TasksController } from './controllers/tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskListsModule } from 'src/task_lists/task_lists.module';
import { TaskSubscriber } from './subscriber/task.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), TaskListsModule],
  controllers: [TasksController],
  providers: [TasksService, TaskSubscriber],
})
export class TasksModule {}
