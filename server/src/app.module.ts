import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TaskListsModule } from './task_lists/task_lists.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TaskListsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
