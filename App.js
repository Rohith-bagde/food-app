
import ReactDOM from "react-dom/client";

/*
Header 
-Logo
-Nav Items
Body
-Search
-Restaurant Container
- Restaurant Card
    -rating
    -name   
    -cuisines
    -cost for two
    -delivery time
Footer
-Links
-Contact
-Copyright
-Address
*/

const Header = () => {
  return (
    <div className="header">
        <div className="logo-container">
            <img 
            className="logo" 
            src="https://i.pinimg.com/736x/6c/8f/ac/6c8fac06bf158a157a3123d48635c582.jpg"
            />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  );
};

// RestaurantCard Component
const RestaurantCard = (props) => {
    const { resData } = props;

const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "lightgray" }}>
            <img
                className="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                alt="Restaurant Logo"
            />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>Rating: {avgRating}</h4>
            <h4>Cost for Two: {costForTwo}</h4>
            <h4>Delivery Time: {deliveryTime} mins</h4>
        </div>
    );
};

const resObj = [
  {
    name: "Theobroma",
    cuisines: ["Bakery", "Desserts"],
    avgRating: "4.5",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/ecaef7a3-9fb3-4d19-b83f-823a331d0e0d_426776.JPG",
    costForTwo: "₹500 for two",
    deliveryTime: 20
  },
  {
    name: "FreshMenu",
    cuisines: ["Continental", "Chinese"],
    avgRating: "4.4",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/0a17d048-49e5-4a38-8e25-9f441d12096d_747259.JPG",
    costForTwo: "₹600 for two",
    deliveryTime: 25
  },
  {
    name: "KFC",
    cuisines: ["Fast Food", "Burgers"],
    avgRating: "4.0",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
    costForTwo: "₹800 for two",
    deliveryTime: 30
  },
  {
    name: "McDonald's",
    cuisines: ["Burgers", "Beverages"],
    avgRating: "4.1",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/566bfcc0-c4f0-4d1b-816c-45405033b9fb_23678%20-%20Copy%20(10).jpg",
    costForTwo: "₹900 for two",
    deliveryTime: 35
  },
  {
    name: "Pizza Hut",
    cuisines: ["Pizza", "Pasta"],
    avgRating: "4.0",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/23396165-65be-4f2c-a2f8-d55de0497073_10576.JPG",
    costForTwo: "₹800 for two",
    deliveryTime: 30
  },
  {
    name: "Nandhana Palace",
    cuisines: ["Biryani", "Chinese"],
    avgRating: "4.4",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
    costForTwo: "₹700 for two",
    deliveryTime: 30
  },
  {
    name: "Truffles",
    cuisines: ["American", "Continental"],
    avgRating: "4.6",
    cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
    costForTwo: "₹1000 for two",
    deliveryTime: 35
  },
  {
    name: "Thalaiva biryani",
    cuisines: ["Biryani", "Muglai"],
    avgRating: "4.6",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/81ac3502-aafb-4d0e-a35c-a2586216df6e_1030806.JPG",
    costForTwo: "₹600 for two",
    deliveryTime: 30
  },
  {
    name: "Mehfil Biryani",
    cuisines: ["Andhra", "Biryani"],
    avgRating: "4.3",
    cloudinaryImageId: "xlr4ngepa5gxkugrsdbs",
    costForTwo: "₹500 for two",
    deliveryTime: 35
  },
  {
    name: "RBR biryani",
    cuisines: ["Biryani", "North Indian"],
    avgRating: "4.5",
    cloudinaryImageId: "jhdven0c7dkmypffoigf",
    costForTwo: "₹700 for two",
    deliveryTime: 30
  },
  {
    name: "Santhosh Dhaba",
    cuisines: ["South Indian", "Snacks"],
    avgRating: "4.2",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/27/cc3be295-7eb9-4bf6-8fff-263a31fe0873_660675.jpg",
    costForTwo: "₹400 for two",
    deliveryTime: 25
  },
  {
    name: "Behrouz Biryani",
    cuisines: ["Biryani", "North Indian"],
    avgRating: "4.3",
    cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
    costForTwo: "₹800 for two",
    deliveryTime: 30
  }
];

function Body() {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="res-container">
                {
                    resObj.map((restaurant) => {
                        return <RestaurantCard key={restaurant.name} resData={restaurant} />;
                    })
                }

            </div>
        </div>
    );
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);



