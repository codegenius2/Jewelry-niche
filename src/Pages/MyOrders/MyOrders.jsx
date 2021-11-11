import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Row } from "react-bootstrap";
import Product from "../Products/Product";
import useAuth from "../../Hooks/useAuth";

const MyOrders = ({ quantity }) => {
  const { user } = useAuth();
  console.log(user);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container className='my-md-5 my-3 text-center'>
      <p className='products-title'>Feature Products</p>
      <img src='https://i.ibb.co/jrcL1wV/divider1.png' alt='' />
      <br />
      <br />
      <Row className='g-5'>
        {products.slice(0, quantity).map((product) => (
          <Product key={product._id} product={product.packag} />
        ))}
      </Row>
    </Container>
  );
};

export default MyOrders;
