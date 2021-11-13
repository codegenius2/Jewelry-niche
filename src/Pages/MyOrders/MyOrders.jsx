import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import OrderProduct from "./OrderProduct";

const MyOrders = ({ quantity }) => {
  const { user } = useAuth();
  console.log(user);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://aqueous-tor-77995.herokuapp.com/orders/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user.email]);
  return (
    <Container className='my-md-5 my-3 text-center'>
      {products.length ? (
        <Row className='g-5'>
          {products.slice(0, quantity).map((product) => (
            <OrderProduct key={product._id} order={product} />
          ))}
        </Row>
      ) : (
        <h3>You have no products added</h3>
      )}
    </Container>
  );
};

export default MyOrders;
