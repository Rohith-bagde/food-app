import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <header className="header glass">
      <div className="header-left">
        <img className="logo" src={LOGO_URL} alt="logo" />
        <h1 className="app-title">Food Live</h1>
      </div>

      <nav className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>

        <button
          className="login-btn"
          onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
        >
          <Link to="/login">{btnName}</Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
