import React from "react";
import "../App.css";
import terenceImg from '../images/terence.png';

const Space = function() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Terence McKenna</h1>
      </header>
      <main className="page-content">
        <div className="content-card">
          <img 
            src={terenceImg} 
            alt="Terence McKenna" 
            className="page-image"
          />
          <div className="text-content">
            <h2>The Bard of Consciousness</h2>
            <p>
              Terence McKenna (1946-2000) was an American ethnobotanist, mystic, 
              psychonaut, lecturer, and author. He spoke and wrote about a variety of 
              subjects including psychedelic drugs, plant-based entheogens, shamanism, 
              metaphysics, alchemy, language, philosophy, culture, technology, and the 
              theoretical origins of human consciousness. Known for his charismatic 
              speaking style and ability to articulate complex ideas, Terence became one 
              of the leading authorities on the ontological foundations of shamanism and 
              the ethnopharmacology of spiritual transformation. His famous "Stoned Ape" 
              theory suggested that psilocybin mushrooms played a crucial role in human 
              evolution and the development of consciousness. He coined the term "Timewave 
              Zero" and explored ideas about novelty, consciousness, and the nature of 
              reality itself. His books include "Food of the Gods," "True Hallucinations," 
              and "The Invisible Landscape."
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Space;
