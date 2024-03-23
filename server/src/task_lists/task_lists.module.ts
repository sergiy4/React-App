import { Module } from '@nestjs/common';
import { TaskListsController } from './controllers/task_lists.controller';
import { TaskListsService } from './services/task_lists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskList } from './entities/task_list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskList])],
  controllers: [TaskListsController],
  providers: [TaskListsService],
  exports: [TaskListsService],
})
export class TaskListsModule {}
