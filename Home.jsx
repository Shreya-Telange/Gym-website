import React from 'react';
import Slider from 'react-slick';
import './Home.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  };

  return (
    <section className="home-slider">
      <Slider {...settings}>
        <div className="slide">
          <div className="slide-content">
            <h2 className="heading">ELITE PERSONAL TRAINING SERVICES</h2>
            <h1 className="main-heading">MAKE IT <span>SHAPE</span></h1>
            <button className="cta-btn">Join Us Now</button>
          </div>
          <img src="/src/assets/bg.jpeg" alt="Slide 1" className="slide-image" />
        </div>
        <div className="slide">
          <div className="slide-content">
            <h2 className="heading">TRANSFORM YOUR BODY</h2>
            <h1 className="main-heading">ACHIEVE <span>FITNESS</span></h1>
            <button className="cta-btn">Start Today</button>
          </div>
          <img src="/src/assets/env5.jpeg" alt="Slide 2" className="slide-image" />
        </div>
        <div className="slide">
          <div className="slide-content">
            <h2 className="heading">PERSONALIZED TRAINING</h2>
            <h1 className="main-heading">GET <span>RESULTS</span></h1>
            <button className="cta-btn">Sign Up Now</button>
          </div>
          <img src="/src/assets/env3.jpeg" alt="Slide 3" className="slide-image" />
        </div>
      </Slider>
    </section>
  );
};

export default Home;
