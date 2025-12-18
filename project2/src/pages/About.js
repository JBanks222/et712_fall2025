import React from 'react';

const About = () => {
  return (
    <main className="main-content">
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About Gingerbread Mon</h2>
          
          <div className="about-content">
            <div className="about-text">
              <h3>Our Story</h3>
              <p>
                Welcome to Gingerbread Mon, where tradition meets creativity! We've been crafting 
                delightful gingerbread creations for over a decade, bringing joy to families and 
                creating magical moments during the holiday season.
              </p>
              
              <h3>Our Mission</h3>
              <p>
                Our mission is to create the finest handcrafted gingerbread products using only 
                the best ingredients and time-honored recipes. Each piece is made with love, 
                care, and attention to detail.
              </p>
              
              <h3>What Makes Us Special</h3>
              <ul>
                <li>100% handcrafted with premium ingredients</li>
                <li>Traditional recipes passed down through generations</li>
                <li>Unique designs created by our talented bakers</li>
                <li>Perfect for gifts, decorations, or special occasions</li>
                <li>Made fresh to order with care and precision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
