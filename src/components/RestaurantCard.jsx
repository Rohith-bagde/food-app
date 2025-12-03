import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ res }) => {
  const { id, name, cuisines, avgRating, cloudinaryImageId, costForTwo, deliveryTime } =
    res;

  return (
    <Link to={`/restaurant/${id}`} className="res-card-link">
      <div className="res-card glass">
        <div className="res-thumb">
          <img src={CDN_URL + cloudinaryImageId} alt={name} />
        </div>
        <div className="res-body">
          <h3 className="res-name">{name}</h3>
          <p className="res-cuisines">{cuisines.join(", ")}</p>
          <div className="res-meta">
            <span>⭐ {avgRating}</span>
            <span>{costForTwo}</span>
            <span>{deliveryTime} mins</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
