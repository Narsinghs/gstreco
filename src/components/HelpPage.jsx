import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Sidebar from './Sidebar';

const HelpPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Support Team',
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_1562ml9', 'template_4gv192h', templateParams, 'hwOHuR-Ht5oVNTJnY')
      .then((response) => {
        console.log('Success:', response);
        setStatus('Your message has been sent successfully!');
        setEmail('');
        setName('');
        setMessage('');
      })
      .catch((err) => {
        console.error('Error:', err);
        setStatus('An error occurred. Please try again later.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <Sidebar />
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Help Center</h2>
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-lg font-medium text-gray-700">How do I reset my password?</h4>
                <p className="text-gray-600">To reset your password, go to the login page and click on "Forgot Password." Follow the instructions sent to your email to reset it.</p>
              </li>
              <li>
                <h4 className="text-lg font-medium text-gray-700">Where can I find my purchase history?</h4>
                <p className="text-gray-600">Your purchase history can be found under your account settings in the "Order History" section.</p>
              </li>
              <li>
                <h4 className="text-lg font-medium text-gray-700">How can I contact support?</h4>
                <p className="text-gray-600">You can contact support via the form below or email us directly at <a href="mailto:toptechsupport@theoutsourcepro.com.au" className="text-indigo-600 hover:underline">toptechsupport@theoutsourcepro.com.au</a></p>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
            
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send
              </button>
              {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
