import { HydratedDocument, Types } from 'mongoose';
export type TodoDocument = HydratedDocument<Todo>;
export declare class Todo {
    title: string;
    completed: boolean;
    dueDate?: Date;
    userId: Types.ObjectId;
}
export declare const TodoSchema: import("mongoose").Schema<Todo, import("mongoose").Model<Todo, any, any, any, import("mongoose").Document<unknown, any, Todo, any, {}> & Todo & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Todo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Todo>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Todo> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
