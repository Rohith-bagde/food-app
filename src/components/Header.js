import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {

const [btnName, setBtnName] = useState("Login");

useEffect(() => {
  console.log("useEffect called");
}, []); 


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
                <button className="login-btn" onClick={() => { 
                  setBtnName(btnName === "Login" ? "Logout" : "Login")
                  }}>{btnName}</button>

            </ul>
        </div>
    </div>
  );
};

export default Header;