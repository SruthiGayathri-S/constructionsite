import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div 
          className="carousel-image d-flex align-items-center justify-content-center"
          style={{
            height: '500px',
            background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
         <Carousel.Caption
  style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bottom: 'auto',
    textAlign: 'center',
    width:  '100%'
  }}
>
  <h1>Professional Construction Services</h1>
  <p>Building your dreams with quality and excellence</p>
</Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div 
          className="carousel-image d-flex align-items-center justify-content-center"
          style={{
            height: '500px',
            background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2031&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
           <Carousel.Caption
  style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bottom: 'auto',
    textAlign: 'center',
    width:  '100%'
  }}
>
            <h1>Expert Team & Quality Work</h1>
            <p>Over a year of construction excellence</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div 
          className="carousel-image d-flex align-items-center justify-content-center"
          style={{
            height: '500px',
            background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
           <Carousel.Caption
  style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bottom: 'auto',
    textAlign: 'center',
    width:  '100%'
  }}
>
            <h1>Modern Solutions</h1>
            <p><center>Innovative construction for the future</center></p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
