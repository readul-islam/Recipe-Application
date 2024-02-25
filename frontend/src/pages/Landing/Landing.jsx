import React from "react";
import { Helmet } from "react-helmet";
import "react-tabs/style/react-tabs.css";
import Navbar from "../../components/UI Components/Navbar";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
import Instructions from "./components/Instructions";
import Reviews from "./components/Reviews";
import SomeRecipe from "./components/SomeRecipe";

const Landing = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="This is a 90to.com of my page" />
        <meta name="keywords" content="react, meta tags, seo 90to" />
        <meta name="author" content="90to" />
        <meta property="og:title" content="Landing page 90to.com" />
        <meta property="og:description" content="this page about 90to.com" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com/my-page" />
        <meta name="twitter:title" content="Landing page 90to.com" />
        <meta
          name="twitter:description"
          content="90to.com"
        />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="Navbar ">
        <Navbar />
      </div>
      {/* <Hero /> */}
      <Hero2 />
      <Instructions />
      <SomeRecipe />
      {/* <Subscription /> */}
      <Reviews />
    
            <Footer />
    </div>
  );
};

export default Landing;
