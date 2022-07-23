import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className='pb-md-5 py-3 footer-area'>
      <Container>
        <Row className='g-4'>
          <Col xs={12} md={3}>
            <p className='footer-title'>ABOUT US</p>
            <p className='footer-text'>
              Jewelry is always a great gift, whether it is for your wife,
              friend, or yourself. All Ritani jewelry is crafted with the
              highest quality precious metals and gemstones so you can be
              certain of its quality. Looking for diamond jewelry that is more
              affordable? Browse our collection of lab-grown diamond earrings
              and pendants. Lab-grown diamonds are identical to earth-grown
              diamonds but can cost up to 30% less.
            </p>
            <Link to='/products'>
              <button className='btn btn-regular px-3 mt-md-4'>
                EXPLORE NOW
              </button>
            </Link>
          </Col>
          <Col xs={12} md={3}>
            <p className='footer-title'>INFORMATION</p>
            <div className='footer-list'>
              <Link to='/'>Career</Link>
              <Link to='/'>About Us</Link>
              <Link to='/'>FAQ</Link>
              <Link to='/'>Contact us</Link>
              <Link to='/'>Privacy Policy</Link>
              <Link to='/'>Pulmonary</Link>
              <Link to='/'>Customer Portal</Link>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <p className='footer-title'>NEWS & TIPS</p>
            <p className='footer-text'>
              <Link to='/'>INCREASE CUSTOMER RETENTION</Link>
              <p>02th Dec 2021</p>
            </p>
            <hr />
            <p className='footer-text'>
              <Link to='/'>Hospitality Managements </Link>
              <p>03th Dec 2021</p>
            </p>
            <hr />
            <p className='footer-text'>
              <Link to='/'>Weekdays in South America</Link>
              <p>03th Dec 2021</p>
            </p>
            <hr />
          </Col>
          <Col xs={12} md={3}>
            <p className='footer-title'>CONTACT INFO</p>
            <p className='footer-text'>
              250 Main Street, Brooklyn, NY 52143, US
            </p>
            <p className='footer-text'>
              <i className='fas fa-phone-alt ico'></i>
              Tell <span className='number'>(800)-456-789</span>
            </p>
            <p className='footer-text'>
              <i className='fas fa-envelope ico'></i>
              Email <span className='number'> info@example.com</span>
            </p>
            <p className='footer-text'>
              <i className='fas fa-globe-asia ico'></i>
              Website <span className='number'> tripar.com</span>
            </p>
            <p className='footer-direction mx-4'>
              Get Map Direction{" "}
              <i className='fas fa-long-arrow-alt-right ico'></i>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
