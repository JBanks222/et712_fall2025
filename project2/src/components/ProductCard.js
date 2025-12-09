import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">Name: {product.name}</h3>
        <div className="product-footer">
          <p className="product-price">Price: ${product.price}</p>
          <button 
            className="add-to-cart-btn" 
            onClick={() => onAddToCart(product)}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
