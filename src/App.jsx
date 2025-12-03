import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantPage from "./Pages/RestaurantPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
