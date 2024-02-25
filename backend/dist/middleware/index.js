"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = exports.globalErrorHandler = exports.notFound = void 0;
const error_handler_1 = require("./error.handler");
Object.defineProperty(exports, "notFound", { enumerable: true, get: function () { return error_handler_1.notFound; } });
Object.defineProperty(exports, "globalErrorHandler", { enumerable: true, get: function () { return error_handler_1.globalErrorHandler; } });
const validator_1 = __importDefault(require("./validator"));
exports.validator = validator_1.default;
