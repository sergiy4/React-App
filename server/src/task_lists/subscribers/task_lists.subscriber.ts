import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { TaskList } from '../entities/task_list.entity';
import { History } from 'src/histories/entities/history.entity';

@EventSubscriber()
export class TaskListsSubscriber
  implements EntitySubscriberInterface<TaskList>
{
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo(): string | Function {
    return TaskList;
  }

  async afterRemove(event: RemoveEvent<TaskList>): Promise<any> {
    const newHistory = event.manager.create(History, {
      description: `List was deleted`,
    });

    await event.manager.save(History, { ...newHistory });
  }

  async afterInsert(event: InsertEvent<TaskList>): Promise<any> {
    const list = event.entity;

    const newHistory = event.manager.create(History, {
      description: `New ${list.name} list was created`,
    });

    await event.manager.save(History, { ...newHistory });
  }

  async afterUpdate(event: UpdateEvent<TaskList>): Promise<any> {
    const updatedColumns = event.updatedColumns;
    const prevValues = event.databaseEntity;
    const updatedTask = event.entity;

    const prevName = prevValues[updatedColumns[0].propertyName];
    const updatedName = updatedTask[updatedColumns[0].propertyName];

    const newHistory = event.manager.create(History, {
      description: `List name was updated from "${prevName}" to "${updatedName}" updated `,
    });

    return event.manager.save(History, newHistory);
  }
}
