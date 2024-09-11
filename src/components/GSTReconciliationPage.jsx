// src/components/GSTReconciliationPage.js

import React from 'react';

const GSTReconciliationPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Automated GST Reconciliation Solution</h1>
        <p className="text-xl text-gray-600">Simplify Your Accounting with Our Advanced Integration</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <p className="text-lg text-gray-700">
          Experience seamless GST reconciliation with our cutting-edge automation solution, designed to integrate effortlessly with ATO, Xero, and MYOB. Our system eliminates manual reconciliation tasks, ensures accuracy, and saves you valuable time, so you can focus on what truly matters—growing your business.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-2xl font-semibold mb-2">Effortless Integration</h3>
            <ul className="list-disc ml-5 text-gray-700">
              <li><strong>ATO Integration:</strong> Automatically sync your GST data with the Australian Taxation Office (ATO) for accurate compliance and reporting.</li>
              <li><strong>Xero Integration:</strong> Seamlessly connect with Xero to streamline your financial workflows and synchronize transactions.</li>
              <li><strong>MYOB Integration:</strong> Harmonize your GST records with MYOB to ensure precise reconciliation and reporting.</li>
            </ul>
          </li>
          <li>
            <h3 className="text-2xl font-semibold mb-2">Automated Reconciliation</h3>
            <ul className="list-disc ml-5 text-gray-700">
              <li><strong>Real-Time Updates:</strong> Instantly reconcile your GST transactions as they occur, eliminating the need for manual entry and reducing errors.</li>
              <li><strong>Comprehensive Reports:</strong> Generate detailed reconciliation reports to easily track discrepancies and ensure accuracy in your GST calculations.</li>
            </ul>
          </li>
          <li>
            <h3 className="text-2xl font-semibold mb-2">Enhanced Accuracy</h3>
            <ul className="list-disc ml-5 text-gray-700">
              <li><strong>Error Reduction:</strong> Minimize human error with our automated system that cross-checks data across all integrated platforms.</li>
              <li><strong>Compliance Assurance:</strong> Stay compliant with the latest GST regulations and ATO guidelines with our up-to-date system.</li>
            </ul>
          </li>
          <li>
            <h3 className="text-2xl font-semibold mb-2">User-Friendly Interface</h3>
            <ul className="list-disc ml-5 text-gray-700">
              <li><strong>Intuitive Dashboard:</strong> Navigate through a clear, user-friendly dashboard designed for ease of use and efficiency.</li>
              <li><strong>Customizable Settings:</strong> Adjust settings to fit your business’s unique needs and preferences.</li>
            </ul>
          </li>
          <li>
            <h3 className="text-2xl font-semibold mb-2">Time and Cost Efficiency</h3>
            <ul className="list-disc ml-5 text-gray-700">
              <li><strong>Save Time:</strong> Automate repetitive tasks and reduce the time spent on manual reconciliation.</li>
              <li><strong>Cost Savings:</strong> Lower administrative costs by reducing the need for additional accounting personnel.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal ml-5 text-gray-700">
          <li><strong>Connect Your Accounts:</strong> Link your ATO, Xero, and MYOB accounts to our platform for a unified reconciliation process.</li>
          <li><strong>Sync Your Data:</strong> Allow our system to automatically pull and synchronize your GST data across all platforms.</li>
          <li><strong>Automate Reconciliation:</strong> Our advanced algorithms reconcile your GST transactions in real-time, ensuring accuracy and compliance.</li>
          <li><strong>Generate Reports:</strong> Access detailed reports and insights to monitor your GST status and make informed decisions.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="space-y-4 text-gray-700">
          <li><strong>Proven Expertise:</strong> Our team has extensive experience in accounting automation and integration, ensuring a reliable and effective solution.</li>
          <li><strong>Dedicated Support:</strong> Receive ongoing support and assistance from our knowledgeable team to address any queries or issues.</li>
          <li><strong>Continuous Updates:</strong> Benefit from regular updates and improvements to our system, keeping you ahead of changes in GST regulations and technology.</li>
        </ul>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Get Started Today</h2>
        <p className="text-lg text-gray-700 mb-6">
          Transform your GST reconciliation process with our automated solution. Contact us for a free demo or to discuss how our system can be tailored to your business needs. Simplify your accounting, enhance accuracy, and ensure compliance with ease.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Request a Demo</a>
          <a href="#" className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400">Contact Us</a>
          <a href="#" className="bg-blue-100 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-200">Learn More</a>
        </div>
      </section>

      <footer className="text-center text-gray-500">
        <p>Company Name | Address | Phone Number | Email Address | Website URL</p>
      </footer>
    </div>
  );
};

export default GSTReconciliationPage;
