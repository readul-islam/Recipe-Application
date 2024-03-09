import { Schema, model } from 'mongoose'
import { TIngredient, TRecipe, TStep } from '../modules/recipe/helper/recipe.interfaces'

const ingredientSchema = new Schema<TIngredient>({
  name: { type: String, required: true },
  quantity: { type: String, required: true }, // e.g., "1 cup", "2 tablespoons"
  note: { type: String },
})

const stepSchema = new Schema<TStep>({

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
  calory: { type: String },
  cuisine: { type: String }, // e.g., "Italian", "Japanese"
  
  thumbnail: { type: String }, // Array of image URLs
  tags: [{ type: String }], // e.g., ["vegan", "gluten-free"]
})

export const Recipe = model<TRecipe>('Recipe', recipeSchema);

