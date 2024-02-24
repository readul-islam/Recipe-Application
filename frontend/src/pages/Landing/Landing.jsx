import React from "react";
import "react-tabs/style/react-tabs.css";
import Navbar from "../../components/UI Components/Navbar";
import Hero from "./components/Hero";
import Instructions from "./components/Instructions";
import SomeRecipe from "./components/SomeRecipe";
import Subscription from "./components/Subscription";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";

const Landing = () => {
  return (
    <div className="">
      <div className="Navbar ">
        <Navbar />
      </div>
      {/* <Hero /> */}
      <Hero2/>
      <Instructions />
      <SomeRecipe />
      {/* <Subscription /> */}
     <Footer/>
    </div>
  );
};

export default Landing;
