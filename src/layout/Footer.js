// import React, {Component} from "react";

// /* Functional Component*/
// function Footer(){

//     return(
//         <div  className=" inset-x-0 bottom-0 bg-gradient-to-r from-purple-500 to-pink-500 py-2 text-center ">
//             <h1>Thanks for visiting - Global Bank</h1>
//             <p>All Rights Reserved to Global Bank</p>

            
//     <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
//         <li>
//             <a href="#" className="mr-4 px-2 text-purple-900 text-xl hover:font-bold md:mr-6 ">About</a>
//         </li>
//         <li>
//             <a href="#" className="mr-4 px-2 text-purple-900 text-xl hover:font-bold md:mr-6">Privacy Policy</a>
//         </li>
//         <li>
//             <a href="#" className="mr-4 px-2 text-purple-900 text-xl hover:font-bold md:mr-6">Licensing</a>
//         </li>
//         <li>
//             <a href="#" className=" px-2 text-purple-900 text-xl hover:font-bold">Contact</a>
//         </li>
//     </ul>
//         </div >

        
// /* <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
//     <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
//     </span>
//     <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
//         <li>
//             <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
//         </li>
//         <li>
//             <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
//         </li>
//         <li>
//             <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
//         </li>
//         <li>
//             <a href="#" className="hover:underline">Contact</a>
//         </li>
//     </ul>
//  </footer> */

//     );
// }

// export default Footer;
import React from "react";

const style = {
  
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "90px",
  width: "100%"
};

export default function Footer() {
  return (
    <div>
      <div className=" inset-x-0 bottom-0 bg-gradient-to-r from-purple-500 to-pink-500 py-2 text-center " style={style}> <h1>Thanks for visiting - Global Bank</h1>
             <p>All Rights Reserved to Global Bank</p></div>
    </div>
  );
}