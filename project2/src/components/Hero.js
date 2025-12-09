import React from 'react';
import logo from '../assets/gingerbread-logo.svg';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
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
          <button className="hero-cta hero-cta-primary" onClick={scrollToProducts}>
            Shop Collection
          </button>
          <button className="hero-cta hero-cta-secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
