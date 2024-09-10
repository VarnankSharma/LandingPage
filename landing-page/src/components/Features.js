import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing top-notch healthcare services to our patients.
          Our goal is to deliver personalized, compassionate, and effective medical care through our innovative platform.
        </p>
        
        <div className="features">
          <div className="feature-block">
            <div className="feature-icon">
              <i className="fas fa-user-md"></i> {/* Font Awesome Icon */}
            </div>
            <h3>Personalized Care</h3>
            <p>We offer care tailored to your specific needs, ensuring the best medical outcomes.</p>
          </div>

          <div className="feature-block">
            <div className="feature-icon">
              <i className="fas fa-calendar-alt"></i> {/* Font Awesome Icon */}
            </div>
            <h3>Convenient Appointments</h3>
            <p>Book appointments with just a few clicks and get reminders for your upcoming visits.</p>
          </div>

          <div className="feature-block">
            <div className="feature-icon">
              <i className="fas fa-stethoscope"></i> {/* Font Awesome Icon */}
            </div>
            <h3>Expert Healthcare Providers</h3>
            <p>Our team of qualified doctors and specialists are here to ensure you receive the best care possible.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
