import Container from "@mui/material/Container";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  return (
    <Container className='my-md-5 my-3'>
      <Row>
        <Col xs={12} md={6}>
          <div className='category-img mt-3'>
            <Link to='/products'>
              <img
                src='https://i.ibb.co/Q92xwP7/home-6-cat-1-1024x10242x2.jpg'
                className='img-fluid cat-img'
                alt=''
              />
            </Link>
          </div>
          <div className='category-img mt-3'>
            <Link to='/products'>
              <img
                src='https://i.ibb.co/w414p1t/home-6-cat-2-1024x10242x2.jpg'
                className='img-fluid cat-img'
                alt=''
              />
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='category-img mt-3'>
            <Link to='/products'>
              <img
                src='https://i.ibb.co/G5bWfjy/home-6-cat-3-1024x10242x2.jpg'
                className='img-fluid cat-img'
                alt=''
              />
            </Link>
          </div>
          <div className='category-img mt-3'>
            <Link to='/products'>
              <img
                src='https://i.ibb.co/68hvWhC/home-6-cat-4-1024x10242x2.jpg'
                className='img-fluid cat-img'
                alt=''
              />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
