import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { auth, db, storage } from "../pages/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from 'react-toastify';

export default function Ap_Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editable, setEditable] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    photo: ''
  });
  const [image, setImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [savingForm, setSavingForm] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        setUser(authUser);
        await fetchProfileData(authUser.uid); // Fetch profile data on user login
      } else {
        setUser(null);
        setProfileData({
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          photo: ''
        });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const fetchProfileData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "user", uid));
      if (userDoc.exists()) {
        setProfileData(userDoc.data());
      }
    } catch (error) {
      toast.error("Error fetching user data");
      console.error("Error fetching user data: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageUpdate = async () => {
    if (!image || !user) return;

    setUploadingImage(true);
    try {
      const imageRef = ref(storage, `profiles/${user.uid}/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await setDoc(doc(db, "user", user.uid), {
        ...profileData,
        photo: imageUrl
      }, { merge: true });

      setProfileData((prevData) => ({
        ...prevData,
        photo: imageUrl,
      }));

      toast.success("Profile picture updated successfully");
    } catch (error) {
      toast.error("Failed to update profile picture");
      console.error("Error updating profile picture: ", error);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSave = async () => {
    setSavingForm(true);
    try {
      if (editable) {
        if (image) {
          await handleImageUpdate();
        } else {
          await setDoc(doc(db, "user", user.uid), profileData, { merge: true });
          toast.success("Profile updated successfully");
        }
        setEditable(false);
        await fetchProfileData(user.uid); // Fetch updated profile data after save
      }
    } catch (error) {
      toast.error("Failed to update profile");
      console.error("Error updating user data: ", error);
    } finally {
      setSavingForm(false);
    }
  };

  const handleEdit = () => {
    setEditable(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg className="w-12 h-12 text-gray-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-25" />
          <path d="M4 12a8 8 0 0116 0 8 8 0 01-16 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex overflow-auto">
      <Sidebar user={user} />
      <div className="flex-1 p-8 bg-white ml-2 md:ml-[300px]">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 border border-gray-300 bg-gray-200 flex items-center justify-center rounded-full overflow-hidden">
            {profileData.photo ? (
              <img src={profileData.photo} alt="User" className="w-full h-full object-cover" />
            ) : (
              <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm0 2c-2.673 0-8 1.337-8 4v2h16v-2c0-2.663-5.327-4-8-4z" />
              </svg>
            )}
          </div>
          <div className="flex flex-col ml-4">
            <span className="text-sm text-gray-500 mb-2">
              Your Image should be in PNG or JPG format
            </span>
            <input
              type="file"
              onChange={handleImageChange}
              className={`mb-2 px-2 py-1 border border-gray-300 rounded bg-gray-100 ${editable ? '' : 'hidden'}`}
            />
            <button
              type="button"
              onClick={handleImageUpdate}
              disabled={uploadingImage || !editable}
              className={`text-red-500 px-4 py-2 rounded border ${uploadingImage ? 'bg-gray-300' : 'border-red-500 hover:bg-red-500 hover:text-white'} transition-colors duration-300 ${!editable ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {uploadingImage ? 'Updating...' : 'Update Image'}
            </button>
          </div>
        </div>
        <form className="w-full max-w-4xl">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full name</label>
            <input
              type="text"
              name="fullName"
              value={`${profileData.firstName || ""} ${profileData.lastName || ""}`}
              className={`w-full px-4 py-2 border rounded-md transition-all duration-300 bg-gray-100 ${editable ? 'border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200' : 'border-gray-300'}`}
              readOnly={!editable}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email || ""}
              className={`w-full px-4 py-2 border rounded-md transition-all duration-300 bg-gray-100 ${editable ? 'border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200' : 'border-gray-300'}`}
              readOnly={!editable}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone number</label>
            <input
              type="text"
              name="mobile"
              value={profileData.mobile || ""}
              className={`w-full px-4 py-2 border rounded-md transition-all duration-300 bg-gray-100 ${editable ? 'border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200' : 'border-gray-300'}`}
              readOnly={!editable}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between mt-6">
            <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300" onClick={handleEdit}>
              Edit
            </button>
            {editable && (
              <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-colors duration-300" onClick={handleSave} disabled={savingForm}>
                {savingForm ? 'Saving...' : 'Save profile'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
