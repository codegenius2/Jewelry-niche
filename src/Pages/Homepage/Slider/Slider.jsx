import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./Slider.css";

function Slider() {
  // return home page slide here
  return (
    <div className='Slider'>
      <Carousel className='text-left carousel'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/zsPV0fq/sider4-2.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <p className='slider-text'>AMAZING FROM JEWELRY</p>
            <h3 className='slider-title'>Dimond Rings Decoration</h3>
            <p className='slider-text'>Discount 20% Off For Ruby Members</p>
            <Button
              className='px-4 py-3 rounded-pill mt-4'
              variant='outline-danger'>
              DISCOVER NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/XWwfwQh/slider4-1.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <p className='slider-text'>AMAZING FROM JEWELRY</p>
            <h3 className='slider-title'>Gold Rings Decoration</h3>
            <p className='slider-text'>Discount 20% Off For Ruby Members</p>
            <Button
              className='px-4 py-3 rounded-pill mt-4'
              variant='outline-danger'>
              DISCOVER NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/j3Jm0mn/jewel1-712212f2-13a9-4677-a2f1-28cbab658c3c2.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <p className='slider-text'>AMAZING FROM JEWELRY</p>
            <h3 className='slider-title'>Discover Night Paris</h3>
            <button className='btn-regular'>BOOK YOUR TRAVEL</button>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

export default Slider;
