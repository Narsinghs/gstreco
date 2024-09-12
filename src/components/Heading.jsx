import React from "react";
import Image from "../assets/background1.png";
import './heading.css'; // Import your custom CSS file
import { Link as RouterLink } from "react-router-dom";
export default function Heading() {
  return (
    <div
      className="relative flex bg-gray-100 items-center justify-center text-center py-16 sm:py-24 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${Image})` }}
    >
      {/* Overlay for a lighter effect */}
      <div className="absolute inset-0 bg-black opacity-30 z-[-1]"></div>
      
      <div className="relative max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] px-4 mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 typing-effect text-white">
          Streamline Your GST Compliance with Ease
        </h2>
        <div className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 text-white">
          Stay ahead of the curve with The Outsource Pro's expert GST Reconciliation services. We simplify 
          the complex process, ensuring your business remains compliant, accurate, and stress-free.
        </div>
        <div>
          <RouterLink to="/request-demo" >
            <button className="bg-black border-2 border-black px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 rounded text-white hover:bg-gray-800 transition-colors duration-300 ease-in-out">
            Request Demo
            </button>
          </RouterLink>
       </div>
      </div>
    </div>
  );
}
