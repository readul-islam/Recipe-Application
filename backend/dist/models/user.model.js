"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const config_1 = require("../config");
const AppError_1 = __importDefault(require("../errors/AppError"));
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    provider: {
        type: String,
        enum: {
            values: ['google', 'local'],
            message: '{VALUE} is not supported',
        },
        required: [true, 'provider is required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    needPasswordChange: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        select: 0,
    },
    imageUrl: {
        type: String,
    },
}, { timestamps: true, versionKey: false });
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(this);
        if (this.password) {
            const hashed = bcrypt_1.default.hash(this.password, Number(config_1.config.BCRYPT_SALT));
            this.password = yield hashed;
        }
        const isExist = yield exports.User.findOne({
            $or: [{ email: this.email }],
        });
        if ((isExist === null || isExist === void 0 ? void 0 : isExist.email) === this.email) {
            throw new AppError_1.default(config_1.STATUS.NOT_ACCEPTABLE, 'Email already exists');
        }
        next();
    });
});
// isUserExist static method
userSchema.statics.isUserExists = function (email, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield exports.User.findOne({ email, provider }).select('+password');
    });
};
// isPassword match static method
userSchema.statics.isPasswordMatched = function (inputPassword, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.compare(inputPassword, hashedPassword);
    });
};
exports.User = (0, mongoose_1.model)('User', userSchema);
