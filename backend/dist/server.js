"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_1 = require("./config/index");
const middleware_1 = require("./middleware");
let server;
// notFound handler
app_1.default.use(middleware_1.notFound);
app_1.default.use(middleware_1.globalErrorHandler);
// Promise.reject()
server = app_1.default.listen(index_1.config.PORT, () => {
    console.log('Server listening on:', index_1.config.PORT);
});
// unhandledRejection and  uncaughtException handler
// ExpressLevelErrors.unHandledError(server)
