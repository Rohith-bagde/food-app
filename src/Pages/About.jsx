import { useState, useEffect } from "react";

const About = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="glass container" style={{ padding: "20px" }}>
      <h2>About This App</h2>
      <p>This project shows real-time restaurant updates.</p>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default About;
