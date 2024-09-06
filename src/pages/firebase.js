// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHVuAx7J4nOOAvrmxIkf5-3f2R_lQlCx4",
  authDomain: "gst-reconcilation-auth.firebaseapp.com",
  projectId: "gst-reconcilation-auth",
  storageBucket: "gst-reconcilation-auth.appspot.com",
  messagingSenderId: "105165713112",
  appId: "1:105165713112:web:9bbb9aff0c624ae56cf1ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export const storage = getStorage(app); 
export default app