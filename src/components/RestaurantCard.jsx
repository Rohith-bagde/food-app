import React from "react";
import { CDN_URL } from "../utils/constants";
import { motion } from "framer-motion";

const safeImg = (id) => {
  if (!id) return "";
  return CDN_URL + id;
};

const cardVariants = {
  initial: { opacity: 0, y: 12, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
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
    <motion.article
      className="res-card glass"
      tabIndex={0}
      aria-label={`${name} — rating ${avgRating}`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.3 }}
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
    </motion.article>
  );
};

export default RestaurantCard;
