import { Module } from '@nestjs/common';
import { HistoriesService } from './services/histories.service';
import { HistoriesController } from './controllers/histories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './entities/history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  controllers: [HistoriesController],
  providers: [HistoriesService],
})
export class HistoriesModule {}
