import express from 'express';
import recipeRoutes from './modules/recipe/routes';
import authRouter from './modules/auth/routes';

const appRouter = express.Router();

appRouter.use(authRouter);
appRouter.use(recipeRoutes);

export default appRouter;
