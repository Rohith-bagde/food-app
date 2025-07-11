import resObj from "../utils/localData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(resObj);


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const topRatedRestaurants = resObj.filter(restaurant => restaurant.avgRating >= 4.2);
                    setFilteredRestaurants(topRatedRestaurants);

                }
                }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.id} resData={restaurant} />;
                    })
                }

            </div>
        </div>
    );
}
export default Body;