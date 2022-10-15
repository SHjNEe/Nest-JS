"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeInterceptor = void 0;
const operators_1 = require("rxjs/operators");
const class_transformer_1 = require("class-transformer");
const user_dto_1 = require("../users/dtos/user.dto");
class SerializeInterceptor {
    intercept(context, handler) {
        console.log('Running before controller');
        return handler.handle().pipe(operators_1.map((data) => {
            console.log(data);
            return class_transformer_1.plainToClass(user_dto_1.UserDto, {}, {
                excludeExtraneousValues: true,
            });
        }));
    }
}
exports.SerializeInterceptor = SerializeInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map