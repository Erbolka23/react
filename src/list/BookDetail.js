import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { books } from '../data/books';
import { StoreContext } from '../context';
import './BookDetail.css';

function BookDetail() {
  const { id } = useParams();
  const bookId = Number(id);
  const book = books.find(b => b.id === bookId);
  const { addToBasket } = useContext(StoreContext);
  const [added, setAdded] = useState(false);

  if (!book) {
    return (
      <div className="book-list">
        <div className="page-wrapper">
          <h2>Книга не найдена</h2>
          <Link to="/books">Вернуться к списку книг</Link>
        </div>
      </div>
    );
  }

  const handleAddToBasket = () => {
    addToBasket(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="book-list">
      <div className="page-wrapper">
        <Link to="/books" className="back-link">← Back to Books</Link>
        
        <div className="book-detail-card">
          <div className="book-image-section">
            <img src={book.image} alt={book.title} className="book-detail-img" />
          </div>
          
          <div className="book-info-section">
            <h1 className="book-title">{book.title}</h1>
            <p className="author">by <strong>{book.author}</strong></p>
            
            <div className="book-meta">
              <span className="genre-badge">{book.genre}</span>
              <span className="price-tag">${book.price}</span>
            </div>
            
            <p className="description">{book.description}</p>
            
            <div className="button-group">
              <button className="add-basket-btn" onClick={handleAddToBasket} disabled={added}>
                {added ? '✓ Added to Basket' : '🛒 Add to Basket'}
              </button>
              <Link to="/books"><button className="back-btn">Back</button></Link>
            </div>
            
            {added && <div className="success-msg">Added to basket successfully!</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
