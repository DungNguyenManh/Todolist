import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TodosService } from './todos.service';

@UseGuards(AuthGuard('jwt'))
@Controller('todos')
export class TodosController {
  constructor(private readonly todos: TodosService) { }

  @Post()
  create(@Req() req: any, @Body() body: { title: string; completed?: boolean; dueDate?: string }) {
    return this.todos.create(req.user.userId, body);
  }

  @Get()
  findMine(@Req() req: any) {
    return this.todos.findAll(req.user.userId);
  }

  @Patch(':id')
  update(@Req() req: any, @Param('id') id: string, @Body() body: { title?: string; completed?: boolean; dueDate?: string }) {
    return this.todos.update(req.user.userId, id, body);
  }

  @Delete(':id')
  remove(@Req() req: any, @Param('id') id: string) {
    return this.todos.remove(req.user.userId, id);
  }
}