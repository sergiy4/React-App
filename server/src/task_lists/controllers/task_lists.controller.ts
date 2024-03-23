import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskListsService } from '../services/task_lists.service';
import { CreateTaskListDto } from '../dto/create-task_list.dto';
import { UpdateTaskListDto } from '../dto/update-task_list.dto';

@Controller('task-lists')
export class TaskListsController {
  constructor(private readonly taskListsService: TaskListsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  public async create(@Body() createTaskListDto: CreateTaskListDto) {
    return this.taskListsService.create(createTaskListDto);
  }

  @Get()
  public async findAll() {
    return this.taskListsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.taskListsService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskListDto: UpdateTaskListDto,
  ) {
    return this.taskListsService.update(id, updateTaskListDto);
  }

  @Delete(':id')
  public async remove(@Param('id', ParseIntPipe) id: number) {
    return this.taskListsService.remove(id);
  }
}
