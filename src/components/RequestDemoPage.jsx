import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Requestdemo from '../assets/RequestDemo.gif'; 
import Navbar from '../components/Navbar'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestDemoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      // Send email via EmailJS
      await emailjs.sendForm('service_cfgfk1x', 'template_ntjfzyb', e.target, 'hwOHuR-Ht5oVNTJnY');
      setIsSubmitted(true);
      setError(null);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      toast.success('Demo request sent successfully!', { position: 'top-center' });
    } catch (error) {
      console.error('EmailJS Error:', error.message);
      setError('Something went wrong. Please try again.');
      toast.error('Failed to send demo request. Please try again later.', { position: 'bottom-center' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">
      <Navbar />
      <div className="flex justify-center mt-10 items-center flex-grow">
        <div className="w-full md:w-1/2 p-5 flex justify-center">
          <div className="w-full max-w-md bg-gray-300 rounded-lg shadow-lg p-5">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Request a Demo</h1>
            {isSubmitted ? (
              <div className="text-center text-green-600">
                <p>Thank you for requesting a demo! We will get in touch with you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Request Demo
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 p-5 flex justify-center">
          <img
            src={Requestdemo}
            alt="Request demo"
            className="w-full h-auto object-cover max-w-md rounded-lg"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RequestDemoPage;
