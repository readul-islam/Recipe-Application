import React from 'react'
import Navbar from '../../components/UI Components/Navbar'
import Recipes from '../Recipes'
import SearchBar from '../../components/UI Components/SearchBar'
import Tag from '../../components/UI Components/Tag'

const PublicRecipes = () => {
  return (
    <div className=' lg:px-16 2xl:px-0 pr-4 md:pr-0'>
   
    <Navbar/>
   <div className='max-w-screen-2xl mx-auto pl-5 my-24'>
  <SearchBar style={"mb-6"}/>
    
  
    <h3 className='text-xl font-semibold tracking-wider'>Most User Liked Recipes</h3>
   <Recipes/>
   </div>
    
    </div>
  )
}

export default PublicRecipes