import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NotFound = function() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>404 - Page Not Found</h1>
      </header>
      <main className="page-content">
        <div className="content-card notfound-card">
          <div className="text-content">
            <h2>Oops! You've Drifted into Unknown Territory</h2>
            <p>
              It seems you've ventured into uncharted space! The page you're looking for 
              doesn't exist. Like an astronaut lost in the cosmos or a submarine in 
              unexplored waters, you've found yourself somewhere unexpected.
            </p>
            <Link to="/" className="home-button">
              Return to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
