import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

function BasketList() {
  const { basket, removeFromBasket } = useContext(StoreContext);

  return (
    <div className="container">
      <div className="card">
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
          <Link to="/create-order">
            <button>Create Order</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default BasketList;
