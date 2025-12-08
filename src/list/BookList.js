import { Link } from "react-router-dom";
import { books } from "../data/books";
import "./BookList.css"; // подключаем стили

function BookList() {
  return (
    <div className="book-list">
      <h1>Books</h1>

      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h2 className="book-title">{book.title}</h2>

          <p className="author">
            <strong>Author:</strong> {book.author}
          </p>

          <Link to={`/book/${book.id}`}>
            <button className="details-btn">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BookList;
