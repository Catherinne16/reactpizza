// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './pages/register';
import Login from './pages/login';
import MiniCart from './components/mini-cart';
import './index.css';

const App = () => {
  const [registeredUser, setRegisteredUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleRegister = (user) => {
    setRegisteredUser(user);
  };

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find(item => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const updateCart = (pizzaId, quantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === pizzaId ? { ...item, quantity: item.quantity + quantity } : item
        )
        .filter((item) => item.quantity > 0) // Filtrar elementos con cantidad 0
    );
  };

  const toggleCart = () => {
    setIsCartVisible(prev => !prev);
  };

  const closeCart = () => {
    setIsCartVisible(false);
  };

  return (
    <Router>
      <div>
        <Navbar toggleCart={toggleCart} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/login" element={<Login registeredUser={registeredUser} />} />
        </Routes>
        <Footer />
        <div className={`mini-cart-wrapper ${isCartVisible ? 'open' : ''}`}>
          <MiniCart cart={cart} updateCart={updateCart} onClose={closeCart} />
        </div>
      </div>
    </Router>
  );
};

export default App;
