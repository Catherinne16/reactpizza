import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './pages/register';
import Login from './pages/login';
import Cart from './pages/Cart';
import Pizza from './pages/pizza';
import Profile from './pages/profile';
import NotFound from './components/Nfound';
import MiniCart from './components/mini-cart';
import { PizzaProvider } from './context/PizzaContext';
import { CartProvider } from './context/CartContext';
import './index.css';

const App = () => {
  const [isCartVisible, setIsCartVisible] = React.useState(false);

  const toggleCart = () => {
    setIsCartVisible(prev => !prev);
  };

  const closeCart = () => {
    setIsCartVisible(false);
  };

  return (
    <Router>
      <PizzaProvider>
        <CartProvider>
          <div>
            <Navbar toggleCart={toggleCart} />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/p001" element={<Pizza />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
            <Footer />
            <div className={`mini-cart-wrapper ${isCartVisible ? 'open' : ''}`}>
              <MiniCart onClose={closeCart} />
            </div>
          </div>
        </CartProvider>
      </PizzaProvider>
    </Router>
  );
};



export default App;
