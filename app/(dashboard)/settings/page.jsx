"use client"
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { checkUser } from '@/utils/auth';
import { updateUserProfile, updateUserPassword } from './api'; 
import Image from 'next/image';
import Loader from '@/components/loader';
import { MoonLoader } from "react-spinners";
import Swal from 'sweetalert2'; // Import Swal

const Settings = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [userData, setUserData] = useState({
    image: '',
    name: '',
    email: '',
    website: '',
    mobile: '',
    description: ''
  });
  const [passwordData, setPasswordData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmittingProfile, setIsSubmittingProfile] = useState(false);
  const [isSubmittingPassword, setIsSubmittingPassword] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const data = await checkUser();
      setUserData({
        image: data.image,
        name: data.name,
        email: data.email,
        website: data.website,
        mobile: data.mobile,
        description: data.description
      });
      setIsLoading(false);
    } 
    fetchUser();
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingProfile(true);
    const response = await updateUserProfile(userData);
    setIsSubmittingProfile(false);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    if (response.status === 200) {
      Toast.fire({
        icon: "success",
        title: "Profile updated successfully"
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "Failed to update profile"
      });
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Passwords do not match!"
      });
      return;
    }

    setIsSubmittingPassword(true);
    const response = await updateUserPassword(userData.email, passwordData.newPassword);
    setIsSubmittingPassword(false);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    if (response.status === 200) {
      Toast.fire({
        icon: "success",
        title: "Password updated successfully"
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "Failed to update password"
      });
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-8 text-black h-screen bg-white overflow-scroll pb-20 md:pb-0">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* Header */}
        <header className="border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-3xl font-bold">Settings</h1>
          <nav className="flex space-x-4 mt-2">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-1 ${activeTab === 'details' ? 'text-[#2d2de1] border-b-2 border-[#2d2de1]' : 'text-gray-600'}`}
            >
              My details
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`pb-1 ${activeTab === 'password' ? 'text-[#2d2de1] border-b-2 border-[#2d2de1]' : 'text-gray-600'}`}
            >
              Password
            </button>
          </nav>
        </header>

        {/* Content Section */}
        {activeTab === 'details' && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <p className="text-gray-600 mb-8">Update your personal details here.</p>

            <form onSubmit={handleProfileSubmit}>
              {/* Profile Photo */}
              <div className="mb-6 flex items-center">
                <div className="mr-4">
                  <Image src={userData.image} width={512} height={512} alt='profile' className="w-24 h-24 rounded-full border border-gray-300" />
                </div>
              </div>

              {/* Name */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Name</label>
                <div className="relative">
                  <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleProfileChange}
                    className="w-full border border-gray-300 rounded-md pl-10 px-4 py-2"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    readOnly
                    className="w-full border border-gray-300 rounded-md pl-10 px-4 py-2  cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Website */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Website</label>
                <div className="relative">
                  <i className="fas fa-globe absolute left-3 top-3 text-gray-400"></i>
                  <input
                    type="text"
                    name="website"
                    value={userData.website}
                    onChange={handleProfileChange}
                    className="w-full border border-gray-300 rounded-md pl-10 px-4 py-2"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Mobile</label>
                <div className="relative">
                  <i className="fas fa-phone absolute left-3 top-3 text-gray-400"></i>
                  <input
                    type="tel"
                    name="mobile"
                    value={userData.mobile}
                    onChange={handleProfileChange}
                    className="w-full border border-gray-300 rounded-md pl-10 px-4 py-2"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Your description</label>
                <div className="relative">
                  <i className="fas fa-info-circle absolute left-3 top-3 text-gray-400"></i>
                  <textarea
                    name="description"
                    value={userData.description}
                    onChange={handleProfileChange}
                    className="w-full border border-gray-300 rounded-md pl-10 px-4 py-2"
                    rows="4"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                <button type="button" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
                <button type="submit" className="bg-[#2d2de1] text-white px-4 py-2 rounded-md flex items-center justify-center" disabled={isSubmittingProfile}>
                  {isSubmittingProfile ? <MoonLoader size={18} color="#ffffff" /> : "Save changes"}
                </button>
              </div>
            </form>
          </section>
        )}

        {activeTab === 'password' && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <p className="text-gray-600 mb-8">Update your password here.</p>

            <form onSubmit={handlePasswordSubmit}>
              {/* New Password */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">New Password</label>
                <div className="relative">
                  <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
                  <input
                    type="password"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    className="w-full border border-gray-300 rounded-md pl-10 px-4 py-2"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Confirm New Password</label>
                <div className="relative">
                  <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    className="w-full border border-gray-300 rounded-md pl-10 px-4 py-2"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                <button type="button" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
                <button type="submit" className="bg-[#2d2de1] text-white px-4 py-2 rounded-md flex items-center justify-center" disabled={isSubmittingPassword}>
                  {isSubmittingPassword ? <MoonLoader size={18} color="#ffffff" /> : "Update Password"}
                </button>
              </div>
            </form>
          </section>
        )}
      </div>
    </div>
  );
};

export default Settings;
