import React from "react";
import img3 from '../images/img3.jpg';
import { Link } from "react-router-dom";
import '../App.css';

const Home = function() {
  return (
    <div>
      <header className="header">
        <h1 className="headertitle">Welcome to React Routing</h1>
      </header>
      <main className="maincontainer">
        <section className="card-row">
          <div className="card-vertical">
            <Link to="/about" className="card-link">
              <img src={img3} alt="Card 1" />
            </Link>
          </div>

          <div className="card-vertical">
            <Link to="/about" className="card-link">
              <img src={img3} alt="Card 2" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
