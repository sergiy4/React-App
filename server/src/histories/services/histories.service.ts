import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from '../dto/create-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from '../entities/history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoriesService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) {}

  public async create(createHistoryDto: CreateHistoryDto) {
    const newHistory = this.historyRepository.create(createHistoryDto);
    await this.historyRepository.save(newHistory);
  }

  public async findAll() {
    return this.historyRepository.find();
  }

  public async findOne(id: number) {
    return this.historyRepository.findOneBy({ id });
  }
}
