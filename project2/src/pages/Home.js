import React, { useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = ({ onAddToCart }) => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className="home-page">
      <Hero />
      <section className="home-intro">
        <div className="container">
          <h2>Welcome to Gingerbread Mon</h2>
          <p>Discover our delicious collection of handcrafted gingerbread creations. From intricate houses to charming gingerbread people, each piece is baked with love and care.</p>
        </div>
      </section>
      
      <main className="main-content" id="products">
        <section className="products-section">
          <h2 className="section-title">Our Collection</h2>
          
          <div className="filter-container">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Products
            </button>
            <button 
              className={`filter-btn ${filter === 'houses' ? 'active' : ''}`}
              onClick={() => setFilter('houses')}
            >
              Gingerbread Houses
            </button>
            <button 
              className={`filter-btn ${filter === 'people' ? 'active' : ''}`}
              onClick={() => setFilter('people')}
            >
              Gingerbread People
            </button>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
