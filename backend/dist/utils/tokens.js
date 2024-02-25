"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateNowInMillisecond = exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const config_1 = require("../config");
const dateNowInMillisecond = Math.floor(Date.now() / 1000);
exports.dateNowInMillisecond = dateNowInMillisecond;
const generateToken = (jwtPayload, secret) => {
    return jsonwebtoken_1.default.sign(jwtPayload, secret);
};
exports.generateToken = generateToken;
const verifyToken = (token, secret) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        return decoded;
    }
    catch (err) {
        throw new AppError_1.default(config_1.STATUS.UNAUTHORIZED, 'Unauthorized access');
    }
};
exports.verifyToken = verifyToken;
