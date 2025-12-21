import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

function OrdersList() {
  const { orders, deleteOrder } = useContext(StoreContext);

  if (!orders || orders.length === 0) {
    return (
      <div className="container">
        <div className="page-wrapper">
          <h1>Orders</h1>
          <p>No orders yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-wrapper">
        <h1>Orders</h1>
        {orders.map(order => (
          <div key={order.id} className="card" style={{ marginBottom: 12 }}>
            <h3>Order #{order.id}</h3>
            <p>Customer: {order.customerName || '-'}</p>
            <p>Address: {order.address || '-'}</p>
            <p>Items: {order.items?.length || 0}</p>
            <p>Date: {order.date}</p>
            <p>Status: {order.status || 'New'}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link to={`/orders/edit/${order.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => deleteOrder(order.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersList;
