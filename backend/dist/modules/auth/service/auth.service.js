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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerService = exports.loginService = exports.googleProviderService = void 0;
const config_1 = require("../../../config");
const user_model_1 = require("../../../models/user.model");
const tokens_1 = require("../../../utils/tokens");
const AppError_1 = __importDefault(require("../../../errors/AppError"));
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
    const userInfo = yield user_model_1.User.findOne({
        email: data.email,
        provider: data.provider,
    }).select('-createdAt -updatedAt');
    const accessToken = (0, tokens_1.generateToken)(jwtPayload, config_1.config.TOKEN_SECRET, '30d');
    const refreshToken = (0, tokens_1.generateToken)(jwtPayload, config_1.config.TOKEN_SECRET, '60d');
    return {
        token: { accessToken, refreshToken },
        userInfo,
    };
});
exports.googleProviderService = googleProviderService;
const registerService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.create(Object.assign({}, req.body));
    return { success: true };
});
exports.registerService = registerService;
const loginService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const isExist = yield user_model_1.User.findOne({ email }).select('+password');
    if (!isExist)
        throw new AppError_1.default(config_1.STATUS.NOT_FOUND, 'user not exist in our system');
    if (!(yield user_model_1.User.isPasswordMatched(password, isExist.password))) {
        throw new AppError_1.default(config_1.STATUS.UNAUTHORIZED, 'password mismatch, Please try to remember');
    }
    const payload = {
        _id: isExist._id,
        email: isExist.email,
        provider: isExist.provider,
    };
    const accessToken = (0, tokens_1.generateToken)(payload, config_1.config.TOKEN_SECRET, '30d');
    const refreshToken = (0, tokens_1.generateToken)(payload, config_1.config.TOKEN_SECRET, '60d');
    const _a = isExist.toObject(), { password: pass } = _a, others = __rest(_a, ["password"]);
    return {
        userInfo: others,
        token: {
            accessToken,
            refreshToken,
        },
    };
});
exports.loginService = loginService;
