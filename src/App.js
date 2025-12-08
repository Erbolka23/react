import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./list/BookList";
import BookDetail from "./list/BookDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
