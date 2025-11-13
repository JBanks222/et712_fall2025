import React from "react";
import aboutimg from '../images/about.jpg';
import contactimg from '../images/contact.png';
import { Link } from "react-router-dom";
import './App.css';

const Home = function() {
  return (
    <div>
      <header className="header">
        <h1 className="headertitle">Welcome to React Routing</h1>
      </header>
      <main className="maincontainer">
        <div className="carding">
          <Link to="/">
            <img src={aboutimg} alt="About" />
          </Link>
        </div>

        <div className="carding">
          <img src={contactimg} alt="Contact" />
        </div>
      </main>
    </div>
  );
};

export default Home;
