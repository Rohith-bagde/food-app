import resObj from "../utils/localData";

export function fetchRestaurants() {
  return new Promise((resolve, reject) => {
    const delay = 600 + Math.random() * 800; 
    setTimeout(() => {
    
      if (Math.random() < 0.1) {
        reject(new Error("Network error while fetching restaurants."));
      } else {

        resolve(resObj.map((r) => ({ ...r })));
      }
    }, delay);
  });
}

export function subscribeRestaurantUpdates(initialList, callback) {
  let current = initialList.map((r) => ({ ...r }));

  const id = setInterval(() => {
    if (!current.length) return;
    const idx = Math.floor(Math.random() * current.length);
    const copy = current.map((r) => ({ ...r }));

    const target = copy[idx];
    const delta = Math.random() * 0.2 - 0.1; 
    const newRating = Math.max(
      2.5,
      Math.min(5, parseFloat(target.avgRating) + delta)
    );
    target.avgRating = newRating.toFixed(1);
    target.deliveryTime = Math.max(
      10,
      target.deliveryTime + Math.floor(Math.random() * 8 - 2)
    );
    target.liveUpdatedAt = new Date().toISOString();

    current = copy;
    callback(copy);
  }, 5000);

  return () => clearInterval(id); 
}
