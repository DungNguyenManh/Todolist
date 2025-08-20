import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
    register(body: {
        email: string;
        password: string;
    }): Promise<import("../../common/interfaces/api-response.interface").ApiResponse<import("../../common/interfaces/api-response.interface").UserResponse>>;
    login(body: {
        email: string;
        password: string;
    }): Promise<import("../../common/interfaces/api-response.interface").ApiResponse<import("../../common/interfaces/api-response.interface").UserResponse> & {
        token: string;
    }>;
}
