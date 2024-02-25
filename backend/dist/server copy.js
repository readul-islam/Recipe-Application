"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const ExpressLevelErrors_1 = __importDefault(require("./errors/ExpressLevelErrors"));
const middleware_1 = require("./middleware");
let server;
// notFound handler
app_1.default.use(middleware_1.notFound);
app_1.default.use(middleware_1.globalErrorHandler);
// Promise.reject()
server = app_1.default.listen(config_1.port, () => {
    console.log('Server listening on:', config_1.port);
});
// unhandledRejection and  uncaughtException handler
ExpressLevelErrors_1.default.unHandledError(server);
