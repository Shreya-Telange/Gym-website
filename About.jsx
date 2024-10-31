import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [featuresInView, setFeaturesInView] = useState(false);

  const toggleMoreInfo = () => setIsVisible(!isVisible);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    });

    const featuresObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFeaturesInView(true);
        }
      });
    });

    const aboutSection = document.querySelector('.about-container');
    const featuresSection = document.querySelector('.gym-features');

    if (aboutSection) aboutObserver.observe(aboutSection);
    if (featuresSection) featuresObserver.observe(featuresSection);

    return () => {
      if (aboutSection) aboutObserver.unobserve(aboutSection);
      if (featuresSection) featuresObserver.unobserve(featuresSection);
    };
  }, []);

  return (
    <section className={`about ${isInView ? 'animate' : ''}`} id="about">
      <div className="about-container">
        <div className="about-image-slider">
          <img src="src/assets/env2.jpeg" alt="Gym Environment" />
        </div>

        <div className="about-content">
          <h2>About Our Gym</h2>
          <p>
            Our gym is dedicated to helping you achieve your fitness goals with state-of-the-art equipment and expert trainers.
          </p>

          <button onClick={toggleMoreInfo}>
            {isVisible ? 'Show Less' : 'Learn More'}
          </button>
          {isVisible && (
            <div className="more-info">
              <p>Join us and unlock your potential in a supportive community that encourages healthy living!</p>
              <p>Discover flexible memberships and exclusive workshops tailored to your needs.</p>
            </div>
          )}
        </div>
      </div>

      {/* Gym Features Section */}
      <div className={`gym-features ${featuresInView ? 'animate-features' : ''}`}>
        <h3>Gym Features</h3>
        <div className="features-grid">
          <div className="feature">
            <img src="src/assets/personal-training.avif" alt="Personal Training" />
            <p>Personal Training</p>
            <h3>State-of-the-art Equipment</h3>
                <p>Modern machines and tools designed to optimize your workout experience.</p>
              </div>
          </div>
          <div className="feature">
            <img src="src/assets/cardio.avif" alt="Cardio Equipment" />
            <p>Cardio Equipment</p>
            <h3>Expert Trainers</h3>
                <p>Certified trainers provide personalized plans that cater to individual needs and goals.</p>
          </div>
          <div className="feature">
            <img src="src/assets/Strength-training.avif" alt="Strength Training" />
            <p>Strength Training</p>
            <h3>Flexible Membership Plans</h3>
                <p>Affordable plans with special offers and discounts, available on a monthly or yearly basis.</p>
          </div>
          <div className="feature">
            <img src="src/assets/Group- Classes.avif" alt="Group Classes" />
            <p>Group Classes</p>
            <h3>Supportive Community</h3>
                <p>Join a community that motivates and inspires, with group classes and challenges.</p>
          </div>
        </div>
      
    </section>
  );
};

export default About;
