import './MenuList.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCircleStop } from '@fortawesome/free-solid-svg-icons';
import { URL_IMG } from '../../../utils/constant';

const RestDec = (props) => {

    const {newData}=props;
    // console.log("data is : ",newData);
    const final=newData?.card?.info;
    // console.log("final is:" ,final);
    
  return (
    <div className="main col-sm-6 mx-auto">
         
           
          <div className="content d-flex  col-sm-12 flex-row justify-content-around align-items-center">
               <div className="desc col-sm-8">
                  <div className="green-icon">
                   <FontAwesomeIcon icon={faCircleStop} style={{color: "#63E6BE",}} />
                  </div>
                  <h2>{final.name}</h2>
                  <h3>{"₹ "+final.price/100}</h3>
                  <div className="rating">
                    <span>
                      <FontAwesomeIcon icon={faStar} style={{color: "#26a269",}} />
                    </span>
                    <span className="text-success fw-bold">{" "+final.ratings.aggregatedRating.rating}</span>
                  </div>
                  <div className="dish-description">
                     <p className="fw-normal fs-normal">{final.description}</p>
                  </div>
               </div>
               <div className="img-btn col-sm-2 d-flex flex-column justify-content-between align-items-center">   
                  <img className="img-fluid rounded border col-12" src={URL_IMG+`${final.imageId}`} />
                  <button className=" btn btn-success col-10 mt-2">Add</button>
               </div>

         </div>
         <hr/>
    </div>
  )
};

export default RestDec;
