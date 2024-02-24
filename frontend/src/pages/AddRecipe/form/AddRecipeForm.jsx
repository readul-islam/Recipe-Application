import React from 'react'
import Input from '../../../components/UI Components/Input'



const AddRecipeForm = () => {
  return (
    <form>
   <div className='grid grid-cols-2 gap-4 mt-4'>
   <Input name="Title" placeholder="Enter Recipe Title" type={"text"}/>
   <Input name="Category" placeholder="" type={"text"}/>
   <Input name="Cuisine" placeholder="" type={"text"}/>
   <Input name="PrepTime" placeholder="" type={"text"}/>
   <Input name="CookTime" placeholder="" type={"text"}/>
   <Input name="TotalTime" placeholder="" type={"text"}/>
   <Input name="Servings" placeholder="" type={"text"}/>
  
   
   </div>
    
    </form>
  )
}

export default AddRecipeForm