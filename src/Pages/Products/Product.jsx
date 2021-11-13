import React from "react";
import { Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Rating } from "@mui/material";
import "./Products.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  // return every product card
  return (
    <Col xs={12} md={4}>
      <Card sx={{ minWidth: "100%" }}>
        <CardActionArea>
          <CardMedia component='img' image={product.image} alt='jewelry' />
          <CardContent>
            <p className='product-title'>{product.title}</p>
            <p className='product-vendor'>{product.vendor}</p>
            <Rating name='read-only' value={product.rating} readOnly />
          </CardContent>
        </CardActionArea>
        <CardActions className='d-flex justify-content-between'>
          <p className='product-price'>${product.price}</p>
          <Link to={`/product/${product._id}`}>
            <Button variant='contained'>Order Now</Button>
          </Link>
        </CardActions>
      </Card>
    </Col>
  );
};

export default Product;
