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
exports.getImage = exports.uploadImage = void 0;
const gallery_model_1 = require("../../../models/gallery.model");
const uploadImage = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const uploaded = yield gallery_model_1.Gallery.create(Object.assign({}, req.body));
    return uploaded;
});
exports.uploadImage = uploadImage;
const getImage = (req) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    return yield gallery_model_1.Gallery.find({ userId: req.query.userId });
});
exports.getImage = getImage;
