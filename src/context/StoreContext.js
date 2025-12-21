import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [basket, setBasket] = useState(() => JSON.parse(localStorage.getItem('basket')) || []);
  const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem('orders')) || []);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const removeFromBasket = (id) => {
    setBasket(basket.filter(item => item.id !== id));
  };

  const createOrder = (customerData = {}) => {
    const newOrder = {
      id: Date.now(),
      items: basket,
      date: new Date().toLocaleString(),
      customerName: customerData.customerName || "",
      address: customerData.address || "",
      status: customerData.status || "New",
    };
    setOrders([...orders, newOrder]);
    setBasket([]);
  };

  const updateOrder = (orderId, updatedData) => {
    setOrders(prev => prev.map(order =>
      order.id === orderId ? { ...order, ...updatedData } : order
    ));
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  return (
    <StoreContext.Provider value={{
      basket,
      orders,
      addToBasket,
      removeFromBasket,
      createOrder,
      deleteOrder,
      updateOrder
    }}>
      {children}
    </StoreContext.Provider>
  );
}
