import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SalesSummary = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg w-full text-black">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold ">Today's Sales</h2>
          <p className="text-gray-500">Sales Summary</p>
        </div>
        <button className="text-blue-600 border border-blue-600 rounded-md py-1 px-4">Export</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#ffe0e5] p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-[#ffb3bc] p-3 rounded-full">
            <i className="fas fa-chart-line text-white text-2xl"></i>
          </div>
          <div>
            <div className="text-xl font-bold">$1k</div>
            <div className="text-sm text-gray-500">Total Sales</div>
            <div className="text-sm text-green-600">+8% from yesterday</div>
          </div>
        </div>
        <div className="bg-[#fff3db] p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-[#ffe0a3] p-3 rounded-full">
            <i className="fas fa-file-invoice text-white text-2xl"></i>
          </div>
          <div>
            <div className="text-xl font-bold">300</div>
            <div className="text-sm text-gray-500">Total Order</div>
            <div className="text-sm text-green-600">+5% from yesterday</div>
          </div>
        </div>
        <div className="bg-[#e6f9ec] p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-[#b0eac1] p-3 rounded-full">
            <i className="fas fa-box-open text-white text-2xl"></i>
          </div>
          <div>
            <div className="text-xl font-bold">5</div>
            <div className="text-sm text-gray-500">Product Sold</div>
            <div className="text-sm text-green-600">+1.2% from yesterday</div>
          </div>
        </div>
        <div className="bg-[#eaeaff] p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-[#c2c4ff] p-3 rounded-full">
            <i className="fas fa-users text-white text-2xl"></i>
          </div>
          <div>
            <div className="text-xl font-bold">8</div>
            <div className="text-sm text-gray-500">New Customers</div>
            <div className="text-sm text-green-600">+0.5% from yesterday</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSummary;
