"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./modules/recipe/routes"));
const routes_2 = __importDefault(require("./modules/auth/routes"));
const routes_3 = __importDefault(require("./modules/gallery/routes"));
const appRouter = express_1.default.Router();
appRouter.use(routes_3.default);
appRouter.use(routes_2.default);
appRouter.use(routes_1.default);
exports.default = appRouter;
