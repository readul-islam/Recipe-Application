import React from 'react'
import recipe from "../../assets/images/food1.png"
const ExampleRecipeCard = () => {
  return (
    <div className='w-36 bg-white/90 rounded-2xl shadow py-4 flex flex-col px-4 '>

<div className='w-24 -mt-14 '>
 <img src={recipe} alt="" />
</div>
<div className='flex flex-col text-gray-600 space-y-1 font-semibold text-xs'>
  <p>2 Element</p>
  <p>2 Element</p>
  <p>2 Element</p>
  <p className='text-primary-default '>4 more ingredients</p>
</div>

    </div>
  )
}

export default ExampleRecipeCard