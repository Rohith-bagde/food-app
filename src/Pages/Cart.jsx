import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalAmount } =
    useCart();
  const { user } = useAuth();

  if (!user)
    return (
      <h2 className="container glass">
        You must <Link to="/login">login</Link> to view your cart.
      </h2>
    );

  if (cart.length === 0)
    return <h2 className="container glass">Your cart is empty 🛒</h2>;

  return (
    <div className="container glass">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="menu-item glass">
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => decreaseQty(item.id)}
              className="filter-btn"
            >
              -
            </button>
            <span style={{ fontSize: "18px" }}>{item.qty}</span>
            <button
              onClick={() => increaseQty(item.id)}
              className="filter-btn"
            >
              +
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              className="filter-btn active"
              style={{ background: "red" }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3 style={{ marginTop: "20px" }}>Total: ₹{totalAmount}</h3>

      <button className="login-btn" style={{ marginTop: "20px" }}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
