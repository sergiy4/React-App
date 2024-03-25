import { AbstractEntity } from 'src/database/abstract.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';
import { TaskList } from 'src/task_lists/entities/task_list.entity';
import { History } from 'src/histories/entities/history.entity';

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

  @OneToMany(() => History, (history) => history.task)
  histories: History[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
