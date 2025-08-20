"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const common_1 = require("@nestjs/common");
exports.Admin = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
        throw new common_1.ForbiddenException('User not authenticated');
    }
    if (user.role !== 'admin') {
        throw new common_1.ForbiddenException('Access denied. Admin role required.');
    }
    return user;
});
//# sourceMappingURL=admin.decorator.js.map