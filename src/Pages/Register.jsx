import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (!email || !password) return alert("Enter email & password");
    register(email, password);
    alert("Registered successfully! Please login.");
    navigate("/login");
  };

  return (
    <div className="form glass">
      <h2>Create Account</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button onClick={submit}>Register</button>
    </div>
  );
};

export default Register;
