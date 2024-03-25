import { Module } from '@nestjs/common';
import { TaskListsController } from './controllers/task_lists.controller';
import { TaskListsService } from './services/task_lists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskList } from './entities/task_list.entity';
import { TaskListsSubscriber } from './subscribers/task_lists.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([TaskList])],
  controllers: [TaskListsController],
  providers: [TaskListsService, TaskListsSubscriber],
  exports: [TaskListsService],
})
export class TaskListsModule {}
