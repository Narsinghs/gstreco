import React from "react";
import Sidebar from "../components/Sidebar";
import StripeCheckout from "react-stripe-checkout";

export default function Ap_Buy() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex flex-col justify-start items-center px-4 md:px-24 bg-white mt-24 md:ml-[250px] md:mt-12 ">
        <div className="w-full max-w-lg md:max-w-[1000px]">
          <h1 className="text-2xl font-semibold mb-4 ">Pay with</h1>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <button className="w-full md:w-auto px-4 py-2 border hover:bg-gray-500 rounded-full">
              Credit card
            </button>
            <button className="w-full md:w-auto px-4 py-2 border hover:bg-gray-500 rounded-full">
              Google Pay
            </button>
            <button className="w-full md:w-auto px-4 py-2 border hover:bg-gray-500 rounded-full">
              Paypal
            </button>
          </div>
          <form className="w-full">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Card number"
                className="form-input w-full px-4 py-2 border bg-gray-200"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Card holder"
                className="form-input w-full px-4 py-2 border rounded bg-gray-200"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="Expiration date"
                className="form-input w-full md:w-1/2 px-4 py-2 border rounded bg-gray-200"
              />
              <input
                type="text"
                placeholder="CVV"
                className="form-input w-full md:w-1/2 px-4 py-2 border rounded bg-gray-200"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <label className="ml-2">
                Save my card for future reservation
              </label>
            </div>
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-4 mt-10">
                By selecting the button below, I agree to the Property Rules,
                Terms and Conditions, Privacy Policy, and COVID-19 Safety
                Requirements.
              </p>

              <button className="w-full bg-gray-500 text-white px-6 py-3 rounded">
                Confirm and pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
