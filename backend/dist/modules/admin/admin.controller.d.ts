import { UsersService } from '../users/users.service';
import { TodosService } from '../todos/todos.service';
export declare class AdminController {
    private readonly users;
    private readonly todos;
    constructor(users: UsersService, todos: TodosService);
    listUsers(): Promise<(import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, import("../users/schemas/user.schema").User, {}, {}> & import("../users/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    listTodosByUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../todos/schemas/todo.schema").Todo, {}, {}> & import("../todos/schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("../todos/schemas/todo.schema").Todo, {}, {}> & import("../todos/schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
}
