import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load logged-in user (if any) from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (email, password) => {
    const saved = JSON.parse(localStorage.getItem("userDB"));
    if (!saved || saved.email !== email || saved.password !== password) {
      return { success: false, message: "Incorrect email or password" };
    }
    localStorage.setItem("user", JSON.stringify(saved));
    setUser(saved);
    return { success: true };
  };

  const register = (email, password) => {
    localStorage.setItem("userDB", JSON.stringify({ email, password }));
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
