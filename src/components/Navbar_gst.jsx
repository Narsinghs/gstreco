import React from "react";
import Image from "../assets/top.png";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar_gst() {
  return (
    <div className="bg-white p-4 transform scale-105 fixed top-0 h-24 left-0 w-full z-0 shadow-md">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Logo on the left side */}
        <div className="flex items-center">
          <img src={Image} alt="Logo" className="h-20 w-auto" />
        </div>
        
        {/* Help button on the right side */}
        <div className="flex items-center">
          <RouterLink to="/help">
            <button className="hover:font-bold text-lg">Help</button>
          </RouterLink>
        </div>
      </div>
    </div>
  );
}
