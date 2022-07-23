import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Slider.css";

function Slider() {
  // return home page slide here
  return (
    <div className='Slider'>
      <Carousel className='text-left carousel'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/D5hDkK3/slider3-6961d5ba-6657-44d0-924d-48cb84f24007-2000x.webp'
            alt='First slide'
          />
          <Carousel.Caption className='left'>
            <p className='slider-text subtitle'>AMAZING FROM JEWELRY</p>
            <h3 className='slider-title'>Dimond Rings Decoration</h3>
            <p className='slider-text'>Discount 20% Off For Ruby Members</p>
            <Button className='px-4 py-3 rounded-pill mt-4' variant='danger'>
              DISCOVER NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/wwbj9xq/slider-6804f5c5-7a22-4249-b276-44c59cc9c305-2000x.webp'
            alt='Second slide'
          />

          <Carousel.Caption className='right'>
            <p className='slider-text subtitle'>AMAZING FROM JEWELRY</p>
            <h3 className='slider-title'>Gold Rings Decoration</h3>
            <p className='slider-text'>Discount 20% Off For Ruby Members</p>
            <Button className='px-4 py-3 rounded-pill mt-4' variant='danger'>
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
