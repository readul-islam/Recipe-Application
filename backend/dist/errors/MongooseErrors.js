"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// handle all mongoose errors
class MongooseErrors {
    // handle cast error
    handleCastError(err, defaultResponse) {
        defaultResponse.message = 'Invalid ID';
        defaultResponse.errorMessage = `${err.value} is not a valid ID`;
        defaultResponse.errorDetails = err;
        defaultResponse.statusCode = 400;
    }
    // handle duplicate key errors
    handleDuplicateKeyError(err, defaultResponse) {
        let errDetails = {};
        let message = '';
        for (const [key, value] of Object.entries(err === null || err === void 0 ? void 0 : err.keyValue)) {
            console.log(key);
            message += `${key} is exists with same value ${value}. `;
            errDetails[`${key}`] = value;
        }
        defaultResponse.errorDetails = errDetails;
        defaultResponse.errorMessage = message;
        defaultResponse.message = message;
        defaultResponse.statusCode = 400;
    }
}
exports.default = new MongooseErrors();
