import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "../components/Sidebar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import backgroundImage from '../assets/formsimage.jpeg';

export default function Gst_Form() {
  const [formData, setFormData] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedForm, setSelectedForm] = useState("xero");
  const [showPassword, setShowPassword] = useState({});
  const [showSecurityAnswers, setShowSecurityAnswers] = useState({});
  const [idErrors, setIdErrors] = useState({});

  const xeroFields = [
    { name: "ATO_Id", hint: "Enter Xero username" },
    { name: "Client_Name", hint: "Enter client name" },
    { name: "From", hint: "Start date of the period" },
    { name: "To", hint: "End date of the period" },
    { name: "July_September_Quarter", hint: "Jul 2022 Sep 2022 Business activity statement" },
    { name: "October_December_Quarter", hint: "Oct 2022 Dec 2022 Business activity statement" },
    { name: "January_March_Quarter", hint: "Jan 2023 Mar 2023 Business activity statement" },
    { name: "April_June_Quarter", hint: "Apr 2023 Jun 2023 Business activity statement" },
    { name: "XERO_Id", hint: "Enter your Xero Id" },
    { name: "XERO_Password", hint: "Enter your password" },
    { name: "Security_Question_1", hint: "First security question" },
    { name: "Security_Answer_1", hint: "Answer to the first security question" },
    { name: "Security_Question_2", hint: "Second security question" },
    { name: "Security_Answer_2", hint: "Answer to the second security question" },
    { name: "Security_Question_3", hint: "Third security question" },
    { name: "Security_Answer_3", hint: "Answer to the third security question" },
    { name: "User_Name", hint: "Username for laptop" },
    { name: "Email_Id", hint: "Recipient of the sender" },
  ];

  const myobFields = [
    { name: "ATO_Id", hint: "Enter Myob username or email" },
    { name: "Client_Name", hint: "Enter client name" },
    { name: "From", hint: "Start date of the period" },
    { name: "To", hint: "End date of the period" },
    { name: "July-September_Quarter", hint: "July quarter details" },
    { name: "October-December_Quarter", hint: "October quarter details" },
    { name: "January-March_Quarter", hint: "January quarter details" },
    { name: "April-June_Quarter", hint: "April quarter details" },
    { name: "Myob_Id", hint: "Enter your username" },
    { name: "Myob_Password", hint: "Enter your password" },
    { name: "Security_Question_1", hint: "First security question for Myob" },
    { name: "Security_Answer_1", hint: "Answer to the first security question" },
    { name: "Security_Question_2", hint: "Second security question for Myob" },
    { name: "Security_Answer_2", hint: "Answer to the second security question" },
    { name: "Security_Question_3", hint: "Third security question for Myob" },
    { name: "Security_Answer_3", hint: "Answer to the third security question" },
    { name: "User_Name", hint: "Username for laptop" },
    { name: "Email_Id", hint: "Recipient of the sender" },
  ];

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(value => value !== '');
    const emailValid = validateEmail(formData.Email_Id);
    const idValid = validateIdFields();

    setIsFormValid(allFieldsFilled && emailValid && idValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // Clear any ID error when user types
    if (idErrors[name]) {
      setIdErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Hide password and security answer fields when switching inputs
    if (name.includes("Password") || name.includes("Security_Answer")) {
      const newShowPassword = {};
      const newShowSecurityAnswers = {};

      // Hide all password and security answer fields
      for (const field of Object.keys(formData)) {
        if (field.includes("Password")) {
          newShowPassword[field] = false;
        }
        if (field.includes("Security_Answer")) {
          newShowSecurityAnswers[field] = false;
        }
      }

      setShowPassword(newShowPassword);
      setShowSecurityAnswers(newShowSecurityAnswers);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateIdFields = () => {
    const idFields = ['ATO_Id', 'XERO_Id', 'Myob_Id', 'Email_Id'];
    let isValid = true;
    const newIdErrors = {};

    for (let field of idFields) {
      if (formData[field] && !validateEmail(formData[field])) {
        newIdErrors[field] = `Please enter a valid email for ${field}.`;
        isValid = false;
      }
    }

    setIdErrors(newIdErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.Email_Id)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.info("Submitting...", { autoClose: false });
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/runJenkinsJob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          formType: selectedForm,
        }),
      });

      if (response.ok) {
        const responseText = await response.text();
        toast.dismiss();
        toast.success(responseText);
        setSubmissionStatus('Submission successful');

        setTimeout(() => {
          toast.info('A verification email has been sent to you.');
        }, 60000);
      } else {
        const errorText = await response.text();
        toast.dismiss();
        toast.error(`Failed to trigger job: ${errorText}`);
        setSubmissionStatus('Submission failed');
      }
    } catch (error) {
      toast.dismiss();
      toast.error(`Error occurred: ${error.message}`);
      setSubmissionStatus('Submission error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({});
    setSubmissionStatus("");
    setIdErrors({});
    setShowPassword({});
    setShowSecurityAnswers({});
  };

  const getFields = () => {
    return selectedForm === "xero" ? xeroFields : myobFields;
  };

  const formatFieldName = (fieldName) => {
    return fieldName
      .replace(/_/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
  };

  const handlePasswordVisibility = (fieldName) => {
    setShowPassword(prevState => ({
      ...prevState,
      [fieldName]: !prevState[fieldName]
    }));
  };

  const handleSecurityAnswerVisibility = (fieldName) => {
    setShowSecurityAnswers(prevState => ({
      ...prevState,
      [fieldName]: !prevState[fieldName]
    }));
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  return (
    <div className="flex flex-col min-h-screen bg-white" style={backgroundStyle}>
      <Sidebar />
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl bg-gray-400 p-8 shadow-lg rounded-lg" style={formStyle}>
          <h1 className="text-2xl font-bold text-center mb-6">
            {selectedForm === "xero" ? "Xero GST Reconciliation Form" : "MYOB GST Reconciliation Form"}
          </h1>

          <div className="flex justify-center mb-6">
            <div className="flex items-center mx-4" style={labelStyle}>
              <input
                type="radio"
                id="xero"
                name="formType"
                value="xero"
                checked={selectedForm === "xero"}
                onChange={() => {
                  setSelectedForm("xero");
                  handleReset();
                }}
                className="mr-2 text-black"
              />
              <label htmlFor="xero" className="text-black"> Xero</label>
            </div>
            <div className="flex items-center mx-4" style={labelStyle}>
              <input
                type="radio"
                id="myob"
                name="formType"
                value="myob"
                checked={selectedForm === "myob"}
                onChange={() => {
                  setSelectedForm("myob");
                  handleReset();
                }}
                className="mr-2"
              />
              <label htmlFor="myob" className="text-black">MYOB</label>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {getFields().map((fieldObj, index) => (
                <div key={index} className="flex flex-col relative">
                  <label className="block text-sm font-full text-black mb-1" style={labelStyle}>
                    {formatFieldName(fieldObj.name)}
                  </label>
                  {fieldObj.name === "From" || fieldObj.name === "To" ? (
                    <input
                      type="date"
                      name={fieldObj.name}
                      value={formData[fieldObj.name] || ''}
                      onChange={handleChange}
                      placeholder={fieldObj.hint}
                      className="p-2 block w-full border border-gray-400 rounded-md"
                      required
                    />
                  ) : fieldObj.name.toLowerCase().includes("password") ? (
                    <div className="relative">
                      <input
                        type={showPassword[fieldObj.name] ? "text" : "password"}
                        name={fieldObj.name}
                        value={formData[fieldObj.name] || ''}
                        onChange={handleChange}
                        placeholder={fieldObj.hint}
                        className="p-2 block w-full border border-gray-400 rounded-md"
                        required
                      />
                      <button
                        type="button"
                        onMouseEnter={() => handlePasswordVisibility(fieldObj.name)}
                        onMouseLeave={() => handlePasswordVisibility(fieldObj.name)}
                        className="absolute inset-y-0 right-0 px-3 flex items-center"
                      >
                        {showPassword[fieldObj.name] ? (
                          <FaEye className="w-5 h-5 text-gray-600" />
                        ) : (
                          <FaEyeSlash className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                  ) : fieldObj.name.toLowerCase().includes("security_answer") ? (
                    <div className="relative">
                      <input
                        type={showSecurityAnswers[fieldObj.name] ? "text" : "password"}
                        name={fieldObj.name}
                        value={formData[fieldObj.name] || ''}
                        onChange={handleChange}
                        placeholder={fieldObj.hint}
                        className="p-2 block w-full border border-gray-400 rounded-md"
                        required
                      />
                      <button
                        type="button"
                        onMouseEnter={() => handleSecurityAnswerVisibility(fieldObj.name)}
                        onMouseLeave={() => handleSecurityAnswerVisibility(fieldObj.name)}
                        className="absolute inset-y-0 right-0 px-3 flex items-center"
                      >
                        {showSecurityAnswers[fieldObj.name] ? (
                          <FaEye className="w-5 h-5 text-gray-600" />
                        ) : (
                          <FaEyeSlash className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name={fieldObj.name}
                        value={formData[fieldObj.name] || ''}
                        onChange={handleChange}
                        placeholder={fieldObj.hint}
                        className="p-2 block w-full border border-gray-400 rounded-md"
                        required
                      />
                      {idErrors[fieldObj.name] && (
                        <span className="text-red-500 text-sm mt-1">{idErrors[fieldObj.name]}</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className={`py-2 px-4 ${isFormValid ? "bg-blue-500 text-white" : "bg-blue-200 text-gray-600"} rounded`}
                disabled={!isFormValid || isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="py-2 px-4 bg-gray-500 text-white rounded"
              >
                Reset
              </button>
            </div>
          </form>

          {submissionStatus && (
            <div className="mt-4 text-center text-lg font-semibold">
              {submissionStatus}
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
