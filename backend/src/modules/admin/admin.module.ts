// src/modules/admin/admin.module.ts
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { UsersModule } from '../users/users.module';
import { TodosModule } from '../todos/todos.module';

@Module({
    imports: [UsersModule, TodosModule], // <- đảm bảo có TodosModule
    controllers: [AdminController],
})
export class AdminModule { }