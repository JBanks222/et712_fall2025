import './App.css';
import { useState } from 'react';

// list of three messages
const message = [
  "I think, therefore I am",
  "I have a dream",
  "The only thing we have to fear is fear itself"
];

function App() {
  // set initial state
  const [counter, setCounter] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <h1 className='title'>Slice card by Jalen Banks</h1>
      <section className='slidewrapper'>
        <p className="msg">{message[counter-1]}</p>
        <div className='numberwrapper'>
          <div className={counter===1 ? "active" : ""}><p>1</p></div>
          <div className={counter===2 ? "active" : ""}><p>2</p></div>
          <div className={counter===3 ? "active" : ""}><p>3</p></div>
        </div>
      </section>

      <div className="btngroup">
        <button onClick={()=>{
          if(counter > 1) {
            setCounter(counter-1);
          } else {
            setCounter(message.length);
          }
        }}>Previous</button>
        <button onClick={()=>{
          if(counter < message.length) {
            setCounter(counter+1);
          } else {
            setCounter(1);
          }
        }}>Next</button>
      </div>

      {/* open and close */}
      <section className="info">
        <p>
          <b>Cat</b> (Felis catus), commonly referred to as domestic cat or house cat
          <button className="readmorebtn" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "Hide" : "Read More"}</button>
        </p>
      </section>
      <section>
        {isOpen && (
          <div className="readmore">
            <p>The cat, commonly referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
