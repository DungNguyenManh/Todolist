import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { ApiResponse, UserResponse } from '../../common/interfaces/api-response.interface';
export declare class AuthService {
    private users;
    private jwt;
    constructor(users: UsersService, jwt: JwtService);
    register(email: string, password: string): Promise<ApiResponse<UserResponse>>;
    login(email: string, password: string): Promise<ApiResponse<UserResponse> & {
        token: string;
    }>;
    signAccessToken(userId: string, email: string, role: 'user' | 'admin'): string;
}
