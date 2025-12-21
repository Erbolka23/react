import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

function CreateOrder() {
  const { basket, createOrder } = useContext(StoreContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ customerName: "", address: "" });
  const [errors, setErrors] = useState({ customerName: "", address: "" });
  const [success, setSuccess] = useState("");

  const validate = (fieldValues = formData) => {
    const temp = { ...errors };
    if ('customerName' in fieldValues)
      temp.customerName = fieldValues.customerName ? "" : "Введите имя клиента";
    if ('address' in fieldValues)
      temp.address = fieldValues.address ? "" : "Введите адрес";
    setErrors({ ...temp });
    return Object.values(temp).every(x => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    validate(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (basket.length === 0) {
      setErrors({ ...errors, address: errors.address, customerName: errors.customerName });
      return;
    }

    createOrder(formData);
    setSuccess("Сохранено успешно!");
    setTimeout(() => navigate('/orders'), 800);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="page-wrapper">
          <h1>Create Order</h1>

          {basket.length === 0 ? (
            <p>Your basket is empty</p>
          ) : (
            <>
              <h3>Items in your order: {basket.length}</h3>
              <ul>
                {basket.map(item => (
                  <li key={item.id}>{item.title} — ${item.price}</li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} noValidate>
                <label>Customer name</label>
                <input name="customerName" value={formData.customerName} onChange={handleChange} required />
                {errors.customerName && <div style={{ color: 'red' }}>{errors.customerName}</div>}

                <label>Address</label>
                <textarea name="address" value={formData.address} onChange={handleChange} required />
                {errors.address && <div style={{ color: 'red' }}>{errors.address}</div>}

                <div style={{ marginTop: 12 }}>
                  <button type="submit" disabled={!formData.customerName || !formData.address}>Create Order</button>
                </div>
                {success && <div style={{ color: 'green', marginTop: 8 }}>{success}</div>}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
