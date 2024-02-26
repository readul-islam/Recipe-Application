import React from 'react';
import RecipeDesh from '../../../assets/images/desh.png';
import ExampleRecipeCard from '../../../components/UI Components/ExampleRecipeCard';
import ScreenWrapper from '../../../components/UI Components/ScreenWrapper';
import UserFeedBackCard from '../../../components/UI Components/UserFeedBackCard';
const Hero2 = () => {
	return (
		<>
			<section className="relative pb-20 overflow-hidden py-28 bg-gray-50">
				<img
					className="absolute top-0 right-0 w-52 md:w-auto"
					src="https://i.ibb.co/mz8qLrB/star-background-header.png"
					alt=""
				/>
				<img
					className="absolute top-0 right-0 mt-10 mr-10"
					src="https://i.ibb.co/dg46tQd/light-orange-blue-1.png"
					alt=""
				/>
				<div className="absolute top-0 right-0 -mr-10 sm:-mr-0 mt-64 md:mt-125 lg:mt-88 xl:mt-112 h-32 md:h-60 lg:h-88 animate-moveHand">
					<div className="lg:w-full w-48">
						<img className="w-62" src={RecipeDesh} alt="" />
						<div className="absolute hidden md:block lg:left-4 xl:-bottom-7  -left-20">
							<UserFeedBackCard />
						</div>

						<div className="absolute md:block hidden top-12 -right-10">
							<ExampleRecipeCard />
						</div>
					</div>
				</div>

				<ScreenWrapper className="relative">
					<div className="max-w-7xl mx-auto">
						<div className="max-w-4xl   ">
							<h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-8 sm:mb-14">
								<span>Make Delicious food and feel experience like</span>
								<span className="font-serif italic pl-2">a professional chef.</span>
							</h1>
						</div>
						<div className="md:flex mb-14 max-w-xs sm:max-w-sm md:max-w-none">
							<div className="mb-6 md:mb-0  pt-3"></div>
							<div className="max-w-md">
								<p className="md:text-xl text-gray-900 font-semibold">
									it's time to make delicious food the best recipes and experience like a
									professional chef. it's time to make delicious food the best recipes
									and experience like a professional chef.
								</p>
							</div>
						</div>
						<div className="relative group md:max-w-lg shadow w-full sm:w-auto    mb-24 text-white font-semibold rounded-md overflow-hidden">
							<form className="w-full">
								<div className="relative w-full">
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
										placeholder="Search..."
										required
									/>
									<button
										type="submit"
										className="text-white absolute end-2.5 bottom-2 bg-primary-default    font-medium rounded-md text-sm px-4 py-2"
									>
										Search
									</button>
								</div>
							</form>
						</div>
						<div className="lg:flex">
							<div className="max-w-2xl mb-20 lg:mb-0 lg:mr-32">
								<span className="block mb-6 text-sm font-semibold text-gray-500">
									OUR BIG RESTAURANTS
								</span>
								<div className="flex items-center -mx-4">
									<div className="w-1/3 px-4">
										<img
											className="block"
											src="https://i.ibb.co/NxjpbZ8/logo-example1.png"
											alt=""
										/>
									</div>
									<div className="w-1/3 px-4">
										<img
											className="block"
											src="https://i.ibb.co/412xH22/logo-example3.png"
											alt=""
										/>
									</div>
									<div className="w-1/3 px-4">
										<img
											className="block"
											src="https://i.ibb.co/KFWQsyy/logo-example2.png"
											alt=""
										/>
									</div>
								</div>
							</div>
							<div className="relative lg:-mt-20 w-full max-w-md">
								<img
									className="absolute top-0 left-0 w-full"
									src="https://shuffle.dev/saturn-assets/images/headers/bg-folder.svg"
									alt=""
								/>
								<div className="relative flex flex-col">
									<div className="xs:w-100 max-w-xs pl-5 xs:pl-10 pt-10 pr-20 xs:pr-5 z-10">
										<h3 className="text-xl font-semibold text-gray-900 mb-12">
											We are building the recipe together
										</h3>
									</div>
									<div className="xs:w-100 max-w-md -mt-10 px-5 xs:px-10  pt-18 bg-orange-50 rounded-b-3xl">
										<div className="flex items-center py-6">
											<div>
												<span className="text-3xl xs:text-5xl font-semibold text-gray-900">
													18k+
												</span>
												<span className="block text-sm text-gray-500">Recipe Done</span>
											</div>
											<div className="h-12 w-px mx-auto bg-orange-200"></div>
											<div>
												<span className="text-3xl xs:text-5xl font-semibold text-gray-900">
													20+
												</span>
												<span className="block text-sm text-gray-500">
													Professional Chef
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ScreenWrapper>
			</section>
		</>
	);
};

export default Hero2;
