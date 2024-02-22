import React from "react";
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      {/* <!-- source:https://codepen.io/owaiswiz/pen/jOPvEPB --> */}
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <img src={Logo} class="w-mx-auto" />
            </div>
            <div class="mt-12 flex flex-col items-center">
              <div class="w-full flex-1 mt-8">
                <div class="flex flex-col items-center">
                  <button class="w-full max-w-md font-bold shadow-sm rounded-lg py-2 hover:bg-primary-default/20 bg-primary-light/10 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div class="bg-white p-2 rounded-full">
                      <svg class="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span class="ml-2 tracking-wide">Sign In with Google</span>
                  </button>
                </div>

                <div class="my-12 border-b text-center">
                  <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    OR
                  </div>
                </div>

                <div class="mx-auto max-w-md">
                  <input
                    class="w-full px-7 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    class="w-full px-7 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />

                  <div class="flex items-center justify-between mt-5">
                    {/* <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="w-4 h-4 border text-white border-gray-300 accent-[#F68712] rounded bg-gray-50 focus:ring-3 dark:focus:ring-primary-600 focus:rounded active:rounded"
                          required=""
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          for="remember"
                          class="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div> */}

                    <div class="inline-flex items-center">
                      <div
                        class="relative flex items-center  rounded-full cursor-pointer"
                        htmlFor="remember"
                      >
                        <input
                          type="checkbox"
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-amber-500 checked:bg-amber-500 checked:before:bg-amber-500 hover:before:opacity-10"
                          id="remember"
                        />
                        <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          for="remember"
                          class="text-gray-500 dark:text-gray-300 cursor-pointer"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button class="mt-5 tracking-wide font-semibold bg-primary-default text-white-500 w-full py-3 rounded-md hover:bg-primary-light/70 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span class=" text-white">Sign In</span>
                  </button>

                  <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/register"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>

                 
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
              class="w-full relative bg-cover bg-center  bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/m8fr6L4/3739244.jpg)", backgroundSize:"cover"
              }}
            >
              <div className="absolute w-full h-full bg-black/5"></div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Login);
