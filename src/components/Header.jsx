import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      navigate("/login");
    }
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <header className="header glass">
      <div className="header-left">
        <img src={LOGO_URL} alt="logo" className="logo" />
        <h2 className="app-title">Food Live</h2>
      </div>

      <nav className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartCount})</Link>
          </li>
        </ul>
        <button className="login-btn" onClick={handleAuthClick}>
          {user ? "Logout" : "Login"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
