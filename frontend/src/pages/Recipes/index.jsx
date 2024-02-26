import React from 'react';
import RecipeCard from '../../components/UI Components/RecipeCard';
const recipes = [1, 2, 3, 4, 5, 6, 7, 8];
const Recipes = () => {
	return (
		<div className="grid mt-8 md:grid-cols-2   xl:grid-cols-3 gap-6 sm:gap-10 2xl:grid-cols-4 2xl:gap-8 w-full">
			{recipes.map((item) => (
				<RecipeCard />
			))}
		</div>
	);
};

export default Recipes;
