"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchemaValidator = exports.registerSchemaValidator = exports.googleSchemaValidator = void 0;
const zod_1 = require("zod");
const zodCustomError_1 = __importDefault(require("../../../utils/zodCustomError"));
const passwordValidator = (field) => {
    return zod_1.z
        .string({
        required_error: `password is required`,
    })
        .superRefine((val, ctx) => {
        if (val.length < 6) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.too_small,
                minimum: 6,
                type: 'string',
                inclusive: true,
                message: `${field} must be 😡 at least 6 characters`,
            });
        }
        else if (!/[a-z]/.test(val)) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: `${field} must contain at least one lowercase letter.`,
            });
        }
        else if (!/[A-Z]/.test(val)) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: `${field} must contain at least one uppercase letter.`,
            });
        }
        else if (!/\d/.test(val)) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: `${field} must contain at least one digit.`,
            });
        }
        else if (!/[@$!%*?&]/.test(val)) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: `${field} must contain at least one special character (@$!%*?&).`,
            });
        }
    });
};
exports.googleSchemaValidator = zod_1.z.object({
    password: passwordValidator('password').optional(),
    email: zod_1.z
        .string({
        required_error: 'email is required',
    })
        .email({ message: 'email must be a valid email' }),
    provider: zod_1.z.enum(['google', 'local'], (0, zodCustomError_1.default)('provider', 'google or local')),
    imageUrl: zod_1.z.string().optional(),
    emailVerified: zod_1.z.boolean().optional(),
    needPasswordChange: zod_1.z.boolean().optional(),
});
exports.registerSchemaValidator = zod_1.z.object({
    password: passwordValidator('password'),
    email: zod_1.z
        .string({
        required_error: 'email is required',
    })
        .email({ message: 'email must be a valid email' }),
    provider: zod_1.z.enum(['google', 'local'], (0, zodCustomError_1.default)('provider', 'google or local')),
});
exports.loginSchemaValidator = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: 'email is required',
    })
        .email({ message: 'email must be a valid email' }),
    password: zod_1.z.string()
});
