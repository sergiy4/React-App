type CreateTaskRequestDto = {
  name: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HEIGHT';
  listId: number;
};

export { type CreateTaskRequestDto };
