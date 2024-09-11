"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinBody = exports.signupBody = exports.urlBody = void 0;
const zod_1 = __importDefault(require("zod"));
exports.urlBody = zod_1.default.object({
    orignalUrl: zod_1.default.string().url(),
    userId: zod_1.default.string()
});
exports.signupBody = zod_1.default.object({
    email: zod_1.default.string().email(),
    userName: zod_1.default.string(),
    password: zod_1.default.string().min(6)
});
exports.signinBody = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
