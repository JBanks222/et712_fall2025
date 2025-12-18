import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/gingerbread_cokkie_cart.svg';
import logo from '../assets/gingerbread-logo.svg';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="header sticky-header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Gingerbread Mon" className="logo" />
        </div>
        
        <nav className="header-navigation">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/products">Products</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="cart-icon" onClick={onCartClick}>
          <img src={cartIcon} alt="Cart" className="cart-image" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
