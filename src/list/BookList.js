import React, { useState, useMemo } from 'react';
import { books } from '../data/books';
import { Link } from 'react-router-dom';
import './BookList.css';

function BookList() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState("");

  const genres = useMemo(() => ["All", ...new Set(books.map(b => b.genre))], []);

  const filteredBooks = books
    .filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "All" || book.genre === genre)
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="page">
      <div className="book-list">
        <div className="page-wrapper">
          <h1>Books</h1>

          <div className="controls" style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <input
              className="search"
              placeholder="Search book by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ flex: 1, padding: 8, borderRadius: 6 }}
            />

            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              {genres.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>

            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="">Sort</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <p>Найдено: {filteredBooks.length} книг</p>

          <div className="books-grid">
            {filteredBooks.map(book => (
              <div key={book.id} className="book-card">
                <img src={book.image} alt={book.title} />

                <h2>{book.title}</h2>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Genre:</strong> {book.genre} — <strong>Price:</strong> ${book.price}</p>

                <Link to={`/book/${book.id}`}>
                  <button>View Details</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookList;
