import React from 'react';
import RecipeCard from '../../components/UI Components/RecipeCard';
// import { ForwardIcon } from '../../assets/icons/reactIcons'
const recipes = [1, 2, 3, 4];
const LikedRecipes = () => {
	return (
		<div className="mt-12">
			<div className="flex justify-between items-center">
				<h3 className="text-xl font-semibold tracking-wider">
					Based On The Food You Like
				</h3>
				<div className="md:flex items-center  space-x- tracking-wider text-primary-default cursor-pointer font-semibold px-4 hidden">
					<p>See more</p>
					{/* <ForwardIcon size={16} className='font-bold'/> */}
				</div>
			</div>

			<div className="grid mt-8 md:grid-cols-2  xl:grid-cols-3 gap-6 sm:gap-10 2xl:grid-cols-4 2xl:gap-8 w-full">
				{recipes.map((item) => (
					<RecipeCard />
				))}
			</div>
		</div>
	);
};

export default LikedRecipes;
