import React from 'react'
import Banner from './Banner'
import RecipeCard from '../../components/UI Components/RecipeCard'
import LikedRecipes from './LikedRecipes'

const Overview = () => {
  return (
    <div>

<Banner/>

<LikedRecipes/>
    </div>
  )
}

export default Overview