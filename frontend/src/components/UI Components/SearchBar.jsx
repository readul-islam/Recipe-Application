import React from 'react'
// import { SearchIcon } from '../../assets/icons/reactIcons'

const SearchBar = ({style}) => {
  return (
    <>
    <div className={` ${style&& style}  w-full`}>
            <form >
              <div className="relative">
                <button className="absolute left-0 top-1/2 -translate-y-1/2">
                  {/* <SearchIcon size={18} className="mx-3" /> */}
                </button>

                <div className="w-full">
                  <div className="pr-4  xl:pr-0">
                    <input
                      type="text"
                      placeholder="Type to search..."
                      className="pl-9 pr-4 text-black focus:outline-none  dark:text-white w-full  bg-gray-100 rounded-full py-2 "
                    />
                   
                  </div>
                </div>
              </div>
            </form>
          </div>
    
    </>
  )
}

export default SearchBar