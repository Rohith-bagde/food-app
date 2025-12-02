import { useState, useEffect } from "react";

const Cart = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const ref = setInterval(() => {
      setTotal((t) => t + Math.floor(Math.random() * 40));
    }, 3000);

    return () => clearInterval(ref);
  }, []);

  return (
    <div className="glass container" style={{ padding: "20px" }}>
      <h2>Cart</h2>
      <p>Real-time total updating: ₹{total}</p>
    </div>
  );
};

export default Cart;
