import React, { useState, useEffect, useMemo } from "react";
import RestaurantCard from "./RestaurantCard";
import { fetchRestaurants, subscribeRestaurantUpdates } from "../services/fakeApi";

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
  const [onlyTopRated, setOnlyTopRated] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [connected, setConnected] = useState(false);

  const debouncedSearch = useDebounce(searchText, 300);

  useEffect(() => {
    let unsub = null;

    fetchRestaurants()
      .then((data) => {
        setRestaurants(data);
        setLoading(false);
        setConnected(true);

        unsub = subscribeRestaurantUpdates(data, (updatedList) => {
          setRestaurants(updatedList);
        });
      })
      .catch((err) => {
        setError(err.message || "Failed to load restaurants.");
        setLoading(false);
      });

    return () => {
      if (unsub) unsub();
    };
  }, []);

  const visible = useMemo(() => {
    let list = restaurants.slice();

    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase();
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.cuisines.join(", ").toLowerCase().includes(q)
      );
    }

    if (onlyTopRated) {
      list = list.filter((r) => parseFloat(r.avgRating) >= 4.2);
    }

    if (sortBy === "rating") {
      list.sort((a, b) => parseFloat(b.avgRating) - parseFloat(a.avgRating));
    } else if (sortBy === "delivery") {
      list.sort((a, b) => a.deliveryTime - b.deliveryTime);
    }

    return list;
  }, [restaurants, debouncedSearch, onlyTopRated, sortBy]);

  return (
    <section className="body">
      {/* Controls */}
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

      {/* Status line */}
      <div style={{ padding: "0 20px 8px", fontSize: 13 }}>
        {loading && <span>⏳ Loading restaurants from server...</span>}
        {!loading && error && (
          <span style={{ color: "#ff6b6b" }}>⚠ {error}</span>
        )}
        {!loading && !error && connected && (
          <span style={{ color: "#4ade80" }}>● Live connection active (fake backend)</span>
        )}
      </div>

      {/* Content */}
      <div className="res-container">
        {loading && (
          <div className="empty-state glass">Fetching data...</div>
        )}

        {!loading && !error && visible.length === 0 && (
          <div className="empty-state glass">No restaurants found.</div>
        )}

        {!loading &&
          !error &&
          visible.map((r) => <RestaurantCard key={r.id} resData={r} />)}
      </div>

      <footer className="live-note">
        Live updates: ratings & delivery times change every few seconds (simulated)
      </footer>
    </section>
  );
};

export default Body;
