import React from 'react';

const ShoppingCart = ({ isOpen, onClose, cart, onRemoveItem, onUpdateQuantity }) => {
  if (!isOpen) return null;

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (parseFloat(item.price) * (item.quantity || 1));
    }, 0).toFixed(2);
  };

  const getItemCount = () => {
    return cart.reduce((count, item) => count + (item.quantity || 1), 0);
  };

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="cart-close" onClick={onClose}>&times;</button>
        </div>
        
        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty</p>
              <button className="continue-shopping" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p className="cart-item-price">${item.price}</p>
                    </div>
                    <div className="cart-item-quantity">
                      <button 
                        onClick={() => onUpdateQuantity(index, -1)}
                        className="quantity-btn"
                      >
                        −
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button 
                        onClick={() => onUpdateQuantity(index, 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="cart-item-remove"
                      onClick={() => onRemoveItem(index)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary">
                <div className="cart-total">
                  <span>Total ({getItemCount()} items):</span>
                  <span className="total-amount">${calculateTotal()}</span>
                </div>
                <button className="checkout-btn">Proceed to Checkout</button>
                <button className="continue-shopping" onClick={onClose}>
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
