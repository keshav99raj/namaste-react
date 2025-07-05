import RestaurentCard from "./RestaurentCard";
import { useState } from "react";;


import restaurantList from "../../utils/restarr";
import react from "react";
const Body = () => {

const [restList,setRestList]=useState(restaurantList);

  return (
    <div className="body">
      <div className="btn-filter">
        <div className="top-res" onClick={()=>{

          const newList=restaurantList.filter(
            (rest)=>{
            return Number(rest.data.avgRating)>4;
                })
                setRestList(newList);
        }}>Top Restaurent</div>
      </div>
      
      <div className="res-container">
        {/* <RestaurentCard resData={restaurantList[0]} /> */}
        {
          restList.map((restaurant)=>{
              return (
                <RestaurentCard key={restaurant.data.id} resData={restaurant}/>
              )
          })
        }
       
       

      </div>
    </div>
  );
};
export default Body;