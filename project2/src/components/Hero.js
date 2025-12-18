import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/gingerbread-logo.svg';

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToProducts = () => {
    // If we're on the home page, scroll to products
    if (location.pathname === '/') {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Otherwise, navigate to products page
      navigate('/products');
    }
  };

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src={logo} alt="Gingerbread Mon" className="hero-logo" />
        <p className="hero-subtitle">
          Warm your heart with our artisanal gingerbread creations. 
          <br />
          Each piece lovingly crafted for your festive celebrations.
        </p>
        <div className="hero-buttons">
          <button className="hero-cta hero-cta-primary" onClick={goToProducts}>
            Shop Collection
          </button>
          <button className="hero-cta hero-cta-secondary" onClick={goToAbout}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
