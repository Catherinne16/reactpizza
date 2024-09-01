import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart'; 
import Pizza from './pages/pizza'; 
import Profile from './pages/profile'; 
import NotFound from './components/Nfound'; 
import MiniCart from './components/mini-cart';
import './index.css';

const App = () => {
  const [registeredUser, setRegisteredUser] = React.useState(null);
  const [cart, setCart] = React.useState([]);
  const [isCartVisible, setIsCartVisible] = React.useState(false);

  const handleRegister = (user) => {
    setRegisteredUser(user);
  };

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find(item => item.id === pizza.id);
      if (existingPizza) {
        alert("Se agrego pizza "+ pizza.name)
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
        .filter((item) => item.quantity > 0) 
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
        <Header />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/login" element={<Login registeredUser={registeredUser} />} />
          <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
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
