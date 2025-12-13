import { Link } from "react-router-dom";
import { books } from "../data/books";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "./BookList.css";

function BookList() {
  const { addToBasket } = useContext(StoreContext);

  return (
    <div className="book-list">
      <h1>Books</h1>

      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h2 className="book-title">{book.title}</h2>

          <p className="author">
            <strong>Author:</strong> {book.author}
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <Link to={`/book/${book.id}`}>
              <button className="details-btn">View Details</button>
            </Link>

            <button
              className="details-btn"
              onClick={() => addToBasket(book)}
            >
              Add to Basket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
