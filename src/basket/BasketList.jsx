import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

function BasketList() {
  const { basket, removeFromBasket } = useContext(StoreContext);

  return (
    <div className="container">
      <div className="card">
        <div className="page-wrapper">
          <h1>Basket</h1>

          {basket.length === 0 && <p>Basket is empty</p>}

          {basket.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.title}</h3>
              <button onClick={() => removeFromBasket(item.id)}>
                Remove
              </button>
            </div>
          ))}

          {basket.length > 0 && (
            <button onClick={() => window.location.href = '/create-order'} style={{ marginTop: 20, padding: '10px 20px', fontSize: 16 }}>
              Create Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BasketList;
