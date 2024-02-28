import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<>
		{/* py-20 md:py-28 lg:py-52 */}
			<section class="relative h-full lg:py-32  overflow-hidden">
				<div class="relative container px-4 mx-auto">
					<div class="flex flex-wrap -mx-4 items-center">
						<div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
							<div class="max-w-md md:max-w-2xl lg:max-w-none mx-auto">
								<h2 class="font-heading text-4xl xs:text-6xl font-bold text-gray-900 mb-12">
									<span>Currently Updating-</span>
									<span class="block font-serif italic">Back soon!</span>
								</h2>
								<div class="sm:flex max-w-sm sm:max-w-lg">
									<div class="mb-6 sm:mb-0 sm:mr-3 pt-3">
										<svg
											width="84"
											height="10"
											viewbox="0 0 84 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z"
												fill="#1E254C"
											></path>
										</svg>
									</div>
									<div class="max-w-md">
										<p class="sm:text-xl text-gray-500 font-semibold mb-14">
											Sorry, the page you are looking for doesn't exist or has been moved.
											Try searching our site:
										</p>
										<Link to='/app'
											class="relative group inline-block py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-primary-default rounded-full overflow-hidden"
										
										>
											<div class="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
											<span class="relative">Take me home</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div class="w-full lg:w-1/2 px-4">
							<img
								class="block mx-auto"
								src="https://shuffle.dev/saturn-assets/images/http-codes/404-alien.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ErrorPage;
