import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/header.css';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const comparedProducts = useSelector(state => state.comparison?.items || []);
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">Магазин Электроники</Link>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Главная</Link>
        <Link to="/catalog" className="nav-link">Каталог</Link>
        <Link to="/about" className="nav-link">О нас</Link>
        <Link to="/contact" className="nav-link">Контакты</Link>
        <Link to="/comparison" className="nav-link">Сравнение товаров
          {comparedProducts.length > 0 && (
            <span className="comparison-count">({comparedProducts.length})</span>
          )}
        </Link>
      </nav>
      <div className="cart">
        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartItems.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
