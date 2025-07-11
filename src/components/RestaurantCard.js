import { CDN_URL } from "../utils/constants";

// RestaurantCard Component
const RestaurantCard = (props) => {
    const { resData } = props;

const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "lightgray" }}>
            <img
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt="Restaurant Logo"
            />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>Rating: {avgRating}</h4>
            <h4>Cost for Two: {costForTwo}</h4>
            <h4>Delivery Time: {deliveryTime} mins</h4>
        </div>
    );
};

export default RestaurantCard;
// Sample restaurant data