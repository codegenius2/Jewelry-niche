import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "./Product";
import "./Products.css";

const Products = ({ quantity }) => {
  const [products, setProducts] = useState([]);

  // fetch all products from database
  useEffect(() => {
    fetch("https://jewelry-niche-server.vercel.app/jewelry")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container className='my-md-5 my-3 text-center'>
      <p className='products-title'>Feature Products</p>
      <img src='https://i.ibb.co/jrcL1wV/divider1.png' alt='' />
      <br />
      <br />
      <Row className='g-3 g-sm-5'>
        {products.slice(0, quantity).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
