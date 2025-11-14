import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ name, image, price, inStock }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <div className={`product-status ${inStock ? 'in-stock' : 'out-of-stock'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
