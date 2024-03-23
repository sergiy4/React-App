import { AbstractEntity } from 'src/database/abstract.entity';
import { Task } from 'src/tasks/entities/task.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'task_list' })
export class TaskList extends AbstractEntity {
  @Column()
  name: string;

  @OneToMany(() => Task, (task) => task.taskList)
  tasks: Task[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
