"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipe_controller_1 = __importDefault(require("./controller/recipe.controller"));
const router = express_1.default.Router();
const recipeRouter = express_1.default.Router();
recipeRouter.post('/add', recipe_controller_1.default.createRecipe);
router.use('/recipe', recipeRouter);
exports.default = router;
