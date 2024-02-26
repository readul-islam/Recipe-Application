import React from 'react';
import RecipeDesh from '../../../assets/images/desh.png';
import ExampleRecipeCard from '../../../components/UI Components/ExampleRecipeCard';
import UserFeedBackCard from '../../../components/UI Components/UserFeedBackCard';
const Hero = () => {
	return (
		<>
			<div className=" bg-bannerBg-default">
				<div className="Banner px-4 lg:px-16 2xl:px-0 md:px-5 max-w-screen-2xl mx-auto flex  pt-32 pb-20 justify-between   md:flex-row items-center ">
					<div className="flex flex-col space-y-4 lg:pr-20 xl:pr-0 md:pt-0 ">
						<h3 className="xl:text-5xl text-3xl text-center md:text-left 2xl:text-5xl lg:text-[38px] md:text-4xl  leading-tight  font-bold max-w-2xl ">
							Make Delicious food <br /> and feel experience like a professional chef.
						</h3>
						<p className="text-gray-500 text-xs xl:text-base md:max-w-sm md:text-xs lg:text-sm lg:max-w-xl  xl:pt-3 lg:pb-2 xl:pb-4 text-center md:text-left">
							it's time to make delicious food the best recipes and experience like a
							professional chef. it's time to make delicious food the best recipes and
							experience like a professional chef.
						</p>
						{/* input */}
						<form className="">
							<label
								htmlFor="default-search"
								className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
							>
								Search
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
									<svg
										className="w-4 h-4 text-gray-500 dark:text-gray-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 20"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											strokeWidth="2"
											d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
										/>
									</svg>
								</div>
								<input
									type="search"
									id="leading-page-search"
									className="block w-full  p-4 ps-10 text-sm text-gray-900  rounded-lg bg-white outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
									placeholder="Type your favorite recipe here"
									required
								/>
								<button
									type="submit"
									className="text-white absolute end-2.5 bottom-2 bg-primary-default    font-medium rounded-lg text-sm px-4 py-2"
								>
									Search
								</button>
							</div>
						</form>
					</div>

					<div className="lg:max-w-80 max-w-56 hidden md:flex  relative">
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
		</>
	);
};

export default Hero;
