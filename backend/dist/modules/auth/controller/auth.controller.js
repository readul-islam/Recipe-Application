"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../../config");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const auth_service_1 = require("../service/auth.service");
// handleRequestWrapper is a custom wrapper that used for avoid try catch repetition
class AuthController extends catchAsync_1.default {
    constructor() {
        super(...arguments);
        // auth registration
        this.register = this.handleRequestWrapper(auth_service_1.registerService, // service
        config_1.STATUS.CREATED, // status code
        'User registered successfully');
        // auth login
        this.login = this.handleRequestWrapper(auth_service_1.loginService, config_1.STATUS.OK, 'User logged in successfully');
        // auth login
        this.googleProvider = this.handleRequestWrapper(auth_service_1.googleProviderService, config_1.STATUS.OK, 'User logged in successfully');
    }
}
exports.default = new AuthController();
