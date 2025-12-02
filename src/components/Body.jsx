import React, { useState, useEffect, useMemo } from "react";
import resObjInit from "../utils/localData";
import RestaurantCard from "./RestaurantCard";

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 300);
  const [onlyTopRated, setOnlyTopRated] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");

  useEffect(() => {
    setRestaurants(resObjInit);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setRestaurants((prev) => {
        const copy = prev.map((r) => ({ ...r }));
        if (copy.length === 0) return copy;
        const idx = Math.floor(Math.random() * copy.length);
        const delta = Math.random() * 0.2 - 0.1;
        const newRating = Math.max(
          2.5,
          Math.min(5, parseFloat(copy[idx].avgRating) + delta)
        );
        copy[idx].avgRating = newRating.toFixed(1);
        copy[idx].deliveryTime = Math.max(
          10,
          copy[idx].deliveryTime + Math.floor(Math.random() * 8 - 2)
        );
        copy[idx].liveUpdatedAt = new Date().toISOString();
        return copy;
      });
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const visible = useMemo(() => {
    let list = restaurants.slice();
    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase();
      list = list.filter(
        (r) =>
          (r.name && r.name.toLowerCase().includes(q)) ||
          (r.cuisines && r.cuisines.join(", ").toLowerCase().includes(q))
      );
    }
    if (onlyTopRated) {
      list = list.filter((r) => parseFloat(r.avgRating) >= 4.2);
    }
    if (sortBy === "rating")
      list.sort((a, b) => parseFloat(b.avgRating) - parseFloat(a.avgRating));
    if (sortBy === "delivery")
      list.sort((a, b) => a.deliveryTime - b.deliveryTime);
    return list;
  }, [restaurants, debouncedSearch, onlyTopRated, sortBy]);

  return (
    <section className="body container">
      <div className="controls glass">
        <div className="search">
          <input
            className="search-input"
            placeholder="Search restaurants or cuisines..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => setSearchText("")}
            title="Clear"
          >
            Clear
          </button>
        </div>

        <div className="filters">
          <button
            className={`filter-btn ${onlyTopRated ? "active" : ""}`}
            onClick={() => setOnlyTopRated((s) => !s)}
          >
            Top Rated
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="rating">Sort: Rating</option>
            <option value="delivery">Sort: Delivery Time</option>
          </select>
        </div>
      </div>

      <div className="res-container">
        {visible.length === 0 ? (
          <div className="empty-state glass">No restaurants found.</div>
        ) : (
          visible.map((r) => <RestaurantCard key={r.id} resData={r} />)
        )}
      </div>

      <footer className="live-note">
        Live updates: ratings and delivery times change every 5s (simulated)
      </footer>
    </section>
  );
};

export default Body;
