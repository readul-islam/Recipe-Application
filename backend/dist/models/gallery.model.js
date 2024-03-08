"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gallery = void 0;
const mongoose_1 = require("mongoose");
// d
const gallerySchema = new mongoose_1.Schema({
    img: {
        type: String,
        required: true,
    },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
});
exports.Gallery = (0, mongoose_1.model)('Gallery', gallerySchema);
