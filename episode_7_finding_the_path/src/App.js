import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";

import 'bootstrap/dist/css/bootstrap.min.css';





const AppLayout = () => {
  return (
    <div className="app">
      
      <Header/>
      <Outlet/>
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:
    [
      {
        path:"/",
        element:<Body/>
      }
      ,
     {
       path:"/about",
       element:<About/>
     },
     {
       path:"/contactus",
       element:<Contactus/>
     },
     {
       path:"/restuarants/:resId",
       element:<RestaurentMenu/>
     } 

    ],
    errorElement:<Error/>

  },
  
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
