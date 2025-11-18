import './App.css';
import { useState } from 'react';
// const message
function App() {
  

  //counter
  let counter = 1;

  const [counter, setCounter] = useState(1)

  //set inistial state
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <h1 className='title'>Slice card by Jalen Banks</h1>
      <section className='slidewrapper'>
        <div className='numberwarppaer'>
          <div><p>1</p> </div>
          <div><p>2</p> </div>
          <div><p>3</p> </div>
        </div>
      </section>

    </div>
  );
}

export default App;
