import {
	AdjustmentsHorizontalIcon,
	Bars4Icon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { BellAlertIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
// import {
//   BookFavIcon,
//   FilterIcon,
//   MenuIcon,
//   SearchIcon,
// } from "../../../assets/icons/reactIcons";

const Header = (props) => {
	return (
		<>
			<header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 ">
				<div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
					<div className="flex items-center gap-2 sm:gap-4 lg:hidden">
						{/* <!-- Hamburger Toggle BTN --> */}
						<Bars4Icon
							className="w-7 h-7"
							size={20}
							onClick={(e) => {
								e.stopPropagation();
								props.setSidebarOpen(!props.sidebarOpen);
							}}
						/>

						{/* <!-- Hamburger Toggle BTN --> */}

						<Link className="block flex-shrink-0 lg:hidden" to="/">
							{/* <img width={100} src={logo} alt="" /> */}
						</Link>
					</div>

					<div className="hidden sm:block w-full">
						<form action="https://formbold.com/s/unique_form_id" method="POST">
							<div className="relative">
								<button className="absolute left-0 top-1/2 -translate-y-1/2">
									<MagnifyingGlassIcon className="mx-4 w-4 text-gray-600" />
								</button>

								<div className="xl:w-1/2 flex items-center">
									<div className=" flex-1">
										<input
											type="text"
											placeholder="Type to search..."
											className="pl-9 pr-4 text-black focus:outline-none  dark:text-white w-full  bg-gray-100 rounded-full py-2 "
										/>
									</div>
									<div className="pr-4  xl:pr-0">
										<AdjustmentsHorizontalIcon className="w-7 h-7 cursor-pointer text-gray-800" />
									</div>
								</div>
							</div>
						</form>
					</div>

					<div className="flex items-center gap-5  ">
						<ul className="flex items-center  space-x-5">
							{/* <!-- Dark Mode Toggler --> */}
							{/* <DarkModeSwitcher /> */}
							{/* <!-- Dark Mode Toggler --> */}

							{/* <!-- Notification Menu Area --> */}
							<DropdownNotification />

							{/* <BellAlertIcon
                className=" w-6 h-6 text-primary-default hover:text-primary-light"
               
              /> */}
							{/* <!-- Notification Menu Area --> */}

							{/* <!-- Chat Notification Area --> */}
							{/* <DropdownMessage /> */}
							{/* <!-- Chat Notification Area --> */}
						</ul>

						{/* <!-- User Area --> */}
						<DropdownUser />
						{/* <!-- User Area --> */}
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
