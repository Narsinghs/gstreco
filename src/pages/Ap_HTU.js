import React from "react";
import Sidebar from "../components/Sidebar";
import Image from "../assets/black_background.jpg";


export default function Ap_HTU() {
  
  return (
 
    <div className="flex items-start md:mt-1 mt-24 mb-8 overflow-auto h-full">
      
      <Sidebar />
      <img
        src={Image}
        alt="How to use video"
        className="w-3/4 ml-auto mr-auto mt-24"
        style={{ maxWidth: "800px" }}
      />
    </div>
  );
}
