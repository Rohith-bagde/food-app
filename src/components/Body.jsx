import { useMemo, useState } from "react";
import localData from "../utils/localData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [onlyTopRated, setOnlyTopRated] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");

  const visibleRestaurants = useMemo(() => {
    let list = [...localData];

    if (searchText) {
      const q = searchText.toLowerCase();
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.cuisines.join(", ").toLowerCase().includes(q)
      );
    }

    if (onlyTopRated) {
      list = list.filter((r) => parseFloat(r.avgRating) >= 4.3);
    }

    if (sortBy === "rating") {
      list.sort(
        (a, b) => parseFloat(b.avgRating) - parseFloat(a.avgRating)
      );
    } else if (sortBy === "delivery") {
      list.sort((a, b) => a.deliveryTime - b.deliveryTime);
    }

    return list;
  }, [searchText, onlyTopRated, sortBy]);

  return (
    <section className="body">
      <div className="controls glass">
        <div className="search">
          <input
            className="search-input"
            placeholder="Search restaurants or cuisines..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={() => setSearchText("")}>
            Clear
          </button>
        </div>

        <div className="filters">
          <button
            className={`filter-btn ${onlyTopRated ? "active" : ""}`}
            onClick={() => setOnlyTopRated((prev) => !prev)}
          >
            ⭐ Top Rated
          </button>

          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="rating">Sort: Rating</option>
            <option value="delivery">Sort: Delivery Time</option>
          </select>
        </div>
      </div>

      <div className="res-container">
        {visibleRestaurants.map((r) => (
          <RestaurantCard key={r.id} res={r} />
        ))}
      </div>
    </section>
  );
};

export default Body;
