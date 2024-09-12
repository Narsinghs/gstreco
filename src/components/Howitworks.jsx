import React, { useEffect } from "react";
import DataCollectionImage from "../assets/Datacollection.png";
import ReportingImage from "../assets/reporting.png";
import ReconciliationImage from "../assets/Reconsilation.png";
import ComplianceImage from "../assets/compliance.png";
import SecurityImage from "../assets/Security.png"; // Import the security image
import '@fontsource/poppins'; // Defaults to weight 400
import './Howitworks.css';
import { Link } from "react-router-dom";

export default function HowItWorks() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

    // Observe sections
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="text-black text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-wide stylish-heading">
            How It Works ?
          </h2>
        </div>

        {/* Data Collection Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 fade-in-section">
          <div className="text-black md:w-1/2 md:mr-10">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Data Collection
            </h3>
            <p className="text-lg">
              We collect all necessary GST data from your business, ensuring a comprehensive view for accurate reconciliation.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={DataCollectionImage} alt="Data Collection" className="w-full max-w-xs object-contain rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Reporting Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-16 fade-in-section">
          <div className="md:w-1/2">
            <img src={ReportingImage} alt="Reporting" className="w-full max-w-xs object-contain rounded-lg shadow-lg" />
          </div>
          <div className="text-black md:w-1/2 md:ml-10">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Reporting
            </h3>
            <p className="text-lg">
              You receive detailed reports that highlight any discrepancies, allowing for quick corrective actions.
            </p>
          </div>
        </div>

        {/* Reconciliation Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 fade-in-section">
          <div className="text-black md:w-1/2 md:mr-10">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Reconciliation
            </h3>
            <p className="text-lg">
              Our Product carefully match your purchase and sales data against GST returns to identify discrepancies.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={ReconciliationImage} alt="Reconciliation" className="w-full max-w-xs object-contain rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Compliance Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-16 fade-in-section">
          <div className="md:w-1/2">
            <img src={ComplianceImage} alt="Compliance" className="w-full max-w-xs object-contain rounded-lg shadow-lg" />
          </div>
          <div className="text-black md:w-1/2 md:ml-10">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Compliance
            </h3>
            <p className="text-lg">
              Stay compliant with timely updates, accurate filings, and necessary adjustments to meet all GST requirements.
            </p>
          </div>
        </div>

        {/* Security Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 fade-in-section">
          <div className="text-black md:w-1/2 md:mr-10">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Security
            </h3>
            <p className="text-lg">
              We ensure that your data is secure through robust encryption and compliance with the latest security standards.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={SecurityImage} alt="Security" className="w-full max-w-xs object-contain rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Summary Section */}
        <div className="text-black text-center mt-16 fade-in-section">
          <p className="text-lg max-w-3xl mx-auto mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Our streamlined GST Reconciliation process ensures your business data is accurately matched, discrepancies are swiftly identified, and compliance is maintained. We handle everything from data collection to filing, making GST management hassle-free for you.
          </p>
          <Link to="/sign-in">
            <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
              Get Started 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
