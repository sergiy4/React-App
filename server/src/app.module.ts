import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TaskListsModule } from './task_lists/task_lists.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TaskListsModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
