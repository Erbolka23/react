import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./list/BookList";
import BookDetail from "./list/BookDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
