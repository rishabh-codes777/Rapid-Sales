import React from 'react';

const WelcomeCard = () => {
  return (
    <div className="bg-gradient-to-r from-[#30C67C] to-[#82F4B1] rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 md:w-24 md:h-24">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-500 w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a7 7 0 017 7v6a7 7 0 01-7 7H5a5 5 0 01-5-5V7a5 5 0 015-5h7z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h4v10h-4M5 16h10M5 8h4m2 0h4m2 0h4M5 12h6m2 0h4m2 0h4" />
          </svg>
        </div>
      </div>
      <div className="text-white text-center md:text-left">
        <div className="text-xl md:text-3xl font-bold">6 Week Earning Money Program</div>
        <div className="mt-2 text-sm md:text-lg">Learn to start earning money from building the product and service which can pay you</div>
        <button className="mt-4 bg-white text-blue-500 py-2 px-4 rounded-full">Buy Now</button>
      </div>
    </div>
  );
};

export default WelcomeCard;
