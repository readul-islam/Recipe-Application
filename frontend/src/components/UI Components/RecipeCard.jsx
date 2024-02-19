import React, { useMemo, useState } from "react";
import Recipe from "../../assets/images/recipe.jpeg";
import {
  HeartEmptyIcon,
  HeartFillIcon,
  StarFillIcon,
  TimeIcon,
} from "../../assets/icons/reactIcons";
import { Tooltip } from "react-tooltip";
import Onion from "../../assets/images/onion.png";
const ingredients = [
  {
    name: "flour",
    image: Onion,
  },
  {
    name: "onion",
    image: Onion,
  },
  {
    name: "oil",
    image: Onion,
  },
  {
    name: "salt",
    image: Onion,
  },
  {
    name: "shrimp",
    image: Onion,
  },
  {
    name: "onion",
    image: Onion,
  },
  {
    name: "onion",
    image: Onion,
  },
  {
    name: "onion",
    image: Onion,
  },
];

const RecipeCard = () => {
  const [elementShow, setElementShow] = useState(5);

  return (
    <>
      <div className="container relative  sm:w-[335px] 2xl:w-[340px] border-2 border-gray-100 rounded-2xl p-6">
        <div className="header-section flex items-center space-x-4">
          <div className="w-24">
            <img className="rounded-full" src={Recipe} alt="" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Matar Paneer</h3>
            <div className="flex items-center">
              <StarFillIcon className="text-yellow-500" />
              <StarFillIcon className="text-yellow-500" />
              <StarFillIcon className="text-yellow-500" />
              <StarFillIcon className="text-yellow-500" />
              <p className="text-gray-400 text-sm pl-1">(1228)</p>
            </div>
          </div>
        </div>
        <div className="ingredients-section mt-4">
          <h3 className="text-lg font-semibold">Ingredients</h3>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {ingredients.slice(0, 5).map((item) => (
              <div className="flex flex-col items-center space-y-1 bg-secondary-default py-2 rounded-xl">
                <div className="w-4">
                  <img src={item.image} alt="" />
                </div>
                <p className="first-letter:uppercase tracking-wide text-sm">
                  {item.name}
                </p>
              </div>
            ))}
            <div className="flex flex-col justify-center items-center text-center bg-gray-100 py-2 rounded-xl px-2">
              <p className="text-primary-light text-sm font-semibold">
                +{ingredients.length - 5} More
              </p>
            </div>
          </div>
        </div>
        <div className="action-section mt-5 flex justify-between items-center">
          <button className="bg-primary-default text-sm px-4 py-1.5 rounded-full text-white tracking-wider font-medium ">
            View Details
          </button>

          <div className="text-gray-400 flex space-x-1 items-center">
            <TimeIcon size={19} className="" />
            <p className="text-xs">15 mins</p>
          </div>
        </div>

        <div
          className="my-anchor-element favorite-section cursor-pointer absolute top-4 right-5 border-2 border-gray-200 rounded-full"
         
        >
          <HeartFillIcon className="p-1   hover:fill-red-600" size={25} />
          {/* <HeartEmptyIcon className="p-1 hover:fill-red-500" size={25}/> */}
          <Tooltip className="favorite-tooltip" anchorSelect=".my-anchor-element" place="top">
           Add To Favorite
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
