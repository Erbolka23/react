import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";

function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <h1>Book not found</h1>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Description:</strong> {book.description}</p>

      <Link to="/">
        <button>Back to list</button>
      </Link>
    </div>
  );
}

export default BookDetail;
