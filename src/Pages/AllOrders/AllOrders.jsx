import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import ManageOrder from "./ManageOrder";

const AllOrders = ({ quantity }) => {
  const { user } = useAuth();
  console.log(user);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allorders")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user.email, products]);
  return (
    <Container className='my-md-5 my-3 text-center'>
      <Row className='g-5'>
        {products.slice(0, quantity).map((product) => (
          <ManageOrder key={product._id} order={product} />
        ))}
      </Row>
    </Container>
  );
};

export default AllOrders;
