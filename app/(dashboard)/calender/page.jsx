
'use client'
  import React, { useState } from 'react';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  
  const ScheduleTable = () => {
    const [selectedWeek, setSelectedWeek] = useState('Week 1');
  
    const schedule = [
      {
        day: 'Day 1',
        tasks: [
          { type: 'Week 1', content: 'Oatmeal-with-raisins', color: 'bg-[#c8beff]' },
          { type: 'Week 2', content: 'Italian ragu with sausages', color: 'bg-[#ffceb8]' },
          { type: 'Week 3', content: 'Pick-up groceries for grandma', color: 'bg-[#b2eeff]' },
          { type: 'Week 4', content: 'Badminton', color: 'bg-[#cbfccf]' },
          { type: 'Week 5', content: 'Oatmeal-with-raisins', color: 'bg-[#c0dfff]' },
          { type: 'Week 6', content: 'Oatmeal-with-raisins', color: 'bg-[#ffecab]' }
        ],
      },
      {
        day: 'Day 2',
        tasks: [
          { type: 'Week 1', content: 'Egg wrap', color: 'bg-[#c8beff]' },
          { type: 'Week 2', content: 'Chickpea stew', color: 'bg-[#ffceb8]' },
          { type: 'Week 3', content: 'Replant the new plants', color: 'bg-[#b2eeff]' },
          { type: 'Week 4', content: 'Yoga session', color: 'bg-[#cbfccf]' },
          { type: 'Week 5', content: 'Oatmeal-with-raisins', color: 'bg-[#c0dfff]' },
          { type: 'Week 6', content: 'Oatmeal-with-raisins', color: 'bg-[#ffecab]' }
        ],
      },
      {
        day: 'Day 3',
        tasks: [
          { type: 'Week 1', content: 'Sandwich', color: 'bg-[#c8beff]' },
          { type: 'Week 2', content: 'Chicken with rice', color: 'bg-[#ffceb8]' },
          { type: 'Week 3', content: 'Unpack and store the tent', color: 'bg-[#b2eeff]' },
          {
            type: 'Week 4',
            content: (
              <div className="flex items-center justify-center space-x-1">
                <i className="fas fa-hiking text-[#cbfccf]"></i>
                <i className="fas fa-umbrella-beach text-[#cbfccf]"></i>
                <i className="fas fa-campground text-[#cbfccf]"></i>
                <span>Hiking trip to Soča valley</span>
              </div>
            ),
            color: 'bg-[#cbfccf]',
          },
          { type: 'Week 5', content: 'Oatmeal-with-raisins', color: 'bg-[#c0dfff]' },
          { type: 'Week 6', content: 'Oatmeal-with-raisins', color: 'bg-[#ffecab]' }
        ],
      },
      {
        day: 'Day 4',
        tasks: [
          { type: 'Week 1', content: 'Sandwich', color: 'bg-[#c8beff]' },
          { type: 'Week 2', content: 'Chicken salad with pesto genovese', color: 'bg-[#ffceb8]' },
          { type: 'Week 3', content: 'Do the weekly shopping', color: 'bg-[#b2eeff]' },
          { type: 'Week 4', content: '', color: 'bg-[#cbfccf]' },
          { type: 'Week 5', content: 'Oatmeal-with-raisins', color: 'bg-[#c0dfff]' },
          { type: 'Week 6', content: 'Oatmeal-with-raisins', color: 'bg-[#ffecab]' }
        ],
      },
      {
        day: 'Day 5',
        tasks: [
          { type: 'Week 1', content: 'Oatmeal with honey cinnamon and bananas', color: 'bg-[#c8beff]' },
          { type: 'Week 2', content: 'Vegetarian pizza', color: 'bg-[#ffceb8]' },
          { type: 'Week 3', content: 'Apartment spring cleaning', color: 'bg-[#b2eeff]' },
          { type: 'Week 4', content: '', color: 'bg-[#cbfccf]' },
          { type: 'Week 5', content: 'Oatmeal-with-raisins', color: 'bg-[#c0dfff]' },
          { type: 'Week 6', content: 'Oatmeal-with-raisins', color: 'bg-[#ffecab]' },
        ],
      },
      {
        day: 'Day 6',
        tasks: [
          { type: 'Week 1', content: 'Oatmeal with honey cinnamon and bananas', color: 'bg-[#c8beff]' },
          { type: 'Week 2', content: 'Greek chicken wraps', color: 'bg-[#ffceb8]' },
          { type: 'Week 3', content: 'Pack for the hiking trip', color: 'bg-[#b2eeff]' },
          { type: 'Week 4', content: 'Badminton', color: 'bg-[#cbfccf]' },
          { type: 'Week 5', content: 'Oatmeal-with-raisins', color: 'bg-[#c0dfff]' },
          { type: 'Week 6', content: 'Oatmeal-with-raisins', color: 'bg-[#ffecab]' },
        ],
      },
      {
        day: 'Sunday 7',
        tasks: [
          { type: 'Week 1', content: 'Bananas and yoghurt', color: 'bg-[#c8beff]' },
          { type: 'Week 2', content: 'Fish stew', color: 'bg-[#ffceb8]' },
          { type: 'Week 3', content: '', color: 'bg-[#b2eeff]' },
          { type: 'Week 4', content: '', color: 'bg-[#cbfccf]' },
          { type: 'Week 5', content: 'Oatmeal-with-raisins', color: 'bg-[#c0dfff]' },
          { type: 'Week 6', content: 'Oatmeal-with-raisins', color: 'bg-[#ffecab]' },
        ],
      },
    ];
  
    const taskTypes = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];
  
    const renderDesktopView = () => (
      <table className="min-w-full border-collapse w-4/5">
        <thead>
          <tr className="sticky left-0 top-0 right-0">
            <th className="p-4 border-b-2 border-gray-200 bg-gray-400 text-left"></th>
            {schedule.map((day, index) => (
              <th key={index} className="p-4 border-b-2 border-gray-200 bg-gray-400 text-left">
                {day.day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {taskTypes.map((type, index) => (
            <tr key={index}>
              <td className="p-4 border-b border-gray-200 bg-gray-100">
                <div className="flex justify-center items-center h-full w-full">
                  <span className="transform -rotate-90">{type}</span>
                </div>
              </td>
              {schedule.map((day, dayIndex) => {
                const task = day.tasks.find((task) => task.type === type);
                return (
                  <td key={dayIndex} className="p-4 border border-gray-200">
                    <div className={`rounded-lg p-4 ${task?.color} shadow-md`}>
                      {task?.content}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  
    const renderMobileView = () => (
      <div className="w-[100vw] h-[100dvh] overflow-auto">
        <div className="flex space-x-4 bg-white p-2 overflow-x-scroll">
          {taskTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedWeek(type)}
              className={`px-2 py-0.5 rounded-full text-sm border font-semibold text-nowrap ${
                selectedWeek === type ? ' border-cta text-cta' : 'border-black text-black'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="mt-2 p-2">
          {schedule.map((day, index) => {
            const task = day.tasks.find((task) => task.type === selectedWeek);
            return (
              <div key={index} className="flex items-center justify-around p-2 border border-gray-200 mb-2 rounded-lg shadow-md">
                <h3 className="font-bold mb-1 text-center text-sm flex-1">{day.day}</h3>
                <div className={`${task?.color} p-3 rounded-lg shadow-md text-center text-sm w-3/5`}>
                  {task?.content || 'No task scheduled'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
    return (
      <div className=" h-screen overflow-y-scroll bg-white text-black ">
        <div className="hidden md:block">{renderDesktopView()}</div>
        <div className="block md:hidden">{renderMobileView()}</div>
      </div>
    );
  };
  
  export default ScheduleTable;
  