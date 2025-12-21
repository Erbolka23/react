import React, { useState, useContext } from 'react';
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  // ✅ ВОТ ЭТО БЫЛО ПУСТО — ИЗ-ЗА ЭТОГО НЕЛЬЗЯ БЫЛО ВВОДИТЬ
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(form.email, form.password);

    if (success) {
      alert("Login successful");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <div className="page-wrapper">
        <h1 className="auth-title">Login</h1>

        <form onSubmit={handleSubmit} className="card auth-card">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
