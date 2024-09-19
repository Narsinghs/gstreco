import React, { useState } from "react";
import Image from "../assets/Login.gif";
import { FaMicrosoft, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, OAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if user data exists in Firestore
      const userDoc = await getDoc(doc(db, "user", user.uid));
      if (!userDoc.exists()) {
        // If user data doesn't exist, create it
        await setDoc(doc(db, "user", user.uid), {
          email: user.email,
          firstName: user.displayName?.split(" ")[0] || "",
          lastName: user.displayName?.split(" ")[1] || "",
          photo: user.photoURL,
        });
      }

      toast.success("User logged in successfully", {
        position: "top-center",
      });
      window.location.href = "/acc_how_to_use";
    } catch (error) {
      console.error("Sign-in Error:", error.message);
      toast.error("Failed to sign in. Please check your email and password.", {
        position: "bottom-center",
      });
    }
  };

  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        const { email, uid, displayName, photoURL } = result.user;
        const [firstName, lastName] = (displayName || "").split(" ");

        // Check if user data exists in Firestore
        const userDoc = await getDoc(doc(db, "user", uid));
        if (!userDoc.exists()) {
          // If user data doesn't exist, create it
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
        window.location.href = "/acc_how_to_use";
      }
    } catch (error) {
      console.error("Google Login Error:", error.message);
      toast.error("Failed to sign in with Google. Please try again later.", {
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

        // Check if user data exists in Firestore
        const userDoc = await getDoc(doc(db, "user", uid));
        if (!userDoc.exists()) {
          // If user data doesn't exist, create it
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
        window.location.href = "/acc_how_to_use";
      }
    } catch (error) {
      console.error("Microsoft Login Error:", error.message);
      toast.error("Failed to sign in with Microsoft. Please try again later.", {
        position: "bottom-center",
      });
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      toast.success("Password reset email sent. Check your inbox.", {
        position: "top-center",
      });
      setIsResettingPassword(false);
    } catch (error) {
      console.error("Password Reset Error:", error.message);
      toast.error("Failed to send password reset email. Please check the email address and try again.", {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">
      <Navbar />
      <div className="flex justify-center mt-10 items-center flex-grow">
        <div className="w-full md:w-1/2 p-5 flex justify-center">
          <div className="w-full max-w-md bg-gray-300 rounded-lg shadow-lg p-5">
            {isResettingPassword ? (
              <div>
                <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>
                <form className="space-y-4" onSubmit={handlePasswordReset}>
                  <div>
                    <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="reset-email"
                      name="reset-email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                      Send Reset Email
                    </button>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-gray-600">
                      <button
                        type="button"
                        onClick={() => setIsResettingPassword(false)}
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Back to Sign In
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 px-3 mt-5 flex items-center"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="w-5 h-5 text-gray-600" />
                      ) : (
                        <FaEye className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsResettingPassword(true)}
                      className="text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-gray-600">
                      Don't have an account?{" "}
                      <Link to="/sign-up" className="text-indigo-600 hover:text-indigo-500">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
                <div className="mt-4 text-center">
                  <span className="text-gray-600">or</span>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <div className="flex space-x-4">
                    <a href="#" onClick={googleLogin} className="text-gray-600 hover:text-gray-800">
                      <FaGoogle className="text-2xl" />
                    </a>
                    <a href="#" onClick={microsoftLogin} className="text-gray-600 hover:text-gray-800">
                      <FaMicrosoft className="text-2xl" />
                    </a>
                    {/* <a href="#" className="text-gray-600 hover:text-gray-800">
                      <FaApple className="text-2xl" />
                    </a> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 p-5 flex justify-center">
          <img
            src={Image}
            alt="signin illustration"
            className="w-full h-auto object-cover max-w-md rounded-lg"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}