import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";

function UpdateOrder() {
  // Все хуки находятся в начале функции
  const params = useParams();
  const navigate = useNavigate();
  const { orders, updateOrder } = useContext(StoreContext);

  const orderParam = params.orderId || params.id;
  const id = Number(orderParam);

  const [form, setForm] = useState({
    customerName: "",
    address: "",
    status: "New"
  });
  const [errors, setErrors] = useState({ customerName: "", address: "" });
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const order = orders.find(o => o.id === id);
    if (order) {
      setForm({
        customerName: order.customerName || "",
        address: order.address || "",
        status: order.status || "New"
      });
    }
  }, [id, orders]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = (fieldValues = form) => {
    const temp = { ...errors };
    if ('customerName' in fieldValues)
      temp.customerName = fieldValues.customerName ? "" : "Введите имя клиента";
    if ('address' in fieldValues)
      temp.address = fieldValues.address ? "" : "Введите адрес";
    setErrors({ ...temp });
    return Object.values(temp).every(x => x === "");
  };

  const handleSave = () => {
    if (!validate()) return;

    updateOrder(id, form);
    setSuccess('Сохранено успешно!');
    setTimeout(() => navigate('/orders'), 800);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="page-wrapper">
          <h1>Update Order</h1>

          <label>Customer name</label>
          <input name="customerName" value={form.customerName} onChange={(e)=>{handleChange(e); validate({ ...form, [e.target.name]: e.target.value })}} />
          {errors.customerName && <div style={{ color: 'red' }}>{errors.customerName}</div>}

          <label>Address</label>
          <input name="address" value={form.address} onChange={(e)=>{handleChange(e); validate({ ...form, [e.target.name]: e.target.value })}} />
          {errors.address && <div style={{ color: 'red' }}>{errors.address}</div>}

          <label>Status</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option>New</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Completed</option>
          </select>

          <div style={{ marginTop: 12 }}>
            <button onClick={handleSave} disabled={!!errors.customerName || !!errors.address}>Save Changes</button>
            <button onClick={() => navigate(-1)} style={{ marginLeft: 8 }}>Cancel</button>
          </div>
          {success && <div style={{ color: 'green', marginTop: 8 }}>{success}</div>}
        </div>
      </div>
    </div>
  );
}

export default UpdateOrder;
