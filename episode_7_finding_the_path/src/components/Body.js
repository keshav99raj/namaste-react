import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import restaurantList from "../../utils/restarr";
import react from "react";
const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351926&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    if (!data.ok) {
      throw new Error("Network response was not ok");
    }

    const json = await data.json();
    const arr = await json.data.cards[4].card.card.gridElements.infoWithStyle
      .restaurants;
    console.log(arr);
    setFilterList(arr);
    setRestList(arr);
  };

  return restList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-filter">
        <div className="searchbtn">
          <input
            htmlFor="btn"
            value={searchText}
            onChange={(e) => {
              const data = e.target.value;
              setSearchText(data);
            }}
          />
          <button
            className="search-btn"
            id="btn"
            onClick={() => {
              const newList = restList.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterList(newList);
            }}
          >
            search
          </button>
        </div>
        <div className="btn-filter">
          <div
            className="top-res"
            onClick={() => {
              const newList = restList.filter((rest) => {
                // console.log(rest);
                return Number(rest.info.avgRating) > 4;
              });
              setFilterList(newList);
            }}
          >
            Top Restaurent
          </div>
        </div>
      </div>

      <div className="res-container">
        {/* <RestaurentCard resData={restaurantList[0]} /> */}
        {filterList.map((restaurant) => {
          return (
            <Link to={"/restuarants/" + restaurant.info.id}>
              {" "}
              <RestaurentCard key={restaurant.info.id} resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
