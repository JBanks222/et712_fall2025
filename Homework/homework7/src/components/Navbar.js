import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = function () {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>Jalen Banks</h2>
        </div>

        <div className="nav-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/terence">Terence</Link>
          <Link className="nav-link" to="/dennis">Dennis</Link>
          <Link className="nav-link" to="/click-me">Click Me</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
