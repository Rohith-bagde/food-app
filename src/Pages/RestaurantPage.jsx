import { useParams } from "react-router-dom";
import localData from "../utils/localData";
import { CDN_URL } from "../utils/constants";
import { useCart } from "../context/CartContext";

const fakeMenus = {
  "1": [
    { id: "1a", name: "Chocolate Truffle Cake Slice", price: 120 },
    { id: "1b", name: "Brownie Box", price: 250 }
  ],
  "2": [
    { id: "2a", name: "Chinese Combo", price: 220 },
    { id: "2b", name: "Continental Platter", price: 280 }
  ]
};

const defaultMenu = [
  { id: "m1", name: "Veg Biryani", price: 180 },
  { id: "m2", name: "Chicken Biryani", price: 220 },
  { id: "m3", name: "Family Combo", price: 450 }
];

const RestaurantPage = () => {
  const { id } = useParams();
  const restaurant = localData.find((r) => r.id === id);
  const { addToCart } = useCart();

  if (!restaurant)
    return <h2 className="container glass">Restaurant not found</h2>;

  const menu = fakeMenus[id] || defaultMenu;

  return (
    <div className="container glass">
      <h1>{restaurant.name}</h1>
      <p>{restaurant.cuisines.join(", ")}</p>
      <p>⭐ {restaurant.avgRating}</p>

      <img
        src={CDN_URL + restaurant.cloudinaryImageId}
        alt={restaurant.name}
        className="banner-img"
      />

      <h2>Menu</h2>

      {menu.map((item) => (
        <div className="menu-item glass" key={item.id}>
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <button
            className="add-btn"
            onClick={() =>
              addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                restaurantId: id
              })
            }
          >
            Add +
          </button>
        </div>
      ))}
    </div>
  );
};

export default RestaurantPage;
