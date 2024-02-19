import React from "react";

import { Link, NavLink } from "react-router-dom";
import PrimaryBtn from "../../components/UI Components/PrimaryBtn";
import { LoginIcon } from "../../assets/icons/reactIcons";
import Navbar from "../../components/UI Components/Navbar";
import RecipeDesh from "../../assets/images/desh.png";
import Jessica from "../../assets/images/jessica.png";
import UserFeedBackCard from "../../components/UI Components/UserFeedBackCard";
import ExampleRecipeCard from "../../components/UI Components/ExampleRecipeCard";
const Landing = () => {
  return (
    <div className="">
      <div className="Navbar ">
        <Navbar />
      </div>
      <div className=" bg-bannerBg-default">
        <div className="Banner max-w-screen-2xl mx-auto flex  pt-28 pb-10 justify-between items-center">
          <div className="flex flex-col space-y-4">
            <h3 className="text-5xl tracking-wider leading-tight font-bold">
              Make Delicious food <br /> and feel experience like a <br />{" "}
              professional chef.
            </h3>
            <small className="text-gray-500 text-sm ">
              it's time to make delicious food the best recipes and experience
              like a professional chef.
            </small>
            {/* input */}
            <form class="">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="leading-page-search"
                  class="block w-full  p-4 ps-10 text-sm text-gray-900  rounded-lg bg-white outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Type your favorite recipe here"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2 bg-primary-default    font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="max-w-80 relative">
            <img className="" src={RecipeDesh} alt="" />
            <div className="absolute -bottom-7 -left-20">
              <UserFeedBackCard/>
            </div>

            <div className="absolute top-12 -right-10">
            <ExampleRecipeCard/>
            </div>
          </div>
        </div>
      </div>
      <div className="additional">
        {/* additional */}

       
      </div>
      <div className="some-recipe"></div>
      <div className="subscribe"></div>
      <div className="footer"></div>
    </div>
  );
};

export default Landing;

/* <li>
        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li> */
