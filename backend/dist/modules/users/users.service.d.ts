import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(dto: CreateUserDto): Promise<{
        id: string;
        email: string;
        role: "user" | "admin";
    }>;
    findAll(): Promise<{
        id: string;
        email: string;
        role: "user" | "admin";
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string;
        role: "user" | "admin";
    }>;
    update(id: string, dto: UpdateUserDto): Promise<{
        id: string;
        email: string;
        role: "user" | "admin";
    }>;
    remove(id: string): Promise<{
        id: string;
        email: string;
        role: "user" | "admin";
    }>;
    findByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User, {}, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, User, {}, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null>;
    setRole(userId: string, role: 'user' | 'admin'): Promise<{
        id: string;
        email: string;
        role: "user" | "admin";
    } | null>;
}
