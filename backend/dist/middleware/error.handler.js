"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.globalErrorHandler = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
const AppError_1 = __importDefault(require("../errors/AppError"));
const ExpressLevelErrors_1 = __importDefault(require("../errors/ExpressLevelErrors"));
const MongooseErrors_1 = __importDefault(require("../errors/MongooseErrors"));
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
// not found handler
const notFound = (req, res, next) => {
    const err = new AppError_1.default(404, 'Route not found');
    return next(err);
};
exports.notFound = notFound;
// global error handler
const globalErrorHandler = (err, req, res, next) => {
    const errResponse = {
        message: 'Unknown Error',
        statusCode: 500,
        errorMessage: '',
        errorDetails: null,
        stack: (err === null || err === void 0 ? void 0 : err.stack) ? err.stack : null,
    };
    if (err instanceof zod_1.ZodError) {
        (0, handleZodError_1.default)(err, errResponse);
    }
    else if (err.code === 11000) {
        MongooseErrors_1.default.handleDuplicateKeyError(err, errResponse);
    }
    else if (err instanceof mongoose_1.default.Error.CastError) {
        MongooseErrors_1.default.handleCastError(err, errResponse);
    }
    else if (err instanceof AppError_1.default) {
        ExpressLevelErrors_1.default.handleAppError(err, errResponse);
    }
    else if (err instanceof Error) {
        ExpressLevelErrors_1.default.handleDefaultError(err, errResponse);
    }
    res.status(errResponse.statusCode).json(errResponse);
};
exports.globalErrorHandler = globalErrorHandler;
