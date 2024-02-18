import React from "react";
import {
  FavoriteIcon,
  FilterIcon,
  GridIcon,
  RecipeIcon,
  SettingIcon,
} from "../../../assets/icons/reactIcons";
import { NavLink } from "react-router-dom";

const sidebarRoutes = [
  {
    name: "Overview",
    Icon: <GridIcon size={20} />,
    path: "/app",
  },
  {
    name: "Recipes",
    Icon: <RecipeIcon size={20} />,
    path: "recipes",
  },
  {
    name: "Filter",
    Icon: <FilterIcon size={20} />,
    path: "filter",
  },
  {
    name: "Favorite",
    Icon: <FavoriteIcon size={20} />,
    path: "favorite",
  },
  {
    name: "Setting",
    Icon: <SettingIcon size={20} />,
    path: "setting",
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
              ? "text-sidebarText-active tracking-wide font-semibold bg-[#ffffff] px-2 py-1.5 rounded-lg"
              : "text-sidebarText-inactive hover:bg-[#ffffff] px-2 py-1.5 rounded-lg hover:text-sidebarText-active hover:font-semibold tracking-wide"
          }
        >
          <div className="flex items-center space-x-3">
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
