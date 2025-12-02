import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <header className="header glass">
      <div className="header-left">
        <img src={LOGO_URL} alt="logo" className="logo" />
        <h1 className="app-title">Food Live</h1>
      </div>

      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        <button
          className="login-btn"
          onClick={() =>
            setBtnName((s) => (s === "Login" ? "Logout" : "Login"))
          }
        >
          {btnName}
        </button>
      </nav>
    </header>
  );
};

export default Header;
