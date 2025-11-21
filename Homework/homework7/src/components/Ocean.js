import React from "react";
import "../App.css";
import dennisImg from '../images/Dennis.png';

const Ocean = function() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Dennis McKenna</h1>
      </header>
      <main className="page-content">
        <div className="content-card">
          <img 
            src={dennisImg} 
            alt="Dennis McKenna" 
            className="page-image"
          />
          <div className="text-content">
            <h2>The Scientific Explorer</h2>
            <p>
              Dennis McKenna is an American ethnopharmacologist, research pharmacognosist, 
              lecturer, and author. He has conducted extensive research in ethnopharmacology 
              and plant hallucinogens for over four decades. Dennis earned his doctorate in 
              botanical sciences from the University of British Columbia and has been a 
              research associate at the Institute of Ethnomedicine and a founding board 
              member of the Heffter Research Institute. Unlike his brother Terence's more 
              philosophical approach, Dennis brings rigorous scientific methodology to the 
              study of psychedelic compounds and their effects on human consciousness. His 
              research focuses on the ethnopharmacology of Amazonian psychoactive plants, 
              particularly ayahuasca and DMT. Dennis continues to lecture internationally 
              and has authored numerous scientific papers and books including "The Brotherhood 
              of the Screaming Abyss," which chronicles his adventures with his brother Terence 
              in the Amazon and their lifelong exploration of consciousness.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Ocean;
