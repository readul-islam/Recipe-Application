import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

const CustomCookieConsent = () => {
	const [showBanner, setShowBanner] = useState(false);
	useEffect(() => {
		// Check if the user has already given consent

		const consent = Cookies.get('cookie-consent');

		if (!consent) {
			setShowBanner(true);
		}
	}, []);
	const handleAccept = () => {
		Cookies.set('cookie-consent', 'accepted', { expires: 365 });
		setShowBanner(false);
	};
	const handleDecline = () => {
		// Optionally handle decline action, e.g., by setting a cookie to remember the choice
		Cookies.set('cookie-consent', 'declined', { expires: 365 });
		setShowBanner(false); // Hide the banner
	};

	if (!showBanner) return null;
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: '100%' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 2 }}
				className="fixed bottom-0 cookie-banner inset-x-0 w-full   z-50 overflow-hidden "
			>
				<div className="w-full">
					<div className="py-10 px-8  xl:px-20 cookie-banner   bg-white  ">
						<div className="flex   flex-wrap -mx-4 items-center">
							<div className="w-full lg:w-1/2 xl:w-2/3 px-4 mb-8 lg:mb-0">
								<div className="flex items-start">
									<div className="flex-shrink-0 mr-6">
										<img
											src="https://shuffle.dev/saturn-assets/images/cookies/cookie-icon-small.svg"
											alt=""
										/>
									</div>
									<div className="max-w-xl">
										<p className="text-gray-500 mb-3">
											By clicking "Accept all cookies" you consent to cookies being stored
											on your device to improve website navigation and analyze website
											usage.
										</p>
										<a
											className="inline-flex items-center text-orange-900 hover:text-gray-700 font-semibold"
											href="#"
										>
											<span className="mr-3">Read Our Data Policy</span>
											<svg
												width="13"
												height="13"
												viewBox="0 0 13 13"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12.92 0.62C12.8185 0.375651 12.6243 0.181475 12.38 0.0799999C12.2598 0.028759 12.1307 0.00157999 12 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1C1 1.26522 1.10536 1.51957 1.29289 1.70711C1.48043 1.89464 1.73478 2 2 2H9.59L1.29 10.29C1.19627 10.383 1.12188 10.4936 1.07111 10.6154C1.02034 10.7373 0.994202 10.868 0.994202 11C0.994202 11.132 1.02034 11.2627 1.07111 11.3846C1.12188 11.5064 1.19627 11.617 1.29 11.71C1.38296 11.8037 1.49356 11.8781 1.61542 11.9289C1.73728 11.9797 1.86799 12.0058 2 12.0058C2.13201 12.0058 2.26272 11.9797 2.38458 11.9289C2.50644 11.8781 2.61704 11.8037 2.71 11.71L11 3.41V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11V1C12.9984 0.869323 12.9712 0.740222 12.92 0.62Z"
													fill="currentColor"
												></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div className="w-full lg:w-1/2 xl:w-1/3 px-4">
								<div className="flex items-center justify-end">
									<p
										onClick={handleDecline}
										className="inline-block mr-4 cursor-pointer py-3 px-5 text-xs md:text-sm font-semibold text-orange-900 border border-gray-200 rounded-md hover:border-orange-900 transition duration-200"
									>
										Decline
									</p>
									<p
										onClick={handleAccept}
										className="inline-block cursor-pointer py-3 px-5 text-xs md:text-sm font-semibold text-orange-50 bg-orange-900 hover:bg-gray-900 rounded-md transition duration-200"
									>
										Accept all cookies
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default CustomCookieConsent;
