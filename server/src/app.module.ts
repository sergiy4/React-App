import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TaskListsModule } from './task_lists/task_lists.module';
import { TasksModule } from './tasks/tasks.module';
import { HistoriesModule } from './histories/histories.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TaskListsModule,
    TasksModule,
    HistoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
