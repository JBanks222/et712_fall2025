import React from "react";
import img3 from '../images/img3.jpg';
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
            <img src={img3} alt="Card 1" />
          </div>

          <div className="card-vertical">
            <img src={img3} alt="Card 2" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
