import { Schema, model } from 'mongoose'
import { TRecipe } from '../modules/recipe/recipe.interfaces'

const ingredientSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true }, // e.g., "1 cup", "2 tablespoons"
  note: { type: String },
})

const stepSchema = new Schema({
  stepNumber: { type: Number, required: true },
  instruction: { type: String, required: true },
  img: { type: String },
})

const recipeSchema = new Schema<TRecipe>({
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
})

const Recipe = model<TRecipe>('Recipe', recipeSchema)
