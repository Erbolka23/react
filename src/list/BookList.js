import { Link } from "react-router-dom";
import { books } from "../data/books";

function BookList() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Books</h1>

      {books.map((book) => (
        <div
          key={book.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>

          <Link to={`/book/${book.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BookList;
