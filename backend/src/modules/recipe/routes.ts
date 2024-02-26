import { createRecipeService } from './services/recipe.service'
import express from 'express'
import RecipeController from './controller/recipe.controller'

const router = express.Router()
const recipeRouter = express.Router()

recipeRouter.post('/add', RecipeController.createRecipe)
router.use('/recipe', recipeRouter)
export default router
