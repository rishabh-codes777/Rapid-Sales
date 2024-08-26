import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProgressCards = () => {
  return (
    <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex-1 bg-[#d42358] rounded-lg p-4 flex items-center space-x-4">
        <div className="bg-[#e57b9b] p-2 rounded-full">
          <i className="fas fa-chart-line text-white text-2xl"></i>
        </div>
        <div>
          <div className="text-white text-2xl font-bold">0%</div>
          <div className="text-white text-sm">Completed</div>
        </div>
      </div>
      <div className="flex-1 bg-[#7025ea] rounded-lg p-4 flex items-center space-x-4">
        <div className="bg-[#36296a] p-2 rounded-full">
          <i className="fas fa-check-circle text-white text-2xl"></i>
        </div>
        <div>
          <div className="text-white text-2xl font-bold">Week 1</div>
          <div className="text-white text-sm">Current week</div>
        </div>
      </div>
      <div className="flex-1 bg-[#b106cd] rounded-lg p-4 flex items-center space-x-4">
        <div className="bg-[#d06ae1] p-2 rounded-full">
          <i className="fas fa-star text-white text-2xl"></i>
        </div>
        <div>
          <div className="text-white text-3xl font-bold">0</div>
          <div className="text-white text-lg">Task Submitted</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCards;
