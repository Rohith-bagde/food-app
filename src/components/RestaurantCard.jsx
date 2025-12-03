import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const { id, name, cloudinaryImageId, cuisines, avgRating, deliveryTime } =
    resData;

  return (
    <Link to={`/restaurant/${id}`} className="res-card glass">
      <img src={CDN_URL + cloudinaryImageId} alt={name} className="thumb" />

      <h3>{name}</h3>
      <p>{cuisines?.join(", ")}</p>

      <div className="res-meta">
        <span>⭐ {avgRating}</span>
        <span>{deliveryTime} mins</span>
      </div>
    </Link>
  );
};

export default RestaurantCard;
