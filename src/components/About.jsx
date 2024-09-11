import React, { useEffect, useState, useRef } from "react";
import Image from "../assets/Topclan.png";


export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Reset to false if you scroll away
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id="about" ref={aboutRef} className="py-10 bg-gray-200">
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUpShort {
            from {
              opacity: 0;
              transform: translateY(4px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUpLong {
            from {
              opacity: 0;
              transform: translateY(4px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fadeInUp {
            animation: fadeInUp 1s ease-out;
          }

          .fadeInUpShort {
            animation: fadeInUpShort 1s ease-out;
          }

          .fadeInUpLong {
            animation: fadeInUpLong 1.2s ease-out;
          }
        `}
      </style>
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`flex flex-col md:flex-row items-center ${
            isVisible ? "fadeInUp" : ""
          }`}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2
              className={`text-3xl font-bold mb-4 ${
                isVisible ? "fadeInUpShort" : ""
              }`}
            >
              About Us
            </h2>
            <p
              className={`mb-4 ${
                isVisible ? "fadeInUpShort" : ""
              }`}
            >
              The Outsource Pro (TOP) was launched after its founders recognised
              a need for more comprehensive and secure outsourcing solutions for
              modern businesses.
            </p>
            <p
              className={`mb-4 ${
                isVisible ? "fadeInUpLong" : ""
              }`}
            >
              Redefining outsourcing is at the heart of the business and TOP’s
              innovative Managed Outsourcing Services turns talent acquisition
              and retention into a client partnership that lasts a lifetime. We
              are not just service providers; we are partners on our client’s
              business journey, committed to driving their growth and success.
            </p>
            <p
              className={`mb-4 ${
                isVisible ? "fadeInUpLong" : ""
              }`}
            >
              With secure offices across India and Australia, we ensure the
              highest levels of physical and data security. The protection of
              client information is paramount, and we have put in place rigorous
              measures to safeguard client data.
            </p>
          </div>
          <div
            className={`md:w-1/2 md:ml-10 md:pl-8 ${
              isVisible ? "fadeInUp" : ""
            }`}
          >
            <img
              src={Image}
              alt="About Us"
              className="w-50 h-auto md:w-100 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
