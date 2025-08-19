"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const admin_decorator_1 = require("../../common/decorators/admin.decorator");
const users_service_1 = require("../users/users.service");
const todos_service_1 = require("../todos/todos.service");
let AdminController = class AdminController {
    users;
    todos;
    constructor(users, todos) {
        this.users = users;
        this.todos = todos;
    }
    async listUsers(adminUser) {
        return this.users.findAll();
    }
    async listTodosByUser(adminUser, userId) {
        return this.todos.findAll(userId);
    }
    async makeUserAdmin(adminUser, userId) {
        const updatedUser = await this.users.setRole(userId, 'admin');
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return {
            success: true,
            message: `User ${updatedUser.email} is now admin`,
            data: updatedUser
        };
    }
    async makeUserRegular(adminUser, userId) {
        const updatedUser = await this.users.setRole(userId, 'user');
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return {
            success: true,
            message: `User ${updatedUser.email} is now regular user`,
            data: updatedUser
        };
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('users'),
    __param(0, (0, admin_decorator_1.Admin)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "listUsers", null);
__decorate([
    (0, common_1.Get)('users/:userId/todos'),
    __param(0, (0, admin_decorator_1.Admin)()),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "listTodosByUser", null);
__decorate([
    (0, common_1.Post)('users/:userId/make-admin'),
    __param(0, (0, admin_decorator_1.Admin)()),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "makeUserAdmin", null);
__decorate([
    (0, common_1.Post)('users/:userId/make-user'),
    __param(0, (0, admin_decorator_1.Admin)()),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "makeUserRegular", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [users_service_1.UsersService, todos_service_1.TodosService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map