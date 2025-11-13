import '/App.css';
import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbars';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='title'> React routing by Jalen Banks</h1>
   <BrowserRouter>
   <Routes>
    <Route path='/'          element={<Home />} />
     <Route path='/about'    element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    
   </Routes>
   </BrowserRouter>
   </>
  );
}
export default App;
