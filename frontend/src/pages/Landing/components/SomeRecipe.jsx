import React, { useState } from "react";
// import {
//   FavoriteIcon,
//   KeyboardArrowLeftIcon,
//   KeyboardArrowRightIcon,
// } from "../../../assets/icons/reactIcons";
import { Tab, Tabs } from "../../../components/UI Components/Tabs";
import RecipeCard from "../../../components/UI Components/RecipeCard";

const SomeRecipe = () => {
  const [page, setPage] = useState(1)
  return (
    <>
      <div className="some-recipe max-w-screen-2xl px-5 mx-auto my-16 lg:px-16 xl:px-0">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">
            Menu that always make you feels good
          </h3>
          <div className="flex space-x-3">
            <div className="p-1 bg-gray-200 rounded-full cursor-pointer hover:bg-primary-default hover:text-white text-gray-400">
              {/* <KeyboardArrowLeftIcon size={25} /> */}
            </div>
            <div className={`${page === 1 && "bg-primary-default text-white"} p-1 bg-gray-200 rounded-full cursor-pointer hover:bg-primary-default hover:text-white text-gray-400`}>
              {/* <KeyboardArrowRightIcon size={25} /> */}
            </div>
          </div>
        </div>

        <div className="my-10">
          <Tabs>
            <Tab
            //  icon={<FavoriteIcon />}
              label={"Pizza"}>
             <div className="grid md:grid-cols-2 gap-4 md:gap-4 lg:grid-cols-3 lg:gap-x-5 xl:gap-x-20 2xl:gap-x-28">
          
           <RecipeCard/>
           
           <RecipeCard/>
         
           <RecipeCard/>
          
            
            
             </div>
            </Tab>
            <Tab 
            // icon={<FavoriteIcon />}
             label={"Noddle"}>
             <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-x-5 xl:gap-x-20 2xl:gap-x-28">
          
           <RecipeCard/>
           
           <RecipeCard/>
         
           <RecipeCard/>
          
            
            
             </div>
            </Tab>
            <Tab
            //  icon={<FavoriteIcon />} 
            label={"Burger"}>
             <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-x-5 xl:gap-x-20 2xl:gap-x-28">
          
           <RecipeCard/>
           
           <RecipeCard/>
         
           <RecipeCard/>
          
            
            
             </div>
            </Tab>
            <Tab 
            // icon={<FavoriteIcon />}
             label={"HotBu"}>
             <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-x-5 xl:gap-x-20 2xl:gap-x-28">
          
           <RecipeCard/>
           
           <RecipeCard/>
         
           <RecipeCard/>
          
            
            
             </div>
            </Tab>
          
           
           
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default SomeRecipe;
