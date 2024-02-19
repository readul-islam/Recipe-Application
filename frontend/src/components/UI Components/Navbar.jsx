import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import PrimaryBtn from './PrimaryBtn'
import Logo from "../../assets/images/logo.png"
import { LoginIcon } from '../../assets/icons/reactIcons'
const menu = [
    {name:"Home", path:"/" || "/home"},
    {name:"Recipe", path:"/recipes"},
    {name:"About Us", path:"/about"}
  ]
const Navbar = () => {
  return (
    <>
    <nav class="bg-bannerBg-default lg:px-16 fixed w-full z-20 top-0 start-0">
  <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to='/'>
      <img src={Logo} class="h-8 w-28 xs:w-full" alt=""/>
      
  </Link>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
   <PrimaryBtn style="flex items-center text-sm sm:text-base space-x-1 rounded-md text-white tracking-wider">
  <LoginIcon/>
  <p>Login</p>
   </PrimaryBtn>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
      {menu.map(item => <NavLink className="font-semibold" to={`${item.path}`}>
      {({ isActive, isPending, isTransitioning }) => (
    
   <div className='flex flex-col justify-center items-center'>
     <span className={isActive ? "text-primary-light" : ""}>{item.name}</span>
 {isActive &&   <hr className='h-[3px] bg-primary-default w-6 rounded-full' />}
   </div>
    
  )}

      </NavLink>)}
    </ul>
  </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar