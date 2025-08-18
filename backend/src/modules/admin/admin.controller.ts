// Tạo module/controller cho admin xem users và todos của từng user.
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../common/decorators/roles.decorator';
import { UsersService } from '../users/users.service';
import { TodosService } from '../todos/todos.service';

@UseGuards(AuthGuard('jwt'))
@Roles('admin')
@Controller('admin')
export class AdminController {
    constructor(private readonly users: UsersService, private readonly todos: TodosService) { }

    @Get('users')
    listUsers() {
        return this.users.findAll();
    }

    @Get('users/:userId/todos')
    listTodosByUser(@Param('userId') userId: string) {
        return this.todos.findAll(userId); // dùng findAll(userId) trả todos của user
    }
}