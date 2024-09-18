import React, { useState, useEffect } from "react";
import Image from "../assets/Sign up.gif";
import PasswordStrengthIndicator from "../components/PasswordStrengthIndicator";
import { FaMicrosoft, FaGoogle } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, OAuthProvider } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    firstName: false,
    lastName: false,
    mobile: false,
  });
  const [errors, setErrors] = useState({});

  // Function to validate the form fields
  const validateForm = () => {
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const passwordValid = password.length > 0;
    const firstNameValid = firstName.length > 0;
    const lastNameValid = lastName.length > 0;
    const mobileValid = /^\d{10}$/.test(mobile);

    setErrors({
      email: touched.email && !emailValid ? "Email is invalid." : "",
      password: touched.password && !passwordValid ? "Password is required." : "",
      firstName: touched.firstName && !firstNameValid ? "First name is required." : "",
      lastName: touched.lastName && !lastNameValid ? "Last name is required." : "",
      mobile: touched.mobile && !mobileValid ? "Mobile number must be exactly 10 digits." : "",
    });

    setIsButtonDisabled(!(emailValid && passwordValid && firstNameValid && lastNameValid && mobileValid));
  };

  useEffect(() => {
    validateForm();
  }, [email, password, firstName, lastName, mobile, touched]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      default:
        break;
    }
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(mobile)) {
      toast.error("Mobile number must be exactly 10 digits.", {
        position: "bottom-center",
      });
      return;
    }

    const usersRef = collection(db, "user");
    const mobileQuery = query(usersRef, where("mobile", "==", mobile));

    try {
      const mobileSnapshot = await getDocs(mobileQuery);
      if (!mobileSnapshot.empty) {
        toast.error("Mobile number is already in use", {
          position: "bottom-center",
        });
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        // Check if user data already exists in Firestore
        const userDoc = await getDoc(doc(db, "user", user.uid));
        if (!userDoc.exists()) {
          // Only set document if it does not exist
          await setDoc(doc(db, "user", user.uid), {
            email: user.email,
            firstName: firstName,
            lastName: lastName,
            mobile: mobile,
            photo: user.photoURL,
          });
        }
        console.log("User registered successfully");
        toast.success("User registered successfully", {
          position: "top-center",
        });
        window.location.href = "/sign-in";
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        const user = result.user;
        // Check if user data already exists in Firestore
        const userDoc = await getDoc(doc(db, "user", user.uid));
        if (!userDoc.exists()) {
          // Only set document if it does not exist
          await setDoc(doc(db, "user", user.uid), {
            email: user.email,
            firstName: user.displayName.split(" ")[0] || "",
            lastName: user.displayName.split(" ")[1] || "",
            mobile: mobile, // Default to empty or a placeholder
            photo: user.photoURL,
          });
        }
        toast.success("User logged in successfully", {
          position: "top-center",
        });
        window.location.href = "/acc_profile"; 
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  const microsoftLogin = async () => {
    try {
      const provider = new OAuthProvider('microsoft.com');
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        const { email, uid, displayName, photoURL } = result.user;
        const [firstName, lastName] = (displayName || "").split(" ");

        // Check if user data already exists in Firestore
        const userDoc = await getDoc(doc(db, "user", uid));
        if (!userDoc.exists()) {
          // Only set document if it does not exist
          await setDoc(doc(db, "user", uid), {
            email: email,
            firstName: firstName,
            lastName: lastName || "",
            photo: photoURL,
          });
        }

        toast.success("User logged in successfully", {
          position: "top-center",
        });
        window.location.href = "/acc_profile";
      }
    } catch (error) {
      console.error("Microsoft Login Error:", error.message);
      toast.error("Failed to sign in with Microsoft. Please try again later.", {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">
      <Navbar />
      <div className="flex justify-center items-center mt-10 flex-grow">
        <div className="w-full md:w-1/2 p-5 flex justify-center">
          <div className="w-full max-w-[500px] bg-gray-300 rounded-md shadow-md p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
            <form className="space-y-6" onSubmit={handleSignup}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-base font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={handleInputChange}
                    onBlur={() => setTouched((prev) => ({ ...prev, firstName: true }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                  />
                  {errors.firstName && touched.firstName && <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-base font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={handleInputChange}
                    onBlur={() => setTouched((prev) => ({ ...prev, lastName: true }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                  />
                  {errors.lastName && touched.lastName && <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={handleInputChange}
                  onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                />
                {errors.email && touched.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-base font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your 10digits number"
                  value={mobile}
                  onChange={handleInputChange}
                  onBlur={() => setTouched((prev) => ({ ...prev, mobile: true }))}
                  maxLength={10}
                  pattern="\d{10}"
                  inputMode="numeric"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                />
                {errors.mobile && touched.mobile && <p className="text-red-600 text-xs mt-1">{errors.mobile}</p>}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                />
                {password && <PasswordStrengthIndicator password={password} />}
                {errors.password && touched.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
              </div>
              <div className="flex items-center mt-4">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="agree"
                  className="ml-2 block text-xs text-gray-900"
                >
                  By signing up, I agree with the Terms of Use & Privacy Policy
                </label>
              </div>
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`w-full py-2.5 rounded-md text-sm ${
                  isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                Sign Up
              </button>
              <div className="mt-4 text-center">
                <p>
                  Already have an account?{" "}
                  <RouterLink
                    to="/sign-in"
                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                  >
                    Login
                  </RouterLink>
                </p>
              </div>
              <div className="mt-4 text-center">
                <span className="text-gray-600">or</span>
              </div>
              <div className="flex justify-center items-center mt-5 space-x-4">
                <a href="#" onClick={googleLogin}>
                  <FaGoogle className="text-2xl text-gray-600 hover:text-gray-800" />
                </a>
                <a href="#" onClick={microsoftLogin} className="text-gray-600 hover:text-gray-800">
                  <FaMicrosoft className="text-2xl" />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 p-5 flex justify-center">
          <img
            src={Image}
            alt="illustration"
            className="w-full h-auto object-cover max-w-[600px] rounded-lg"
            style={{ borderRadius: "50px" }}  
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
