import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

const [btnName, setBtnName] = useState("Login");


  return (
    <div className="header">
        <div className="logo-container">
            <img 
            className="logo" 
            src={LOGO_URL}
            />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => { setBtnName(btnName === "Login" ? "Logout" : "Login") }}>{btnName}</button>
            </ul>
        </div>
    </div>
  );
};

export default Header;
// This code defines a Header component for a React application.
// The Header includes a logo and a navigation menu with links to Home, About, Contact, and Cart.