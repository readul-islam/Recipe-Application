import React from 'react'
import { FavoriteIcon } from '../../../assets/icons/reactIcons'
import { Tab, Tabs } from '../../../components/UI Components/Tabs'

const SomeRecipe = () => {
  return (
    <>
         <div className="some-recipe max-w-screen-2xl px-5 mx-auto my-16">
        <h3 className="text-2xl font-bold">
          Menu that always make you feels good
        </h3>

        <div className="my-2">
          <Tabs>
            <Tab icon={<FavoriteIcon/>} label={"Pizza"}>
              <p>Pizza</p>
            </Tab>
            <Tab  icon={<FavoriteIcon/>} label={"Soup"}>
              <p>Soup</p>
            </Tab>
            <Tab  icon={<FavoriteIcon/>} label={"Noddle"}>
              <p>Noddle</p>
            </Tab>
            <Tab  icon={<FavoriteIcon/>} label={"Burger"}>
              <p>Burger</p>
            </Tab>
          </Tabs>
        </div>
      </div>
    
    </>
  )
}

export default SomeRecipe