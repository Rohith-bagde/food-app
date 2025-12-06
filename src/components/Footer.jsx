import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="footer-content">

        {/* Logo + Title */}
        <div className="footer-brand">
          <img src={LOGO_URL} alt="FlavorFlow Logo" className="footer-logo" />
          <h2>FlavorFlow</h2>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>

      </div>

      <p className="footer-copy">© {new Date().getFullYear()} FlavorFlow — All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
