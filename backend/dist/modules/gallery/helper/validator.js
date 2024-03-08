"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImagesValidationSchema = exports.imageUploadValidationSchema = void 0;
const zod_1 = require("zod");
exports.imageUploadValidationSchema = zod_1.z.object({
    img: zod_1.z.string(),
    userId: zod_1.z.string()
});
exports.getImagesValidationSchema = zod_1.z.object({
    userId: zod_1.z.string(),
});
