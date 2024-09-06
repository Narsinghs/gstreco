import React from "react";
import Heading from "../components/Heading";
import Partner from "../components/Partner";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import HowItWorks from "../components/Howitworks";
// import Pricing from "../components/Pricing"; // Corrected path and import

export default function Homepage() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Navbar></Navbar>
      <Heading></Heading>
      <Partner></Partner>
      <HowItWorks></HowItWorks>
      <About></About>
      <Contact></Contact>
     
    </div>
  );
}
