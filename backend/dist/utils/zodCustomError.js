"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zodCustomError = (propertyName, type) => {
    return {
        required_error: `${propertyName} is required`,
        invalid_type_error: `${propertyName} must be ${type}`,
    };
};
exports.default = zodCustomError;
