import React from 'react';

const PremiumCard = () => {
  return (
    <div className="bg-green-300 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 space-x-0 md:space-x-4 w-full md:w-1/2">
      <div className="space-y-4 text-center md:text-left">
        <button className="bg-green-50 text-green-700 text-xs font-semibold py-1 px-2 rounded-full">
          IMPORTANT
        </button>
        <div className="text-xl font-bold text-gray-800">
          Week 1 Update Pending
        </div>
        <div className="text-gray-600">
          Submit the Week 1 Update soon
        </div>
        <button className="bg-green-600 text-white py-2 px-4 rounded-full">
          Update
        </button>
      </div>
      <div className="flex items-center justify-center">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0ZM32 58.6279C16.6765 58.6279 5.37209 47.3235 5.37209 32C5.37209 16.6765 16.6765 5.37209 32 5.37209C47.3235 5.37209 58.6279 16.6765 58.6279 32C58.6279 47.3235 47.3235 58.6279 32 58.6279Z"
            fill="#D1C4E9"
          />
          <path
            d="M46.6262 41.9302L50.757 33.2525L44.5863 27.0818L35.9086 31.2126L40.0394 39.8903L46.6262 41.9302Z"
            fill="#7E57C2"
          />
          <path
            d="M17.3738 22.0698L13.243 30.7475L19.4137 36.9182L28.0914 32.7874L23.9606 24.1097L17.3738 22.0698Z"
            fill="#9575CD"
          />
          <path
            d="M46.6262 22.0698L40.0394 24.1097L35.9086 32.7874L44.5863 36.9182L50.757 30.7475L46.6262 22.0698Z"
            fill="#9575CD"
          />
          <path
            d="M17.3738 41.9302L23.9606 39.8903L28.0914 31.2126L19.4137 27.0818L13.243 33.2525L17.3738 41.9302Z"
            fill="#7E57C2"
          />
        </svg>
      </div>
    </div>
  );
};

export default PremiumCard;
