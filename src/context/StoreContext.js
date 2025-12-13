import { createContext, useState } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const removeFromBasket = (id) => {
    setBasket(basket.filter(item => item.id !== id));
  };

  const createOrder = () => {
    const newOrder = {
      id: Date.now(),
      items: basket,
      date: new Date().toLocaleString(),
    };
    setOrders([...orders, newOrder]);
    setBasket([]);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <StoreContext.Provider value={{
      basket,
      orders,
      addToBasket,
      removeFromBasket,
      createOrder,
      deleteOrder
    }}>
      {children}
    </StoreContext.Provider>
  );
}
