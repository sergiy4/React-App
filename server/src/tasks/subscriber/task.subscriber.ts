import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { Task } from '../entities/task.entity';
import { History } from 'src/histories/entities/history.entity';

@EventSubscriber()
export class TaskSubscriber implements EntitySubscriberInterface<Task> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo(): string | Function {
    return Task;
  }

  async afterRemove(event: RemoveEvent<Task>): Promise<any> {
    const newHistory = event.manager.create(History, {
      description: `Task was deleted`,
    });

    await event.manager.save(History, { ...newHistory });
  }

  async afterInsert(event: InsertEvent<Task>): Promise<any> {
    const task = event.entity;

    const newHistory = event.manager.create(History, {
      description: 'Task was created',
    });

    await event.manager.save(History, { ...newHistory, task });
  }

  async afterUpdate(event: UpdateEvent<Task>): Promise<any> {
    const updatedColumns = event.updatedColumns;
    const prevValues = event.databaseEntity;
    const updatedTask = event.entity;

    if (!updatedColumns.length) {
      const newHistory = event.manager.create(History, {
        description: 'Task list was changed',
      });

      await event.manager.save(History, { ...newHistory, task: updatedTask });
    } else {
      await Promise.all(
        updatedColumns.map((column) => {
          const propertyName = column.propertyName;
          let description = `Task ${propertyName} was updated from "${prevValues[propertyName]}" to "${updatedTask[propertyName]}"`;

          if (propertyName === 'description') {
            description = `Task ${propertyName} was updated`;
          }
          const newHistory = event.manager.create(History, {
            description,
          });

          return event.manager.save(History, {
            ...newHistory,
            task: updatedTask,
          });
        }),
      );
    }
  }
}
