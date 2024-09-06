import React from "react";
import Sidebar from "../components/Sidebar";

export default function Ap_Redeem() {
  return (
    <div className="flex flex-col md:flex-row overflow-auto mb-24">
      <Sidebar />
      <div className="flex-1 flex flex-col justify-start p-4 md:p-8 bg-white mt-10 md:mr-[250px]">
        <div className="w-full max-w-lg md:max-w-[450px] md:ml-auto md:mr-auto mt-24">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">
            Enter Your Voucher Number
          </h1>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter Voucher name"
              className="form-input w-full px-4 py-2 border border-gray-300 bg-gray-200"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-end md:space-x-4">
            <button className="bg-white-300 px-4 py-2 rounded text-black mb-4 md:mb-0">
              Cancel
            </button>
            <button className="bg-gray-500 px-4 py-2 rounded text-white">
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
