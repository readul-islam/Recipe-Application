import React from "react";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
  BookFavIcon,
  ForwardIcon,
  ThumbsUpIcon
} from "../../assets/icons/reactIcons";
import RecipeDesh from "../../assets/images/desh.png";
import ExampleRecipeCard from "../../components/UI Components/ExampleRecipeCard";
import Navbar from "../../components/UI Components/Navbar";
import UserFeedBackCard from "../../components/UI Components/UserFeedBackCard";
import VerticalTab from "../../components/UI Components/VerticalTab";

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
  { title: "Food Recipes", total: "100", icon: <BookFavIcon size={20} /> },
  { title: "Best Menu", total: "100", icon: <ThumbsUpIcon size={20} /> },
  { title: "People Satisfied", total: "10k", icon: "🥰" },
];

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
              <UserFeedBackCard />
            </div>

            <div className="absolute top-12 -right-10">
              <ExampleRecipeCard />
            </div>
          </div>
        </div>
      </div>
      <div className="additional max-w-screen-2xl mx-auto grid grid-cols-2 mt-16">
        {/* additional */}

        <div>
          <div className="relative">
            <div className="border-l-2 absolute h-[290px] top-7 left-[14px]" />
            {data.map((item, index) => (
              <div
                key={index}
                className={` flex relative  items-center space-x-4 pb-9`}
              >
                <div className="w-8 p-1 border  bg-gray-200 rounded-full">
                  <img
                    className="rounded-full w-full"
                    src={item.image}
                    alt=""
                  />
                </div>

                <div>
                  <h3 className="font-semibold pb-1">{item.step}</h3>
                  <p className="text-xs text-gray-500 max-w-lg text-balance">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <h3 className="text-2xl font-extrabold">Let's cook now</h3>
          <p className="text-gray-500 text-sm pt-1">
            Make your family happy with the dishes you make. With us, cooking
            just <br /> got easier.
          </p>

          <div className="pt-6 pb-4 grid grid-cols-3 gap-4">
            {data2.map((item) => (
              <div>
                <div className="text-primary-default rounded-full p-2 w-10 flex justify-center flex-col items-center h-10 bg-gray-200 ">
                  {item.icon}
                </div>
                <p className="text-sm pt-4 text-primary-default font-extrabold">
                  {item.total}+
                </p>
                <p className="text-sm font-semibold"> {item.title}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border p-4 flex flex-col space-y-2 mt-3 w-10/12">
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
                <ForwardIcon size={16} className="font-bold" />
              </div>
            </div>
          </div>
        </div>

        {/* <div></div> */}
      </div>
      <div className="some-recipe max-w-screen-2xl mx-auto my-16">
        <h3 className="text-2xl font-bold">
          Menu that always make you feels good
        </h3>

        <div className="flex">
        <VerticalTab data={[
    {
      expData: {
        company: "TWI",
        position: "Graduate Student",
        period: "Oct 2018 - present",
        details: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim fringilla dui ac mattis.",
          "Donec in sodales eros. Nulla fermentum, ante in venenatis pellentesque, justo odio viverra lorem, varius posuere erat tortor et magna."
        ]
      }
    },
    {
      expData: {
        company: "IIUM",
        position: "Research Assistant",
        period: "Oct 2016 - May 2018",
        details: [
          "Suspendisse potenti. Vestibulum aliquam luctus sem, at feugiat felis. Pellentesque dignissim lorem eu ipsum condimentum varius. ",
          "Nam vehicula pretium arcu. Nam venenatis ante et porta pellentesque."
        ]
      }
    },
    {
      expData: {
        company: "Intel",
        position: "Product Development Engineer",
        period: "Mar 2016 - Oct 2016",
        details: [
          "Ut lobortis neque sit amet felis aliquam, sit amet placerat leo maximus. Aenean a tempus massa, vel varius leo.",
          "Sed eu efficitur leo, nec congue elit. Etiam ullamcorper est at pulvinar condimentum.",
          "Suspendisse potenti. Vestibulum aliquam luctus sem, at feugiat felis. Pellentesque dignissim lorem eu ipsum condimentum varius. "
        ]
      }
    }
  ]} />
        </div>
      </div>
      <div className="subscribe ">
        <div className="max-w-screen-2xl relative bg-bannerBg-default rounded-3xl mx-auto flex-col flex justify-center items-center text-center py-20 my-20 overflow-hidden">
          <div className="absolute w-36 -left-10  bottom-0">
            <img src={RecipeDesh} alt="" />
          </div>
          <div className="absolute w-36 -right-10  top-0">
            <img src={RecipeDesh} alt="" />
          </div>

          <h3 className="text-3xl font-extrabold tracking-wide">
            Get new recipe everyday
          </h3>
          <p className="text-gray-500 text-sm pt-3 pb-4">
            just input your email and get new recipes ever day <br /> Let's
            experience like a professional chef.
          </p>
          <form class="">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative max-w-2xl">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                type="search"
                id="leading-page-search"
                class="block w-96 p-4 ps-10 text-sm text-gray-900  rounded-lg bg-white outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Type your favorite recipe here"
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2 bg-primary-default    font-medium rounded-lg text-sm px-4 py-2"
              >
                input
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Landing;
