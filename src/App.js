import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Books
import BookList from "./list/BookList";
import BookDetail from "./list/BookDetail";

// Basket & Orders
import BasketList from "./basket/BasketList";
import BasketDetail from "./basket/BasketDetail";
import CreateOrder from "./orders/CreateOrder";
import UpdateOrder from "./orders/UpdateOrder";

// Auth
import Login from "./auth/Login";
import Register from "./auth/Register";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />

        <Routes>
          {/* Books */}
          <Route path="/" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetail />} />

          {/* Basket */}
          <Route path="/basket" element={<BasketList />} />
          <Route path="/basket/:id" element={<BasketDetail />} />

          {/* Orders */}
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/update-order/:id" element={<UpdateOrder />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
