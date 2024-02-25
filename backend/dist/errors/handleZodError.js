"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (err, defaultResponse) => {
    defaultResponse.message = 'Validation Error';
    defaultResponse.errorDetails = err;
    defaultResponse.statusCode = 400;
    err.issues.forEach(issue => {
        defaultResponse.errorMessage += `${issue.message}. `;
    });
};
exports.default = handleZodError;
