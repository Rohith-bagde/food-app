import resObj from "../utils/localData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

const Body = () => {
    // useState to manage the filtered restaurants
    // Initially, set filteredRestaurants to the complete list of restaurants
    // so that all restaurants are displayed initially
    const [filteredRestaurants, setFilteredRestaurants] = useState(resObj);
    // useState is a React Hook that lets you add state to functional components
    // Here, filteredRestaurants is the state variable and setFilteredRestaurants is the function to update it

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // Filter restaurants with average rating >= 4.0
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