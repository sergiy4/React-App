import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TaskListsService } from '../services/task_lists.service';
import { CreateTaskListDto } from '../dto/create-task_list.dto';
import { UpdateTaskListDto } from '../dto/update-task_list.dto';

@Controller('task-lists')
export class TaskListsController {
  constructor(private readonly taskListsService: TaskListsService) {}

  @Post()
  create(@Body() createTaskListDto: CreateTaskListDto) {
    return this.taskListsService.create(createTaskListDto);
  }

  @Get()
  findAll() {
    return this.taskListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.taskListsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskListDto: UpdateTaskListDto,
  ) {
    return this.taskListsService.update(id, updateTaskListDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.taskListsService.remove(id);
  }
}
