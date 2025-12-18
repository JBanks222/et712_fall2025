import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = ({ onAddToCart }) => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <main className="main-content">
      <section className="products-section" id="products">
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
  );
};

export default Products;
