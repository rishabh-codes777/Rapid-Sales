// components/SkeletonPaymentOptions.js
import React from "react";

const SkeletonPaymentOptions = () => {
  return (
    <div
      className="flex flex-col min-h-screen text-black space-y-8 animate-pulse"
      style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row w-11/12 lg:w-3/5 border border-bg-primary rounded-md">
          {/* Sidebar */}
          <div className="w-full md:w-1/3 bg-bg-secondary rounded-t-md md:rounded-l-md md:rounded-t-none text-black p-4 md:p-8 space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl bg-gray-300 h-6 w-1/2"></h2>
            <div className="bg-white text-black p-4 rounded-lg space-y-2">
              <div className="text-gray-600 bg-gray-300 h-4 w-1/3"></div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-left bg-gray-300 h-6 w-1/3"></div>
                <div className="text-lg text-left text-green-600 font-semibold bg-gray-300 h-4 w-1/4"></div>
                <div className="text-2xl md:text-3xl font-bold border-t border-gray-500 text-left bg-gray-300 h-6 w-1/3"></div>
              </div>
            </div>

            <div className="bg-white text-black p-4 rounded-lg flex flex-col">
              <div className="flex items-center space-x-2">
                <div className="w-full border border-bg-primary rounded-md p-2 bg-gray-300 h-10"></div>
                <button className="text-lg font-semibold text-green-600 bg-gray-300 h-10 w-1/4"></button>
              </div>
              <div className="text-sm text-green-500 text-start mt-2 bg-gray-300 h-4 w-1/2"></div>
              <div className="text-sm text-red-500 text-start mt-2 bg-gray-300 h-4 w-1/2"></div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="w-full md:w-2/3 bg-white p-4 md:p-8 rounded-b-md md:rounded-r-md md:rounded-b-none h-auto md:h-[70vh]">
            <div className="text-lg md:text-xl font-semibold mb-4 md:mb-6 bg-gray-300 h-6 w-1/3"></div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div className="border border-bg-primary p-4 rounded-lg">
                  <div className="mb-4 bg-gray-300 h-4 w-1/4"></div>
                  <div className="mb-4 bg-gray-300 h-10 w-full rounded-lg"></div>
                  <div className="mb-4 bg-gray-300 h-4 w-1/4"></div>
                  <div className="mb-4 bg-gray-300 h-10 w-full rounded-lg"></div>
                  <div className="mb-4 bg-gray-300 h-4 w-1/4"></div>
                  <div className="mb-4 bg-gray-300 h-10 w-full rounded-lg"></div>
                  <button className=" text-white w-full py-2 rounded-full font-bold bg-gray-300 h-10"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonPaymentOptions;
