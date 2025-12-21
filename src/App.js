import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Pages
import BookList from "./list/BookList";
import BookDetail from "./list/BookDetail";
import BasketList from "./basket/BasketList";
import BasketDetail from "./basket/BasketDetail";
import CreateOrder from "./orders/CreateOrder";
import OrdersList from "./orders/OrdersList";
import UpdateOrder from "./orders/UpdateOrder";
import Login from "./auth/Login";
import Register from "./auth/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Context
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="app-container">
            <Header />

            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<BookList />} />
                <Route path="/book/:id" element={<BookDetail />} />

                <Route path="/basket" element={<BasketList />} />
                <Route path="/basket/:id" element={<BasketDetail />} />

                <Route path="/create-order" element={<CreateOrder />} />
                <Route path="/update-order/:id" element={<UpdateOrder />} />
                <Route path="/orders/edit/:orderId" element={<UpdateOrder />} />
                <Route path="/orders" element={<OrdersList />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;