import React from "react";
import "react-tabs/style/react-tabs.css";
import {
  BookFavIcon,
  FavoriteIcon,
  ForwardIcon,
  ThumbsUpIcon,
} from "../../assets/icons/reactIcons";
import RecipeDesh from "../../assets/images/desh.png";
import ExampleRecipeCard from "../../components/UI Components/ExampleRecipeCard";
import Navbar from "../../components/UI Components/Navbar";
import { Tab, Tabs } from "../../components/UI Components/Tabs";
import UserFeedBackCard from "../../components/UI Components/UserFeedBackCard";
import Hero from "./components/Hero";
import Instructions from "./components/Instructions";
import SomeRecipe from "./components/SomeRecipe";
import Subscription from "./components/Subscription";

const Landing = () => {
  return (
    <div className="">
      <div className="Navbar ">
        <Navbar />
      </div>
      <Hero />
      <Instructions />
      <SomeRecipe />
      <Subscription />
      <div className="footer"></div>
    </div>
  );
};

export default Landing;
