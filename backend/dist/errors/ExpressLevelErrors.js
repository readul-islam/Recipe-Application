"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
// handle all express level error or server level error
class ExpressLevelError {
    // custom error handling globally
    handleAppError(err, defaultResponse) {
        if (err.statusCode === config_1.STATUS.UNAUTHORIZED) {
            defaultResponse.message = 'Unauthorized Access';
            defaultResponse.errorMessage =
                'You do not have the necessary permissions to access this resource.';
            defaultResponse.statusCode = err.statusCode;
        }
        else {
            defaultResponse.message = err.message;
            defaultResponse.errorMessage = err.message;
            defaultResponse.statusCode = err.statusCode;
        }
    }
    // express default error handling globally
    handleDefaultError(err, defaultResponse) {
        defaultResponse.message = err.message;
        defaultResponse.errorMessage = err.message;
    }
    // unhandledRejection and  uncaughtException errors handler
    unHandledError(server) {
        process.on('unhandledRejection', err => {
            console.log(`👹 unhandledRejection is detected , shutting down ...`);
            if (server) {
                server.close(() => {
                    process.exit(1);
                });
            }
            process.exit(1);
        });
        process.on('uncaughtException', err => {
            console.log(`👹 uncaughtException is detected , shutting down ...`);
            process.exit(1);
        });
    }
}
exports.default = new ExpressLevelError();
