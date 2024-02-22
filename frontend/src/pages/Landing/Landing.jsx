import React from "react";
import "react-tabs/style/react-tabs.css";
import Navbar from "../../components/UI Components/Navbar";
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
