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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
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
    },
    imageUrl: {
        type: String,
    },
});
userSchema.statics.isUserExists = function (email, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield exports.User.findOne({ email, provider }).select('+password');
    });
};
exports.User = (0, mongoose_1.model)('User', userSchema);
