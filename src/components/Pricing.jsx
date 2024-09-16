import React from 'react';
import Navbar from "../components/Navbar";

function Pricing() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar className="bg-gray-900 text-gray-200 py-4" />
      
      <div className="flex-1">
        <div className="mx-auto mt-9 max-w-7xl px-6 lg:px-9">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Streamlined GST Reconciliation with ATO Integration
            </h2>
            <p className="mt-6 text-lg leading-8">
              Choose the plan that fits your business needs and enjoy seamless GST reconciliation with automated ATO reporting and MYOB/Xero integration.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* Basic Plan */}
            <div className="bg-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">Basic Plan</h3>
              <p className="mt-6 text-base leading-7">
                Ideal for small businesses looking for basic GST reconciliation and ATO reporting features. Integrates with MYOB and Xero for a streamlined experience.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="text-sm font-semibold text-indigo-400">
                  Features
                </h4>
                <div className="h-px flex-auto bg-gray-500"></div>
              </div>
              <ul role="list" className="mt-8 text-sm leading-6">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Basic GST Reporting
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Integration with MYOB and Xero
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Basic ATO Compliance
                </li>
              </ul>
              <div className="mt-10 text-center">
                <p className="text-lg font-semibold">$29/month</p>
                <a href="#" className="mt-4 block rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400">
                  Get Started
                </a>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">Standard Plan</h3>
              <p className="mt-6 text-base leading-7">
                Perfect for growing businesses needing advanced GST reconciliation and enhanced ATO compliance with additional automation features.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="text-sm font-semibold text-indigo-400">
                  Features
                </h4>
                <div className="h-px flex-auto bg-gray-500"></div>
              </div>
              <ul role="list" className="mt-8 text-sm leading-6">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Advanced GST Reporting
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Automated Reconciliation
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Enhanced ATO Reporting
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Priority Email Support
                </li>
              </ul>
              <div className="mt-10 text-center">
                <p className="text-lg font-semibold">$79/month</p>
                <a href="#" className="mt-4 block rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400">
                  Get Started
                </a>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">Premium Plan</h3>
              <p className="mt-6 text-base leading-7">
                Comprehensive plan for large enterprises requiring advanced features, including full automation and custom integration solutions for ATO and MYOB/Xero.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="text-sm font-semibold text-indigo-400">
                  Features
                </h4>
                <div className="h-px flex-auto bg-gray-500"></div>
              </div>
              <ul role="list" className="mt-8 text-sm leading-6">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Full Automation with MYOB & Xero
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  24/7 Premium Support
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Custom Integration Solutions
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Comprehensive ATO Compliance
                </li>
              </ul>
              <div className="mt-10 text-center">
                <p className="text-lg font-semibold">$149/month</p>
                <a href="#" className="mt-4 block rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Pricing;
