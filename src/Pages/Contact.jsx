import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);

  return (
    <div className="glass container" style={{ padding: "20px" }}>
      <h2>Contact Us</h2>

      <input
        className="search-input"
        placeholder="Write your message..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          setTyping(true);
          setTimeout(() => setTyping(false), 600);
        }}
      />

      {typing && <p style={{ color: "var(--accent)" }}>Typing...</p>}
    </div>
  );
};

export default Contact;
