import { Alert, Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "../Products/Products.css";

const ManageOrder = ({ order }) => {
  const { product, status, _id } = order;

  // Handle Approved function
  const handleStatus = (id) => {
    const url = `https://aqueous-tor-77995.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    }).then();
  };

  // Handle delete function
  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure you want to Delete ?");
    if (procced) {
      fetch(`https://aqueous-tor-77995.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((deleteData) => {
          console.log(deleteData);
          if (deleteData.deletedCount > 0) {
            alert("Deleted Successfully");
          }
        });
    }
  };
  return (
    <Col xs={12} md={4}>
      <Card sx={{ minWidth: "100%" }}>
        <CardActionArea>
          <CardMedia component='img' image={product.image} alt='jewelry' />
          <CardContent>
            <p className='product-title'>{product.title}</p>
            <p className='product-vendor'>{status}</p>
            <p>{order.email}</p>
            <p className='product-price'>${product.price}</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Row>
            <Col xs={6}>
              {status === "pending" ? (
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => handleStatus(_id)}>
                  Approved
                </Button>
              ) : (
                <Alert severity='success'>Approved!</Alert>
              )}
            </Col>
            <Col xs={6}>
              <Button variant='contained' onClick={() => handleDelete(_id)}>
                Delete
              </Button>
            </Col>
          </Row>
        </CardActions>
      </Card>
    </Col>
  );
};

export default ManageOrder;
