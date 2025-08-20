import { UsersService } from '../users/users.service';
import { TodosService } from '../todos/todos.service';
export declare class AdminController {
    private readonly users;
    private readonly todos;
    constructor(users: UsersService, todos: TodosService);
    listUsers(adminUser: any): Promise<{
        id: string;
        email: string;
        role: "user" | "admin";
    }[]>;
    listTodosByUser(adminUser: any, userId: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../todos/schemas/todo.schema").Todo, {}, {}> & import("../todos/schemas/todo.schema").Todo & {
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
    makeUserAdmin(adminUser: any, userId: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            email: string;
            role: "user" | "admin";
        };
    }>;
    makeUserRegular(adminUser: any, userId: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            email: string;
            role: "user" | "admin";
        };
    }>;
}
