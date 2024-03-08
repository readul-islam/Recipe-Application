"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gallery_auth_1 = __importDefault(require("./controller/gallery.auth"));
const middleware_1 = require("../../middleware");
const validator_1 = require("./helper/validator");
const imgRouter = express_1.default.Router();
const router = express_1.default.Router();
imgRouter.post('/add', (0, middleware_1.validator)(validator_1.imageUploadValidationSchema), gallery_auth_1.default.uploadImage);
imgRouter.get('/get', 
// validator(getImagesValidationSchema),
gallery_auth_1.default.getImage);
router.use('/image', imgRouter);
exports.default = router;
