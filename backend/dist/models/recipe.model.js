"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose_1 = require("mongoose");
const ingredientSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    quantity: { type: String, required: true }, // e.g., "1 cup", "2 tablespoons"
    note: { type: String },
});
const stepSchema = new mongoose_1.Schema({
    stepNumber: { type: Number, required: true },
    instruction: { type: String, required: true },
    img: { type: String },
});
const recipeSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    ingredients: [ingredientSchema],
    instructions: [stepSchema],
    prepTime: { type: Number, required: true },
    cookTime: { type: Number, required: true },
    totalTime: { type: Number, required: true },
    servings: { type: Number, required: true },
    category: { type: String }, // e.g., "Dessert", "Main Course"
    cuisine: { type: String }, // e.g., "Italian", "Japanese"
    author: { type: String, required: true },
    created: {
        type: Date,
        default: Date.now,
    },
    images: [{ type: String }], // Array of image URLs
    tags: [{ type: String }], // e.g., ["vegan", "gluten-free"]
});
exports.Recipe = (0, mongoose_1.model)('Recipe', recipeSchema);
