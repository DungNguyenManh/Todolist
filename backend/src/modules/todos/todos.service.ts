import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  create(userId: string, dto: { title: string; completed?: boolean; dueDate?: string }) {
    return this.todoModel.create({
      title: dto.title,
      completed: dto.completed ?? false,
      dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
      userId: new Types.ObjectId(userId),
    });
  }

  findAll(userId: string) {
    return this.todoModel.find({ userId }).sort({ createdAt: -1 }).exec();
  }

  async update(userId: string, id: string, dto: { title?: string; completed?: boolean; dueDate?: string }) {
    const todo = await this.todoModel.findOne({ _id: id, userId }).exec();
    if (!todo) throw new NotFoundException('Todo not found');
    if (dto.title !== undefined) todo.title = dto.title;
    if (dto.completed !== undefined) todo.completed = dto.completed;
    if (dto.dueDate !== undefined) todo.dueDate = dto.dueDate ? new Date(dto.dueDate) : undefined;
    await todo.save();
    return todo;
  }

  async remove(userId: string, id: string) {
    const res = await this.todoModel.findOneAndDelete({ _id: id, userId }).exec();
    if (!res) throw new NotFoundException('Todo not found');
    return res;
  }
}