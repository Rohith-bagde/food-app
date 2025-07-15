import resObj from "../utils/localData";
import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const data = await response.json();
            setFilteredRestaurants(data);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    };
    const fetchRestaurants = () => {
        // Simulating an API call with local data
        setFilteredRestaurants(resObj);
    };

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-input" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={() => {
                        console.log("Searching for:", searchText);
                        // Filter the restaurants based on the search text
                        const searchedRestaurants = resObj.filter(restaurant => restaurant.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(searchedRestaurants);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const topRatedRestaurants = resObj.filter(restaurant => restaurant.avgRating >= 4.2);
                    setFilteredRestaurants(topRatedRestaurants);

                }
                }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.id} resData={restaurant} />;
                    })
                }

            </div>
        </div>
    );
}
export default Body;