import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const register = (data) => {
    localStorage.setItem("registeredUser", JSON.stringify(data));
    alert("Registration successful");
  };

  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!savedUser) {
      alert("No registered user");
      return false;
    }

    if (savedUser.email === email && savedUser.password === password) {
      setUser(savedUser);
      localStorage.setItem("user", JSON.stringify(savedUser));
      return true;
    }

    alert("Wrong email or password");
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
