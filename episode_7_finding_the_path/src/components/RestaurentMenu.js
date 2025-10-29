
import {useEffect,useState} from 'react';
import MenuList from './MenuCard/MenuList';
import { useParams } from 'react-router-dom';



const RestaurentMenu=()=>{

    const {resId}=useParams();
    
    const [resInfo, setResInfo]=useState([]);

    useEffect(()=>{
         fetchMenu(); 

    },[]);



    const fetchMenu=async()=>{
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&submitAction=ENTER`);

        const jsondata=await data.json();
        const resName=jsondata.data.cards[0].card.card.text;
        console.log(resName);

        setResInfo(jsondata);

        console.log(jsondata);
        


    }

    const resName=resInfo?.data?.cards[0]?.card?.card?.text;
    const arrData=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log("arrDatat",arrData);

    return(

        <div className="menu-description">
          
             <div className="res-name">
                <h2></h2>
             </div>
             <div className="res-description">
                <p></p>
                <p></p>
                <p></p>
             </div>

             <div className="menu-details">
               <h3>Menu</h3>
               <div className="menu-list">

                   { arrData && arrData.map((data,index)=>{
                      {/* if(!data) return null; */}
                      return( 
                        <MenuList key={index} list={data}/>
                      )
                   })

                   }

               </div>

             </div>
           
           
        </div>
    );
};

export default RestaurentMenu;