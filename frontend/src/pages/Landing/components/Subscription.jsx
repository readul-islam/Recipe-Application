import React from 'react';
import RecipeDesh from "../../../assets/images/desh.png";
const Subscription = () => {
  return (
    <>
    <div className="subscribe px-4 lg:px-16 md:px-5">
        <div className="max-w-screen-2xl relative bg-bannerBg-default rounded-3xl mx-auto flex-col flex justify-center items-center text-center py-20 my-20 overflow-hidden">
          <div className="absolute w-28 md:w-36 -left-10  bottom-0">
            <img src={RecipeDesh} alt="" />
          </div>
          <div className="absolute w-28 md:w-36 -right-10  top-0">
            <img src={RecipeDesh} alt="" />
          </div>

          <h3 className="md:text-3xl text-xl  font-extrabold tracking-wide">
            Get new recipe everyday
          </h3>
          <p className="text-gray-500 text-xs md:text-sm pt-3 pb-4">
            just input your email and get new recipes ever day <br /> Let's
            experience like a professional chef.
          </p>
          <form className="">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative max-w-2xl">
              <div className="absolute  max-w-96 inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                type="search"
                id="leading-page-search"
                className="block w-72 md:w-96  p-4 ps-10 text-sm text-gray-900  rounded-lg bg-white outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Type your favorite recipe here"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2 bg-primary-default    font-medium rounded-lg text-sm px-4 py-2"
              >
                input
              </button>
            </div>
          </form>
        </div>
      </div>
    
    
    </>
  )
}

export default Subscription