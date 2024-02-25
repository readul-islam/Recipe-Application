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
const lodash_1 = require("lodash");
const validator = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let data = {};
            if (req.method === 'GET' || req.method === 'DELETE')
                data = (0, lodash_1.isEmpty)(req.query) ? req.params : req.query;
            if (req.method === 'POST' ||
                req.method === 'PUT' ||
                req.method === 'PATCH')
                data = req.body;
            yield schema.parseAsync(data);
            next();
        }
        catch (error) {
            next(error);
        }
    });
};
exports.default = validator;
