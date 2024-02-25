"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS = exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const http_status_1 = __importDefault(require("http-status"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
const config = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    BCRYPT_SALT: process.env.BCRYPT_SALT || 10,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
};
exports.config = config;
const STATUS = http_status_1.default;
exports.STATUS = STATUS;
