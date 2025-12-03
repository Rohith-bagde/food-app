import Header from "./components/Header";
import Body from "./components/Body";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import RestaurantPage from "./Pages/RestaurantPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
      </Routes>
    </>
  );
};

export default App;
