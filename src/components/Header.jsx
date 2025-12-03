import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header glass">
      <div className="header-left">
        <img src={LOGO_URL} className="logo" alt="logo" />
        <h2>Food Live</h2>
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
            <Link to="/cart">Cart</Link>
          </li>
        </ul>

        {user ? (
          <button className="login-btn" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
