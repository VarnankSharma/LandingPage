import React from 'react';
import './Hero.css';
import background from '../asset/Back.jpeg';

const Hero = ({ handleGetStarted }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-content">
        <h1>Welcome to Zealth.AI</h1>
        <p>Get started with our AI patient care system today.</p>
        <button onClick={handleGetStarted} className="get-started-btn">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
