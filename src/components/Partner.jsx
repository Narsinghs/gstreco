import React from "react";
import Image from "../assets/black_background.jpg";

export default function Partner() {
  return (
    <div className="max-w-full bg-gray-100 overflow-x-hidden w-full p-[50px]">
      <div className="max-w-[1240px] mx-auto text-center">
        <div className="bg-gray-100 border inline-block  px-4 py-1 rounded-full mb-6">
          Trusted by
        </div>
        <h2 className="text-3xl font-bold mb-4">We proud to partner with</h2>

        <div className="flex justify-center items-center">
          <img
            src={Image}
            alt="Photo"
            className=" rounded-full h-12 w-12 mx-auto object-contain mt-10 mr-1"
          />
          <img
            src={Image}
            alt="Photo"
            className="  rounded-full h-12 w-12 mx-auto object-contain mt-10 mr-1"
          />
          <img
            src={Image}
            alt="Photo"
            className="  rounded-full h-12 w-12 mx-auto object-contain mt-10 mr-1"
          />
          <img
            src={Image}
            alt="Photo"
            className="  rounded-full h-12 w-12 mx-auto object-contain mt-10 mr-1"
          />
          <img
            src={Image}
            alt="Photo"
            className="  rounded-full h-12 w-12 mx-auto object-contain mt-10"
          />
        </div>
      </div>
    </div>
  );
}
