import { AbstractEntity } from 'src/database/abstract.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';
import { TaskList } from 'src/task_lists/entities/task_list.entity';

@Entity({ name: 'task' })
export class Task extends AbstractEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  priority: string;

  @ManyToOne(() => TaskList, (taskList) => taskList.tasks, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  taskList: TaskList;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
