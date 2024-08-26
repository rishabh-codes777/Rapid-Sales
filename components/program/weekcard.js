import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CourseCard = ({ data, currentWeek, currentDay }) => {
  let isLock = currentWeek < data.week;
  let percentage;

  if (currentWeek === data.week) {
    percentage = ((currentDay - 1) / 7) * 100;
  } else if (currentWeek > data.week) {
    percentage = 100;
  } else {
    percentage = 0;
  }

  return (
    <div
      className="rounded-lg p-6 shadow-md cursor-pointer"
      style={{ backgroundColor: data.bgcolor, cursor: isLock ? 'not-allowed' : 'pointer' }}
    >
      <div className="flex justify-between items-start">
        <div className="text-xs text-gray-500" style={{ color: data.color }}>
          Start: <span className="text-gray-800">20 Aug</span>
        </div>
        <div className="bg-purple-100 p-2 rounded-full">
          {isLock ? (
            <i className="fas fa-lock text-lg" style={{ color: data.color }}></i>
          ) : (
            <i className="fas fa-mobile-alt text-lg" style={{ color: data.color }}></i>
          )}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-lg font-bold" style={{ color: data.color }}>
          Week {data.week}
        </div>
        <div className="mt-4 text-gray-800 font-bold">{data.title}</div>
        <div className="hidden md:block mt-1 text-gray-600 text-sm">{data.description}</div>
      </div>
      <div className="mt-4">
        <div className="text-xs text-gray-500">Progress</div>
        <div className="mt-1 h-2 bg-gray-200 rounded-full relative">
          <div
            className="absolute top-0 left-0 h-2 bg-white rounded-full"
            style={{ width: `${percentage.toFixed()}%`, backgroundColor: data.color }}
          ></div>
        </div>
        <div className="mt-2 text-xs text-gray-500 text-right">{percentage.toFixed()}%</div>
      </div>
    </div>
  );
};

export default CourseCard;
