import React, { useState } from "react";
import Image from "../assets/top.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import About from "./About";


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setShowDropdown((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const closeMenu = () => {
    setShowMenu(false);
    setShowDropdown(null);
  };

  const handleLogoClick = () => {
    scroll.scrollToTop();
    closeMenu();
  };

  return (
    <div
      className="bg-[f8f9fa] p-4 transform scale-105 relative z-10"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center relative z-20">
        <div className="flex items-center">
          <img
            src={Image}
            alt="Logo"
            className="h-20 w-auto mr-20 cursor-pointer"
            onClick={handleLogoClick}
          />

          <ul
            className={`md:flex space-x-8 items-center hidden md:flex ml-8 ${
              showMenu ? "hidden" : "flex"
        }`}
>

            {/* Home Dropdown */}
            <li className="relative">
              
              <RouterLink to="/">
              <button
                onClick={() => toggleDropdown("home")}
                className="hover:font-bold"
                >
                Home

              </button >
                </RouterLink>
              {showDropdown === "home" && (
                <ul className="absolute left-0 mt-2 w-30 bg-white shadow-lg rounded-lg z-30">
                  <li>
                    <ScrollLink
                      to="about"
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                      >
                      About
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                      >
                      Contact
                    </ScrollLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Products Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className="hover:font-bold"
              >
                Products
              </button>
              {showDropdown === "products" && (
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-30">
                  <li>
                    <RouterLink
                      to="/GstReconciliationPage"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Gst Reconciliation
                    </RouterLink>
                  </li>
                  {/* <li>
                    <RouterLink
                      to="/product-2"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Product 2
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/product-3"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Product 3
                    </RouterLink>
                  </li> */}
                </ul>
              )}
            </li>

            {/* Features Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("features")}
                className="hover:font-bold"
              >
                Features
              </button>
              {showDropdown === "features" && (
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-30">
                  <li>
                    <RouterLink
                      to="/feature-1"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Feature 1
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/feature-2"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Feature 2
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/feature-3"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Feature 3
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
              <button className="bg-gray-800 text-white border-2 border-gray-400 px-4 py-2 w-100 hover:font-bold rounded-md  p-4">
                Register Now
              </button>
            </RouterLink>
          </li>
        </ul>
      </div>

      {showMenu && (
        <div className="md:hidden">
          <ul className="flex flex-col mt-4 ">
            {/* Home Dropdown for Mobile */}
            <li>
              <button
                onClick={() => toggleDropdown("home")}
                className="hover:font-bold"
              >
                Home
              </button>
              {showDropdown === "home" && (
                <ul className="mt-2">
                  <li>
                    <ScrollLink
                      to="about"
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      About
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Contact
                    </ScrollLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Products Dropdown for Mobile */}
            <li>
              <button
                onClick={() => toggleDropdown("products")}
                className="hover:font-bold"
              >
                Products
              </button>
              {showDropdown === "products" && (
                <ul className="mt-2">
                  <li>
                    <RouterLink
                      to="/GstReconciliationPage"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                       Gst Reconciliation
                    </RouterLink>
                  </li>
                  {/* <li>
                    <RouterLink
                      to="/product-2"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Product 2
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/product-3"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Product 3
                    </RouterLink>
                  </li> */}
                </ul>
              )}
            </li>

            {/* Features Dropdown for Mobile */}
            <li>
              <button
                onClick={() => toggleDropdown("features")}
                className="hover:font-bold"
              >
                Features
              </button>
              {showDropdown === "features" && (
                <ul className="mt-2">
                  <li>
                    <RouterLink
                      to="/feature-1"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Feature 1
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/feature-2"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Feature 2
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/feature-3"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Feature 3
                    </RouterLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <RouterLink to="/Pricing">
                <button className="hover:font-bold">Pricing</button>
              </RouterLink>
            </li>
          </ul>
          <ul className="flex flex-col mt-4">
            <li>
              <RouterLink to="/sign-in">
                <button className="border-2 border-gray-400 px-4 py-2 w-32 hover:font-bold">
                  Sign In
                </button>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/sign-up">
                <button className="bg-gray-800 text-white border-2 border-gray-400 px-4 py-2 w-100 hover:font-bold">
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