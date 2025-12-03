import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem, total } = useCart();

  if (cart.length === 0) {
    return <h2 className="container glass">Your cart is empty</h2>;
  }

  return (
    <div className="container glass">
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div className="menu-item glass" key={item.id}>
          <div>
            <h3>{item.name}</h3>
            {item.restaurantName && (
              <p style={{ opacity: 0.7 }}>{item.restaurantName}</p>
            )}
            <p>₹{item.price}</p>
          </div>

          <div className="cart-actions">
            <button className="filter-btn" onClick={() => decreaseQty(item.id)}>
              -
            </button>
            <span>{item.qty}</span>
            <button className="filter-btn" onClick={() => increaseQty(item.id)}>
              +
            </button>
            <button className="search-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2 style={{ marginTop: "16px" }}>Total: ₹{total}</h2>
    </div>
  );
};

export default Cart;
