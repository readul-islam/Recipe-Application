import React from "react";
import ScreenWrapper from "../../../components/UI Components/ScreenWrapper";
import { marginSequence } from "../../../utils/styles/global";
// import {
//   BookFavIcon,
//   ForwardIcon,
//   ThumbsUpIcon,
// } from "../../../assets/icons/reactIcons";
const data = [
  {
    step: "Read Recipe",
    image: "https://i.ibb.co/2gbw7sk/recipe-book.png",
    description: `Search and read what recipe you want to cook. Find 100+ more recipes available in MadangGeden.Follow all instruction properly`,
  },
  {
    step: "Prepare the Ingredients",
    image:
      "https://i.ibb.co/wSrDkX6/Screenshot-from-2024-02-19-19-12-39-removebg-preview.png",
    description:
      "Prepare cooking utensils and food ingredients that will be used for the menu you will cook and go for next step => start cooking",
  },
  {
    step: "Start Cooking",
    image: "https://i.ibb.co/wCcGdCS/cooking.png",
    description:
      "Cook the menu of the dishes you cook, according to the instruc tions listed in the recipe guide that you cook.",
  },
  {
    step: "Enjoy Your Food",
    image: "https://i.ibb.co/mq7MM3B/d.png",
    description:
      "Wow your cook is ready for serve. Serve the food you have cooked, then enjoy the meal with your family. Enjoy your meal.",
  },
];
const data2 = [
  {
    title: "Food Recipes",
    total: "100",
    // icon: <BookFavIcon size={20} />
    icon: "🥰",
  },
  {
    title: "Best Menu",
    total: "100",
    icon: "🥰",
    //  icon: <ThumbsUpIcon size={20} />
  },
  { title: "People Satisfied", total: "10k", icon: "🥰" },
];
const Instructions = () => {
  return (
    <ScreenWrapper className={`${marginSequence}`}>
      <div className=" max-w-7xl mx-auto grid md:grid-cols-2 gap-4   items-baseline ">
        {/* additional */}

        <div>
          <div className="relative  ">
            {/* <div className="border-l-2 absolute h-[290px] top-7 left-[14px]" /> */}

            <ol class="relative  text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
              {data.map((item, index) => (
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <img className="w-4" src={item.image} />
                  </span>
                  <h3 class="text-xl font-semibold text-gray-900 mb-1">
                    {item.step}
                  </h3>
                  <p class="text-sm max-w-lg">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="col-span-1 w-full">
          <h3 className="text-2xl font-extrabold">Let's cook now</h3>
          <p className="text-gray-500 text-sm pt-1">
            Make your family happy with the dishes you make. With us, cooking
            just <br /> got easier.
          </p>

          <div className="pt-8 pb-6 grid grid-cols-3 md:gap-x-4">
            {data2.map((item) => (
              <div className=" w-full">
                <div className="  text-primary-default rounded-full p-2 w-10 flex justify-center flex-col items-center h-10 bg-gray-200 ">
                  {item.icon}
                </div>
                <p className="text-sm pt-4 text-primary-default font-extrabold">
                  {item.total}+
                </p>
                <p className="text-sm font-semibold"> {item.title}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border p-4 flex flex-col space-y-2 mt-3 w-full lg:w-12/12">
            <h3 className="text-lg font-extrabold">
              {" "}
              <span className="text-primary-default pr-[2px]">20k</span>{" "}
              Positive Comment
            </h3>
            <p className="text-gray-500 text-sm">
              See what they have to say, about the recipes we made. Happy
              cooking.
            </p>
            <div className="flex justify-between items-center">
              <div class="flex -space-x-4 rtl:space-x-reverse">
                <img
                  class="w-10 h-10 border-2 p-1 border-gray-200 rounded-full dark:border-gray-800"
                  src="https://static.vecteezy.com/system/resources/thumbnails/009/397/892/small/woman-face-expression-clipart-design-illustration-free-png.png"
                  alt=""
                />

                <a
                  class="flex items-center justify-center w-10 h-10 text-xs  text-white bg-primary-default font-bold border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                  href="#"
                >
                  +99
                </a>
              </div>
              <div className="md:flex items-center  space-x- tracking-wider text-primary-default cursor-pointer font-semibold px-4 hidden">
                <p>See Feedback</p>
                {/* <ForwardIcon size={16} className="font-bold" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div></div> */}
      </div>
    </ScreenWrapper>
  );
};

export default Instructions;
