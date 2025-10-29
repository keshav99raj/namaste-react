import './MenuList.css';


import RestDec from './RestDec';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';

const MenuList=(props)=>{

    const{list}=props;
    // console.log("list is: ",list);

    const data=list?.card?.card?.itemCards;

    if(!data) return null;
    // console.log("Data is: ",data);

    return (
        

          <>
              {
                 data?.map((rest,index)=>{
                       return( 
                        <RestDec key={index} newData={rest}/>
                       )
                 })
              }
          </>

        
    )
}
export default MenuList;