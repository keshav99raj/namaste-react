import RestaurentCard from "./RestaurentCard";
import { useState ,useEffect} from "react";;


import restaurantList from "../../utils/restarr";
import react from "react";
const Body = () => {

const [restList,setRestList]=useState([]);

useEffect(()=>{
  fetchData();
},[])
const fetchData=async()=>{
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351926&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

  if (!data.ok) {
        throw new Error('Network response was not ok');
      }

  const json=await data.json();
  const arr= await json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
console.log(arr);
setRestList(arr);
    }


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