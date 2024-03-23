import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class Task extends AbstractEntity<Task> {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  priority: string;

  @Column()
  dueDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
