import { useState } from "react";

const Login = () => {
  const [status, setStatus] = useState("Not logged in");

  const handleLogin = () => {
    setStatus("Logging in...");

    setTimeout(() => {
      setStatus("Logged in successfully!");
    }, 1500);
  };

  return (
    <div className="glass container" style={{ padding: "20px" }}>
      <h2>Login</h2>

      <button className="filter-btn active" onClick={handleLogin}>
        Login Now
      </button>

      <p style={{ marginTop: "10px" }}>{status}</p>
    </div>
  );
};

export default Login;
