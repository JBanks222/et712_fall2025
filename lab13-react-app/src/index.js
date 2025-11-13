import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18+ rendering
import './index.css';  // Your styles
import App from './App';  // Your main App component
import { StrictMode } from 'react';  // Make sure to import StrictMode

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

