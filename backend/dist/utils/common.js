"use strict";
// SuccessResponse
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = void 0;
// successResponse
const SuccessResponse = (res, message, code = 200, data) => {
    res.status(code).json({
        code: code,
        success: true,
        message: message,
        data: data,
    });
};
exports.SuccessResponse = SuccessResponse;
