import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import Products from "../../Products/Products";
import Footer from "../../Shared/Footer/Footer";
import Trust from "../../Trust/Trust";
import Category from "../Category/Category";
import Review from "../Review/Review";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Category />
      <Products quantity={6} />
      <div className='text-center'>
        <Link to='/products' style={{ textDecoration: "none" }}>
          <Button variant='contained' color='secondary'>
            Explore All Products
          </Button>
        </Link>
      </div>
      <Review />
      <Trust />
      <Footer />
    </div>
  );
};

export default Home;
