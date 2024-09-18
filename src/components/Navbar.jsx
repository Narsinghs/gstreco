import React, { useState } from "react";
import Image from "../assets/top.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setShowDropdown((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const closeMenu = () => {
    setShowMenu(false);
    setShowDropdown(null);
  };

  const handleLogoClick = () => {
    scroller.scrollToTop();
    closeMenu();
  };

  const handleScrollToAbout = () => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo('about', {
        smooth: true,
        duration: 500,
      });
    }, 0); // Timeout to allow the page to load before scrolling
    closeMenu();
  };
  const handleScrollTocontact = () => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo('contact', {
        smooth: true,
        duration: 500,
      });
    }, 0); // Timeout to allow the page to load before scrolling
    closeMenu();
  };
  return (
    <div className="bg-[#f8f9fa] p-4 transform scale-105 relative z-10" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="max-w-[1400px] mx-auto flex justify-between items-center relative z-20">
        <div className="flex items-center">
          <img
            src={Image}
            alt="Logo"
            className="h-16 w-auto mr-20 cursor-pointer"
            onClick={handleLogoClick}
          />

          <ul className={`md:flex space-x-9 items-center hidden md:flex ml-8 ${showMenu ? "hidden" : "flex"}`}>
            <li>
              <RouterLink to="/">
                <button
                  onClick={toggleDropdown.bind(null, "home")}
                  className="hover:font-bold"
                >
                  Home
                </button>
              </RouterLink>
            </li>
            <li>
              <button
                onClick={handleScrollToAbout}
                className="hover:font-bold"
              >
                About Us
              </button>
            </li>
            <li className="relative group">
              <button
                onClick={() => toggleDropdown("products")}
                className="hover:font-bold"
              >
                Products
              </button>
              <ul className={`absolute left-0 mt-1 w-[130px] bg-black shadow-lg rounded-lg z-30 ${showDropdown === "products" ? "block" : "hidden"} group-hover:block`}>
                <li>
                  <RouterLink
                    to="/gst-reconciliation"
                    className="block px-4 py-2 hover:bg-gray-700 hover:rounded text-white"
                    onClick={closeMenu}
                  >
                    GST Recon..
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li>
              <RouterLink to="/pricing">
                <button className="hover:font-bold">Pricing</button>
              </RouterLink>
            </li>
            <li>
              <button
                onClick={handleScrollTocontact}
                className="hover:font-bold"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          {showMenu ? (
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <FiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>

        <ul className="md:flex space-x-8 items-center hidden md:flex">
          <li>
            <RouterLink to="/sign-in">
              <button className="border-2 border-gray-400 text-white px-4 py-2 w-32 hover:font-bold rounded-md bg-gray-800 p-4">
                Sign In
              </button>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/sign-up">
              <button className="bg-gray-800 text-white border-2 border-gray-400 px-4 py-2 w-100 hover:font-bold rounded-md p-4">
                Register Now
              </button>
            </RouterLink>
          </li>
        </ul>
      </div>

      {showMenu && (
        <div className="md:hidden">
          <ul className="flex flex-col mt-4">
            <li>
              <RouterLink to="/">
                <button
                  onClick={toggleDropdown.bind(null, "home")}
                  className="hover:font-bold"
                >
                  Home
                </button>
              </RouterLink>
              {showDropdown === "home" && (
                <ul className="left-0 mt-1 w-20 bg-black text-white shadow-lg rounded-lg">
                  <li>
                    <button
                      onClick={handleScrollToAbout}
                      className="block px-4 py-2 hover:bg-gray-700 rounded"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <RouterLink to="/contact">
                      <button className="block px-2 py-2 hover:bg-gray-700 rounded">
                        Contact
                      </button>
                    </RouterLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("products")}
                className="hover:font-bold"
              >
                Products
              </button>
              {showDropdown === "products" && (
                <ul className="left-0 mt-1 w-20 px-2 py-2 bg-black text-white shadow-lg rounded">
                  <li>
                    <RouterLink to="/gst-reconciliation">
                      <button className="hover:font-bold">GST Recon..</button>
                    </RouterLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <RouterLink to="/pricing">
                <button className="hover:font-bold">Pricing</button>
              </RouterLink>
            </li>
          </ul>
          <ul className="flex flex-col mt-4">
            <li>
              <RouterLink to="/sign-in">
                <button className="bg-gray-800 text-white border-2 border-gray-400 px-4 py-2 w-100 hover:font-bold rounded">
                  Sign In
                </button>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/sign-up">
                <button className="bg-gray-800 text-white border-2 border-gray-400 px-4 py-2 w-100 hover:font-bold rounded">
                  Register Now
                </button>
              </RouterLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
