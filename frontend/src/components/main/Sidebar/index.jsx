import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import foodBox from "../../../assets/images/foods.png";
import Logo from '../../../assets/images/logo.png';
import SideBarMenu from './SideBarMenu';


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-40   flex h-screen w-72.5 flex-col overflow-y-hidden  duration-300 ease-linear bg-secondary-default lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img className='pt-4' width={200} src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden "
        >
          {/* <CrossIcon className='hover:bg-gray-200 ' size={15}/> */}
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}
      <div>
        <SideBarMenu/>
      </div>

     <div className='absolute bottom-0'>
    <div className='relative'>
    <img width={240} src={foodBox} alt="" />
   <div className='absolute  text-white top-[70%] left-[40%] -translate-x-1/2 -translate-y-1/2'>
   <p className='text-xs px-2'>Share Your Own</p>
    <h1 className='text-xs font-bold px-2'>Recipe With Us</h1>
    <Link to="add-recipe">
    
    <button className='text-sm ml-[2px] mt-4 hover:bg-gray-200 bg-white text-primary-default py-1.5 px-2 rounded-lg'>Upload Now</button>
    </Link>
   </div>
    </div>
     </div>
    </aside>
  );
};

export default Sidebar;
