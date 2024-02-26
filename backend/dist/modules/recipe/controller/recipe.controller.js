"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../../config");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const recipe_service_1 = require("../services/recipe.service");
class RecipeController extends catchAsync_1.default {
    constructor() {
        super(...arguments);
        this.createRecipe = this.handleRequestWrapper(recipe_service_1.createRecipeService, config_1.STATUS.CREATED, 'Successfully your recipe saved!');
    }
}
exports.default = new RecipeController;
