"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("./controller/auth.controller"));
const middleware_1 = require("../../middleware");
const validator_1 = require("./helper/validator");
const authRouter = express_1.default.Router();
const router = express_1.default.Router();
authRouter.post('/register', (0, middleware_1.validator)(validator_1.registerSchemaValidator), auth_controller_1.default.register);
authRouter.post('/login', auth_controller_1.default.login);
authRouter.post('/google', auth_controller_1.default.googleProvider);
router.use('/auth', authRouter);
exports.default = router;
