import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link cart-link">
              Cart
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
