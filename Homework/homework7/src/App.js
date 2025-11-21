import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Space from './components/Space';
import Ocean from './components/Ocean';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/terence' element={<Space />} />
          <Route path='/dennis' element={<Ocean />} />
          <Route path='/click-me' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
