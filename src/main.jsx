// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import { UserProvider } from './context/UserContext';
import { PizzaProvider } from './context/PizzaContext';
import { CartProvider } from './context/CartContext';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS

const rootElement = document.getElementById('root'); // Verifica que esto coincida con tu HTML

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
      <React.StrictMode>
          <UserProvider> {/* Asegúrate de envolver App con UserProvider */}
              <PizzaProvider> {/* Añadir PizzaProvider */}
                  <CartProvider> {/* Añadir CartProvider */}
                      <App />
                  </CartProvider>
              </PizzaProvider>
          </UserProvider>
      </React.StrictMode>
  );
} else {
  console.error('No se pudo encontrar el contenedor "root". Asegúrate de que existe en tu HTML.');
}
