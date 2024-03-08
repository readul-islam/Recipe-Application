"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../../config");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const services_1 = require("../services");
// handleRequestWrapper is a custom wrapper that used for avoid try catch repetition
class ImageController extends catchAsync_1.default {
    constructor() {
        super(...arguments);
        // auth registration
        this.uploadImage = this.handleRequestWrapper(services_1.uploadImage, // service
        config_1.STATUS.CREATED, // status code
        'image Uploaded successfully');
        // auth login
        this.getImage = this.handleRequestWrapper(services_1.getImage, config_1.STATUS.OK, 'Image retrieved successfully');
    }
}
exports.default = new ImageController();
