import express from 'express'
import recipeRoutes from './modules/recipe/routes'

const appRouter = express.Router()

appRouter.use(recipeRoutes)
export default appRouter
