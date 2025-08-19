import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        role: "user" | "admin";
    }>;
    findAll(req: any): Promise<{
        id: string;
        email: string;
        role: "user" | "admin";
    }[]>;
    findOne(req: any, id: string): Promise<{
        id: string;
        email: string;
        role: "user" | "admin";
    }>;
    update(req: any, id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        email: string;
        role: "user" | "admin";
    }>;
    remove(req: any, id: string): Promise<{
        id: string;
        email: string;
        role: "user" | "admin";
    }>;
}
