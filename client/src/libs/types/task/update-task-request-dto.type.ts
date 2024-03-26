type UpdateTaskRequestDto = {
  id: number;
  name: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HEIGHT';
  listId: number;
};

export { type UpdateTaskRequestDto };
