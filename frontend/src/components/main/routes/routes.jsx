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
import ProtectedRoute from '../container/ProtectedRoute';
import { ErrorBoundary } from '../container/ErrorBoundary';
import ErrorPage from '../../../pages/Error/ErrorPage';

const router = createBrowserRouter(
	[
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
			element: (
				<ProtectedRoute>
					<MainLayout />
				</ProtectedRoute>
			),

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
					path: 'my-recipe',
					element: <ErrorPage />,
				},
				{
					path: 'setting',
					element: <ErrorPage />,
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
	],
	{}
);

export default router;
