import React from "react";
import Products from "../../Products/Products";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Category from "../Category/Category";
import Review from "../Review/Review";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Category />
      <Products quantity={8} />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
