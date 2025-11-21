import React from "react";
import "../App.css";
import brothersImg from '../images/brothers.png';

const Home = function() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>The McKenna Brothers</h1>
      </header>
      <main className="page-content">
        <div className="content-card">
          <img 
            src={brothersImg} 
            alt="Terence and Dennis McKenna" 
            className="page-image"
          />
          <div className="text-content">
            <h2>Pioneers of Consciousness Exploration</h2>
            <p>
              Welcome to a tribute to Terence McKenna and Dennis McKenna, two brothers 
              who revolutionized our understanding of consciousness, psychedelics, and 
              ethnobotany. Terence McKenna (1946-2000) was a renowned lecturer, author, 
              and philosopher known for his exploration of psychedelic substances and 
              their role in human culture and consciousness. His brother Dennis McKenna 
              is an ethnopharmacologist and researcher who has spent his career studying 
              plant hallucinogens and their effects on the human brain. Together, they 
              journeyed to the Amazon in 1971, an experience that would shape their life's 
              work and influence generations of researchers, philosophers, and consciousness 
              explorers. Navigate through the pages to learn about their remarkable 
              contributions to science, philosophy, and human understanding.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
