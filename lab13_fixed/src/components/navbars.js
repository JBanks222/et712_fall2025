import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbars = function () {
  return (
    <>
      <nav className="navbar">
        <div className="qcclink">
          <a
            href="https://qcc.cuny.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            QCC
          </a>
        </div>

        <div className="btngroup">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About us</Link>
          <Link className="nav-link" to="/contact">Contact us</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbars;
