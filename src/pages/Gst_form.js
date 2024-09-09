import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "../components/Sidebar";

export default function Gst_Form() {
  const [formData, setFormData] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled
    const allFieldsFilled = Object.values(formData).every(value => value !== '');
    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Submitting...", { autoClose: false });

    try {
      // Trigger Jenkins job
      const response = await fetch('http://localhost:5000/api/runJenkinsJob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseText = await response.text();
        toast.dismiss(); // Dismiss the previous toast
        toast.success(responseText);
        // Delay showing the email verification message by 1 minute (60000 ms)
      setTimeout(() => {
        toast.info('A verification email has been sent to you.');
      }, 60000);
      } else {
        const errorText = await response.text();
        toast.dismiss(); // Dismiss the previous toast
        toast.error(`Failed to trigger job: ${errorText}`);
      }
    } catch (error) {
      toast.dismiss(); // Dismiss the previous toast
      toast.error(`Error occurred: ${error.message}`);
    }
  };

  const handleReset = () => {
    setFormData({});
    setSubmissionStatus("");
  };

  const fields = [
    "userName1",
    "clientName",
    "fromDate",
    "toDate",
    "julyQuarter",
    "octQuarter",
    "janQuarter",
    "aprQuarter",
    "userName",
    "password",
    "securityQuest1",
    "securityAns1",
    "securityQuest2",
    "securityAns2",
    "securityQuest3",
    "securityAns3",
    "fromDate1",
    "toDate1",
    "userNameLaptop",
    "senderTo",
    "taxation",
  ];

  return (
    <div className="flex flex-col overflow-hidden bg-gray-300">
      <Sidebar/>
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold text-center mb-6">GST Reconciliation Form</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {fields.map((field, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
                {field.toLowerCase().includes("date") ? (
                  <input
                    type="date"
                    name={field}
                    value={formData[field] || ''}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    required
                  />
                ) : (
                  <input
                    type="text"
                    name={field}
                    value={formData[field] || ''}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    required
                  />
                )}
              </div>
            ))}
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 mr-4"
                onClick={handleReset}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4"
                disabled={!isFormValid}
              >
                Submit
              </button>
            </div>
          </form>
          {submissionStatus && <p className="text-center mt-4">{submissionStatus}</p>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
