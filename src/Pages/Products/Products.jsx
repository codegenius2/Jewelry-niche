import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import "./Products.css";
import { Row } from "react-bootstrap";
import Product from "./Product";

const Products = ({ quantity }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-tor-77995.herokuapp.com/jewelry")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container className='my-md-5 my-3 text-center'>
      <p className='products-title'>Feature Products</p>
      <img src='https://i.ibb.co/jrcL1wV/divider1.png' alt='' />
      <Row className='g-5'>
        {products.slice(0, quantity).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
