import { useParams } from "react-router-dom";
import localData from "../utils/localData";
import restaurantMenus from "../utils/restaurantMenus";
import { CDN_URL } from "../utils/constants";
import { useCart } from "../context/CartContext";

const RestaurantPage = () => {
  const { id } = useParams();
  const restaurant = localData.find((r) => r.id === id);
  const menu = restaurantMenus[id] || [];
  const { addItem } = useCart();

  if (!restaurant) {
    return <h2 className="container glass">Restaurant not found</h2>;
  }

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
            className="filter-btn active"
            onClick={() =>
              addItem({
                id: item.id,
                name: item.name,
                price: item.price,
                restaurantId: id,
                restaurantName: restaurant.name
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
