"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    needPasswordChange: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
});
