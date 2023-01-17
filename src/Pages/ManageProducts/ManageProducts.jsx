import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ManageProduct from "./ManageProduct";

const ManageProducts = ({ quantity }) => {
  const [products, setProducts] = useState([]);
  // load all products api from database
  useEffect(() => {
    fetch("https://jewelry-niche-server.vercel.app/jewelry")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <Container className='my-md-5 my-3 text-center'>
      <Row className='g-3 g-md-5'>
        {products.map((product) => (
          <ManageProduct key={product._id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ManageProducts;
