import { Link } from "react-router-dom";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";

import DarkModeSwitcher from "./DarkModeSwitcher";
import {
  BookFavIcon,
  FilterIcon,
  MenuIcon,
  SearchIcon,
} from "../../../assets/icons/reactIcons";

import logo from "../../../assets/images/logo.png"
const Header = (props) => {
  return (
    <>
      <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 ">
        <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
            {/* <!-- Hamburger Toggle BTN --> */}
            <MenuIcon
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
                  <SearchIcon size={18} className="mx-3" />
                </button>

                <div className="xl:w-1/2 ">
                  <div className="pr-4  xl:pr-0">
                    <input
                      type="text"
                      placeholder="Type to search..."
                      className="pl-9 pr-4 text-black focus:outline-none  dark:text-white w-full  bg-gray-100 rounded-full py-2 "
                    />
                    {/* <div className="flex bg-gray-100 px-3 py-2 rounded-full items-center space-x-2 ">
                      <FilterIcon size={20}/>
                      <p>Filter</p>
                    </div> */}
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

              <BookFavIcon
                className="text-primary-default hover:text-primary-light"
                size={18}
              />
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
