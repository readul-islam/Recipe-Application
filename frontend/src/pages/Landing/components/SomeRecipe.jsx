import React, { useState } from 'react';

import { Tab, Tabs } from '../../../components/UI Components/Tabs';
import RecipeCard from '../../../components/UI Components/RecipeCard';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import ScreenWrapper from '../../../components/UI Components/ScreenWrapper';
import { marginSequence } from '../../../utils/styles/global';
import pizza from '../../../assets/images/pizza.png';
import noddle from '../../../assets/images/noodle.png';
import burger from '../../../assets/images/burger.png';
import frenchFries from '../../../assets/images/frenchFries.png';
const SomeRecipe = () => {
	const [page, setPage] = useState(1);
	return (
		<ScreenWrapper className={`${marginSequence}`}>
			<div className="some-recipe max-w-7xl  mx-auto  ">
				<div className="flex justify-between">
					<h3 className="text-2xl font-extrabold">
						Menu that always make you feels good
					</h3>
					<div className="flex space-x-3">
						<div className="w-8 flex flex-col justify-center items-center h-8 rounded-full bg-gray-200  cursor-pointer hover:bg-primary-default hover:text-white text-gray-400">
							<ChevronLeftIcon className="w-4 h-4 text-bold" />
						</div>
						<div
							className={`${
								page === 1 && 'bg-primary-default text-white'
							} w-8 flex flex-col justify-center items-center h-8 bg-gray-200 rounded-full cursor-pointer hover:bg-primary-default hover:text-white text-gray-400`}
						>
							<ChevronRightIcon className="w-4 h-4 text-bold" />
						</div>
					</div>
				</div>

				<div className="mt-12">
					<Tabs>
						<Tab icon={<img src={pizza} width={18} />} label={'Pizza'}>
							<div className="grid md:grid-cols-2 gap-4 md:gap-4 lg:grid-cols-3 lg:gap-x-5 xl:gap-x-20 2xl:gap-x-28">
								<RecipeCard />

								<RecipeCard />

								<RecipeCard />
							</div>
						</Tab>
						<Tab icon={<img src={noddle} width={18} />} label={'Noddle'}>
							<div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-x-5 xl:gap-x-20 2xl:gap-x-28">
								<RecipeCard />

								<RecipeCard />

								<RecipeCard />
							</div>
						</Tab>
						<Tab icon={<img src={burger} width={18} />} label={'Burger'}>
							<div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-x-5 xl:gap-x-20 2xl:gap-x-28">
								<RecipeCard />

								<RecipeCard />

								<RecipeCard />
							</div>
						</Tab>
						<Tab icon={<img src={frenchFries} width={18} />} label={'France Fry'}>
							<div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-x-5 xl:gap-x-20 2xl:gap-x-28">
								<RecipeCard />

								<RecipeCard />

								<RecipeCard />
							</div>
						</Tab>
					</Tabs>
				</div>
			</div>
		</ScreenWrapper>
	);
};

export default SomeRecipe;
