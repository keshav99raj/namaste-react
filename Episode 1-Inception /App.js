import React from "react";

import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";


// const heading=React.createElement("h1",{id:"heading"},
// "This is the First React Page"
// )

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


/*
    How to create nested structure

    <div id="parent">
       <div id="child">
        <h1>
        
          
        </h1>
         </div>
    </div>

    
*/

// const hding1=React.createElement("h1",{},"I am an h1 Tag");
// const  hding2=React.createElement("h1",{},"I am an h2 Tag");
// const child=React.createElement("div",{id:"child"},[hding1,hding2]);
// const parent=React.createElement("div",{id:"parent"},child);
// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//i you want to sibline in an div or parent
//<div id="parent">
//     <div id="child">
//       <h1></h1>
//       <h1></h1>
//      </div>
// </div> 
//then you must pass as an array to third argument


// const heading=React.createElement("h1",{id:"heading"},"This is MY First React Page");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// const jsxHeading=<h1>This is my First React Page</h1>
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

const Heading=()=>{
    return <h1>This is my First React  Page</h1>
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)