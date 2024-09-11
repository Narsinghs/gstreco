import React from "react";
import fortunaImage from "../assets/Fortunalogo.png";
import DccImage from "../assets/DCC logo.png";
import IQPCImage from "../assets/IQPC-logo.png";

export default function Partner() {
  return (
    <div className="max-w-full bg-gray-100 overflow-x-hidden w-full py-[50px]">
      <div className="max-w-[1240px] mx-auto text-center">
        <div className="bg-gray-100 border inline-block px-4 py-1 rounded-full mb-6">
          Trusted by
        </div>
        <h2 className="text-3xl font-bold mb-4">We are proud to partner with</h2>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
          <img
            src={fortunaImage}
            alt="Fortuna"
            className="rounded-full h-10 w-40 object-contain"
          />
          <img
            src={DccImage}
            alt="DCC"
            className="rounded-full h-10 w-40 object-contain"
          />
          <img
            src={IQPCImage}
            alt="IQPC"
            className="rounded-full h-10 w-40 object-contain"
          />
          {/* Uncomment and add additional logos as needed */}
          {/* <img
            src={Image}
            alt="Additional Logo"
            className="rounded-full h-16 w-16 object-contain"
          />
          <img
            src={Image}
            alt="Additional Logo"
            className="rounded-full h-16 w-16 object-contain"
          /> */}
        </div>
      </div>
    </div>
  );
}
