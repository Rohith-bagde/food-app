import {useState, useEffect} from "react";
import resObj from "../utils/localData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resObj);

    useEffect (() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[2]?.data?.cards);

    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredData = listOfRestaurants.filter((res) => res.data.avgRating > 4);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {listOfRestaurants?.map((restaurant) =>
                   <RestaurantCard key={restaurant.id} resData={restaurant} />
               )}
            </div>
        </div>
    );
}
export default Body;

