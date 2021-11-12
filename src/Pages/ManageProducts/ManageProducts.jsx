import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Row } from "react-bootstrap";
import ManageProduct from "./ManageProduct";

const ManageProducts = ({ quantity }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-tor-77995.herokuapp.com/jewelry")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container className='my-md-5 my-3 text-center'>
      <Row className='g-5'>
        {products.map((product) => (
          <ManageProduct key={product._id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ManageProducts;
