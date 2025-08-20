import { TodosService } from './todos.service';
export declare class TodosController {
    private readonly todos;
    constructor(todos: TodosService);
    create(req: any, body: {
        title: string;
        completed?: boolean;
        dueDate?: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/todo.schema").Todo, {}, {}> & import("./schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/todo.schema").Todo, {}, {}> & import("./schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findMine(req: any): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/todo.schema").Todo, {}, {}> & import("./schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/todo.schema").Todo, {}, {}> & import("./schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    update(req: any, id: string, body: {
        title?: string;
        completed?: boolean;
        dueDate?: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/todo.schema").Todo, {}, {}> & import("./schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/todo.schema").Todo, {}, {}> & import("./schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    remove(req: any, id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/todo.schema").Todo, {}, {}> & import("./schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/todo.schema").Todo, {}, {}> & import("./schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
