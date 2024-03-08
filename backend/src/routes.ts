import express from 'express';
import recipeRoutes from './modules/recipe/routes';
import authRouter from './modules/auth/routes';
import imageRouter from './modules/gallery/routes';

const appRouter = express.Router();

appRouter.use(imageRouter);
appRouter.use(authRouter);
appRouter.use(recipeRoutes);

export default appRouter;
