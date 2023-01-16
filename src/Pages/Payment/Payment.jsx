import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../Hooks/useAuth";
import CheckoutForm from "../Checkout/Checkout";

const Payment = (props) => {
  const { show, handleClose } = props;
  const stripePromise = loadStripe(
    "pk_test_51LODy6E2BA0bk27fn12uaA3RJvcT8Br43ycruWGC86ywLq7nIW4DUW0G3OKgkflu42k6Ie37zgMzVlBiGSL023ns00MmBGUPMQ",
  );
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);

  // load user products from database
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
    return () => {
      setPrice(0);
    };
  }, [user]);

  useEffect(() => {
    products.length > 0 &&
      products.map((product) =>
        setPrice((prev) => prev + product.product.price),
      );
  }, [products]);

  return (
    <Modal centered={true} show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Make Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} name={user.displayName} id={user.uid} />
        </Elements>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Payment;
