import React from "react";
import {
  FaPhone,
  FaMapMarker,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Map from "./Map";

export default function Contact() {
  return (
<section >

    <div  className="bg-gray-100 " >
      <div className="max-w-full overflow-x-hidden w-full p-[70px] justify-center bg-gray-90">
        <div className="max-w-[1240px] mx-auto text-center mb-10">
          <div className="bg-gray-100 border inline-block  px-4 py-1 rounded-full mb-6">
            Contact Us
          </div>
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="lg:order-1">
            <div className="w-full sm:h-64 lg:h-auto overflow-hidden">
              <Map></Map>
            </div>
          </div>

          <div className="lg:order-2 mt-5">
            <div className="bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <FaPhone className="mr-2"></FaPhone>
                  <p>1300 774 666</p>
                </div>
                <div className="flex items-center">
                  <FaMapMarker className="mr-2"></FaMapMarker>
                  <p>
                    Flux (Spacecubed), Level 1, 191, St. Georges Terrace, Perth-
                    Australia.
                  </p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2"></FaEnvelope>
                  <p className="overflow-hidden">
                    contact@theoutsourcepro.com.au
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-300 p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-4">Social Media</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <FaInstagram className="mr-2"></FaInstagram>
                  <p>
                    <a href="https://www.instagram.com/top_theoutsourcepro/?igshid=Yzg5MTU1MDY%3D">
                      top_theoutsourcepro
                    </a>
                  </p>
                </div>
                <div className="flex items-center">
                  <FaFacebook className="mr-2"></FaFacebook>
                  <p>
                    <a href="https://www.facebook.com/people/The-Outsource-Pro-TOP/100089274189547/?is_tour_dismissed=true">
                      The Outsource Pro
                    </a>
                  </p>
                </div>
                <div className="flex items-center">
                  <FaTwitter className="mr-2"></FaTwitter>
                  <p>
                    <a href="https://twitter.com/TOPtheoutsource">
                      TOPtheoutsource
                    </a>
                  </p>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="mr-2"></FaLinkedin>
                  <p>
                    <a href="https://www.linkedin.com/company/the-outsourcepro/">
                      The Outsource Pro
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
  );
}
