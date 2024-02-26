"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerService = exports.loginService = exports.googleProviderService = void 0;
const config_1 = require("../../../config");
const user_model_1 = require("../../../models/user.model");
const tokens_1 = require("../../../utils/tokens");
const googleProviderService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const user = yield user_model_1.User.isUserExists(data.email, data.provider);
    let jwtPayload;
    if (!user) {
        const saveUser = yield user_model_1.User.create(Object.assign(Object.assign({}, data), { needPasswordChange: true }));
        jwtPayload = {
            _id: saveUser._id,
            email: saveUser.email,
            provider: saveUser.provider,
        };
    }
    else {
        jwtPayload = {
            _id: user._id,
            email: user.email,
            provider: user.provider,
        };
    }
    const userInfo = yield user_model_1.User.isUserExists(data.email, data.provider);
    const accessToken = (0, tokens_1.generateToken)(jwtPayload, config_1.config.TOKEN_SECRET, '30d');
    const refreshToken = (0, tokens_1.generateToken)(jwtPayload, config_1.config.TOKEN_SECRET, '60d');
    return {
        token: { accessToken, refreshToken },
        userInfo,
    };
});
exports.googleProviderService = googleProviderService;
const registerService = (req) => __awaiter(void 0, void 0, void 0, function* () { });
exports.registerService = registerService;
const loginService = (req) => __awaiter(void 0, void 0, void 0, function* () { });
exports.loginService = loginService;
