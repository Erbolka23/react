import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import BookList from "./list/BookList";
import BookDetail from "./list/BookDetail";

import BasketList from "./basket/BasketList";
import BasketDetail from "./basket/BasketDetail";
import CreateOrder from "./orders/CreateOrder";
import UpdateOrder from "./orders/UpdateOrder";


function App() {
  return (
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
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
