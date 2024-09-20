// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import { UserProvider } from './context/UserContext';
import { PizzaProvider } from './context/PizzaContext';
import { CartProvider } from './context/CartContext';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS


const root = ReactDOM.createRoot(document.getElementById('app')); // Usa createRoot para React 18

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <PizzaProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('app')
);