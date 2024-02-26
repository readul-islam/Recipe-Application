import React from 'react';
import recipe from '../../assets/images/food1.png';
const ExampleRecipeCard = () => {
	return (
		<div className="w-36 bg-white/90 rounded-2xl shadow py-4 flex flex-col px-4 ">
			<div className="w-24 -mt-14 ">
				<img src={recipe} alt="" />
			</div>
			<div className="flex flex-col text-gray-600 space-y-1 font-semibold text-xs">
				<div className="flex items-center space-x-1">
					<div className="w-3">
						<img
							src="https://i.ibb.co/WkDTgHw/Screenshot-from-2024-02-19-18-52-51-removebg-preview.png"
							alt=""
						/>
					</div>
					<p> 1 Carrot</p>
				</div>
				<div className="flex items-center space-x-1">
					<div className="w-3">
						<img
							src="https://i.ibb.co/8m48bhs/Screenshot-from-2024-02-19-18-57-06-removebg-preview.png"
							alt=""
						/>
					</div>
					<p> 1 Tomato</p>
				</div>

				<p className="text-primary-default ">4 more ingredients</p>
			</div>
		</div>
	);
};

export default ExampleRecipeCard;
