import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import HeroGrid from "./HeroGrid";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection
        title="Manoj Store"
        image="/images/iphone.jpg"
        alt="shopping"
      />
      <FeaturedProduct />
      <HeroGrid />
    </>
  );
};

export default Home;
