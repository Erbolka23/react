import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

function CreateOrder() {
  const { basket, createOrder } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleCreate = () => {
    createOrder();
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Create Order</h1>

        {basket.length === 0 ? (
          <p>Your basket is empty</p>
        ) : (
          <>
            <p>Items in your order: {basket.length}</p>
            <button onClick={handleCreate}>Confirm Order</button>
          </>
        )}
      </div>
    </div>
  );
}

export default CreateOrder;
