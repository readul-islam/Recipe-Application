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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const AppError_1 = __importDefault(require("../errors/AppError"));
const tokens_1 = require("../utils/tokens");
const authenticate = (role) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers.authorization;
            if (!token) {
                throw new AppError_1.default(config_1.STATUS.UNAUTHORIZED, 'Unauthorized Access');
            }
            const decoded = (0, tokens_1.verifyToken)(token, config_1.config.TOKEN_SECRET);
            const { _id, iat, exp } = decoded;
            // const userPassHistory: any = await PasswordHistory.getLatestPassword(
            //   _id as string,
            // )
            // const passwordChangedLastTime = new Date(
            //   userPassHistory?.createdAt,
            // ).getTime()
            // if ((iat as number) > passwordChangedLastTime) {
            //   throw new AppError(status.UNAUTHORIZED, 'Unauthorized Access')
            // }
            // if ((exp as number) < dateNowInMillisecond) {
            //   throw new AppError(status.UNAUTHORIZED, 'Unauthorized Access')
            // }
            // const user = await User.isUserExists(decoded._id)
            // if (!user) {
            //   throw new AppError(status.NOT_FOUND, 'This user is not found !')
            // }
            console.log(decoded._id);
            // if (role && !role.includes(decoded.role)) {
            //   throw new AppError(status.UNAUTHORIZED, 'Unauthorized Access')
            // }
            req.user = decoded;
            next();
        }
        catch (error) {
            next(error);
        }
    });
};
exports.default = authenticate;
