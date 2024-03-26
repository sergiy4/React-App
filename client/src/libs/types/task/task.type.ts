type Task = {
  id: number;
  name: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HEIGHT';
  taskListId: number;
  createdAt: string;
  updatedAt: string;
};

export { type Task };
