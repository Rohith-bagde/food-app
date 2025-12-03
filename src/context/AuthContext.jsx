import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("authUser");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("authUser", JSON.stringify(user));
    else localStorage.removeItem("authUser");
  }, [user]);

  const register = ({ name, email, password }) => {
    const data = { name, email, password };
    localStorage.setItem("authUserData", JSON.stringify(data));
    setUser({ name, email });
    return { ok: true, message: "Registered successfully" };
  };

  const login = ({ email, password }) => {
    const stored = localStorage.getItem("authUserData");
    if (!stored) {
      return { ok: false, message: "No user registered. Please register." };
    }
    const data = JSON.parse(stored);
    if (data.email === email && data.password === password) {
      setUser({ name: data.name, email: data.email });
      return { ok: true, message: "Login successful" };
    }
    return { ok: false, message: "Invalid credentials" };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
