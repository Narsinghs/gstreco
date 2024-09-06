import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-5 mt-auto z-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          Copyright @ 2024 The Outsource Pro. All rights reserved
        </p>
        <p className="text-center md:text-right">
          <a href="#" className="hover:underline">Privacy Policy</a> | 
          <a href="#" className="hover:underline"> Refund Policy</a> |
          <a href="#" className="hover:underline"> Terms and Conditions</a>
        </p>
      </div>
    </footer>
  );
}
