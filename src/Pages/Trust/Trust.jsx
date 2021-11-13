import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Trust.css";

const Trust = () => {
  return (
    <div className='mt-5 mb-3 text-center'>
      <Row className='g-5 mx-3'>
        <Col xs={12} md={3}>
          <div className='trust-img'>
            <img
              src='https://i.ibb.co/qjtxYzn/frree.png'
              alt=''
              className='trust-logo'
            />
          </div>
          <p className='trust-title'>FREE SHIPPING</p>
          <p className='trust-text px-2'>
            Starting from 50 EUR cart (DE) 1-3 Days Shipping within Germany
          </p>
        </Col>
        <Col xs={12} md={3}>
          <div className='trust-img'>
            <img
              src='https://i.ibb.co/VH0M8Fj/1180918.png'
              alt=''
              className='trust-logo'
            />
          </div>
          <p className='trust-title'>PURCHASE SAFELY</p>
          <p className='trust-text'>
            Certified Online Shop Encrypted Data Transmission Quality Seal and
            Buyer Protection
          </p>
        </Col>
        <Col xs={12} md={3}>
          <div className='trust-img'>
            <img
              src='https://i.ibb.co/dpfV8fn/412954.png'
              alt=''
              className='trust-logo'
            />
          </div>
          <p className='trust-title'>PERSONAL SERVICE</p>
          <p className='trust-text'>
            Mo - Fr 9am - 5pm
            <br />
            +49 641 794975220
            <br />
            info@thejewellershop.com
          </p>
        </Col>
        <Col xs={12} md={3}>
          <div className='trust-img'>
            <img
              src='https://i.ibb.co/fNykJt0/747736.png'
              alt=''
              className='trust-logo'
            />
          </div>
          <p className='trust-title'>HUGE SELECTION</p>
          <p className='trust-text'>
            More than 16.000 Items More than 20 Top Brands Personalised Items
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Trust;
