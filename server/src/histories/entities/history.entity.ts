import { AbstractEntity } from 'src/database/abstract.entity';
import { Task } from 'src/tasks/entities/task.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'history' })
export class History extends AbstractEntity {
  @Column()
  description: string;

  @ManyToOne(() => Task, (task) => task.histories, {
    cascade: true,
    nullable: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  task: Task;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
