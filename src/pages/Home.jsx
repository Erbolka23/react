import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="page-wrapper">
        <div className="hero-section">
        <h1>Добро пожаловать в Book Store</h1>
        <p>Лучшая коллекция книг для вас</p>
        <Link to="/books" className="cta-button">Смотреть книги</Link>
      </div>
      
        <div className="features">
        <div className="feature-card">
          <h3>📚 Большой выбор</h3>
          <p>Тысячи книг разных жанров</p>
        </div>
        <div className="feature-card">
          <h3>🛒 Удобная корзина</h3>
          <p>Легкое оформление заказов</p>
        </div>
        <div className="feature-card">
          <h3>⚡ Быстрая доставка</h3>
          <p>Доставим в кратчайшие сроки</p>
        </div>
        <div className="feature-card">
          <h3>💳 Безопасные платежи</h3>
          <p>Защищенные транзакции</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
