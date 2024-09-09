// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; 
import { PizzaProvider } from './context/PizzaContext';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('app'));root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

ReactDOM.render(
  <React.StrictMode>
    <PizzaProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PizzaProvider>
  </React.StrictMode>,
  document.getElementById('app')
);