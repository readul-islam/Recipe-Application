import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../../../pages/Landing/Landing';
import MainLayout from '../container/MainLayout';
import Overview from '../../../pages/Overview';
import Recipes from '../../../pages/Recipes';
import PublicRecipes from '../../../pages/Public/PublicRecipes';
import Login from '../../../pages/Auth/Login';
import SignUp from '../../../pages/Auth/SignUp';
import About from '../../../pages/About';
import Demo from '../../UI Components/Demo';
import AddRecipe from '../../../pages/AddRecipe';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},

	{
		path: '/about-us',
		element: <About />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <SignUp />,
	},
	{
		path: '/recipes',
		element: <PublicRecipes />,
	},
	{
		path: '/app',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Overview />,
			},
			{
				path: 'overview',
				element: <Overview />,
			},
			{
				path: 'recipes',
				element: <Recipes />,
			},
			{
				path: 'favorites',
				element: <Recipes />,
			},
			{
				path: 'add-recipe',
				element: <AddRecipe />,
			},
		],
	},
]);

export default router;
