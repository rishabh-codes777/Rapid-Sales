import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import { FaSearch, FaBell } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';

const Navbar = ({ signOut }) => {
  return (
    <div className='w-full flex justify-center bg-white shadow-md text-black rounded-lg'>
      <div className="flex justify-between items-center w-full md:w-7/5 px-8 py-2 md:px-30 md:py-4">
        {/* Dashboard title */}
        <h2 className='text-xl md:text-2xl font-bold'>
          Dashboard
        </h2>

        {/* Search bar */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full md:w-2/3">
            <FaSearch 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              aria-label="Search Icon"
            />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-12 pr-4 py-2 bg-gray-100 rounded-full text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Right side of the navbar */}
        <div className="flex items-center space-x-4">
          {/* Language selection */}
          <div className="flex items-center space-x-1">
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"  // Direct URL to the Indian flag image
              alt="Indian Flag"
              width={20}  // Specify width
              height={20} // Specify height
            />
            <span className="text-sm">Ujj (Ind)</span>
            <MdArrowDropDown className="text-gray-400" />
          </div>

          {/* Notification bell */}
          <div className="relative">
            <FaBell 
              className="text-gray-400 text-xl"
              aria-label="Notifications"
            />
            {/* Notification dot */}
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          </div>

          {/* User profile section */}
          <div className="flex items-center space-x-2">
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" // Path to the uploaded image
              alt="Profile"
              width={32}
              height={42}
              className="rounded-full"
            />
            <div className="text-sm">
              <span className="font-bold">Mahi Bhai</span> {/* Name */}
              <div className="text-xs text-gray-500">Admin</div> {/* Role Label */}
            </div>
            <MdArrowDropDown className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
