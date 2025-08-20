import { Model, Types } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
export declare class TodosService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    create(userId: string, dto: {
        title: string;
        completed?: boolean;
        dueDate?: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Todo, {}, {}> & Todo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Todo, {}, {}> & Todo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    findAll(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Todo, {}, {}> & Todo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Todo, {}, {}> & Todo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>)[]>;
    update(userId: string, id: string, dto: {
        title?: string;
        completed?: boolean;
        dueDate?: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Todo, {}, {}> & Todo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Todo, {}, {}> & Todo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    remove(userId: string, id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Todo, {}, {}> & Todo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Todo, {}, {}> & Todo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
}
