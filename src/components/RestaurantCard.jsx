import React from "react";
import { CDN_URL } from "../utils/constants";

const safeImg = (id) => {
  if (!id) return "";
  return id.startsWith("http") || id.includes("/")
    ? CDN_URL + id
    : CDN_URL + id;
};

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    avgRating = "-",
    costForTwo = "",
    deliveryTime = "",
    liveUpdatedAt,
  } = resData || {};
  const imgSrc = safeImg(cloudinaryImageId);

  return (
    <article
      className="res-card glass"
      tabIndex={0}
      aria-label={`${name} — rating ${avgRating}`}
    >
      <div className="res-thumb">
        {imgSrc ? (
          <img src={imgSrc} alt={`${name} image`} />
        ) : (
          <div
            style={{
              height: 160,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No image
          </div>
        )}
      </div>

      <div className="res-body">
        <h3 className="res-name">{name}</h3>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <div className="res-meta">
          <span className="rating">⭐ {avgRating}</span>
          <span className="cost">{costForTwo}</span>
          <span className="time">{deliveryTime}m</span>
        </div>
        {liveUpdatedAt && (
          <small className="live-ts">
            Updated: {new Date(liveUpdatedAt).toLocaleTimeString()}
          </small>
        )}
      </div>
    </article>
  );
};

export default RestaurantCard;
