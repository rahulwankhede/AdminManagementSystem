import React from "react";
// import { Link } from "react-router-dom";
import logo from "../images/Globallogo.png"
const Header=()=>{
    return (
        // bg-gray-400 for the body
        <div className=" flex items-center bg-gradient-to-r from-purple-500 to-pink-500 py-2 text-center" >
           <img src={logo} alt="Logo" /> 
        <h3 className="align-baseline sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 hover:text-cyan-400">
            Global Bank
        </h3>   
        
        
        </div>
    );
}
export default Header;
