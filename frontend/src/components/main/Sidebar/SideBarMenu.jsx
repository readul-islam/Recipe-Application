import React from 'react';
import {
	Squares2X2Icon,
	BookOpenIcon,
	Cog8ToothIcon,
	BookmarkIcon,
	UserIcon,
	BellIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const sidebarRoutes = [
	{
		name: 'Overview',
		Icon: '🥰',
		Icon: <Squares2X2Icon className="w-5 h-5" />,
		path: 'overview',
	},
	{
		name: 'Recipes',
		Icon: <BookOpenIcon className="w-5 h-5" />,
		// Icon: <RecipeIcon size={20} />,
		path: 'recipes',
	},
	{
		name: 'Favorite',
		Icon: <BookmarkIcon className="w-5 h-5" />,
		// Icon: <FavoriteIcon size={20} />,
		path: 'favorites',
	},
	{
		name: 'Own Recipe',
		// Icon: <FilterIcon size={20} />,
		Icon: <UserIcon className="w-5 h-5" />,
		path: 'filter',
	},

	{
		name: 'Setting',
		// Icon: <SettingIcon size={20} />,
		Icon: <Cog8ToothIcon className="w-5 h-5" />,
		path: 'setting',
	},
];

const SideBarMenu = () => {
	return (
		<div className="flex flex-col space-y-4 px-6 py-10 ">
			{sidebarRoutes.map(({ Icon, name, path }, index) => (
				<NavLink
					key={index}
					to={`${path}`}
					className={({ isActive }) =>
						isActive
							? 'text-sidebarText-active tracking-wide font-semibold bg-[#ffffff] px-2 py-1.5 rounded-lg'
							: 'text-sidebarText-inactive hover:bg-[#ffffff] px-2 py-1.5 rounded-lg hover:text-sidebarText-active hover:font-semibold tracking-wide'
					}
				>
					<div className="flex items-center space-x-2">
						{Icon}
						<p>{name}</p>
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default SideBarMenu;

/*  */
