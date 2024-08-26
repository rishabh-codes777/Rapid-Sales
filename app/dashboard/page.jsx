import React from 'react';

const MonopolyUI = () => {
  const createBox = (text, bgColor) => (
    <div className={`flex items-center justify-center border-2 border-black ${bgColor} text-white`}>
      {text}
    </div>
  );

  const createBoxT = (dayNumber, dayName, bgColor) => (
    <div className="flex flex-col-reverse border-2 border-black bg-white">
      <div className={`flex items-center justify-center py-2 font-bold  ${bgColor}`} style={{ height: '5vh' }}>
        {dayNumber}
      </div>
      <div className="flex items-center h-[7vh] justify-center  text-center">
        {dayName}
      </div>
    </div>
  );

  const createBoxB = (dayNumber, dayName, bgColor) => (
    <div className="border-2 border-black bg-white">
      <div className={`flex items-center justify-center py-2 font-bold ${bgColor}`} style={{ height: '5vh' }}>
        {dayNumber}
      </div>
      <div className="flex items-center h-[7vh] justify-center  text-center">
        {dayName}
      </div>
    </div>
  );


  const createBoxL = (dayNumber, dayName, bgColor) => (
    <div className="flex flex-row-reverse items-center w-[11.11111vw] justify-center border-2 border-black bg-white">
      <div className={`flex items-center text-wrap text-center px-2 justify-center ${bgColor} text-black font-bold`} style={{ width: '3vw', height: '100%' }}>
        {dayNumber}
      </div>
      <div className="flex items-center text-center justify-center w-full text-gray-800">
        {dayName}
      </div>
    </div>
  );

  
  const createBoxR = (dayNumber, dayName, bgColor) => (
    <div className="flex  items-center w-[11.11111vw] justify-center border-2 border-black bg-white">
      <div className={`flex items-center text-wrap text-center px-2 justify-center ${bgColor} text-black font-bold`} style={{ width: '3vw', height: '100%' }}>
        {dayNumber}
      </div>
      <div className="flex items-center text-center justify-center w-full text-gray-800">
        {dayName}
      </div>
    </div>
  );

  const labs = (labName, bgColor) => (
    <div className= {`border-2 border-black ${bgColor} text-black  shadow-lg flex items-center  justify-center text-lg font-semibold `}>
      {labName}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-blue-50">
      <div className="grid grid-cols-9 w-full">
        {createBox('DAY 1', 'bg-[#183e4b] ')}
        {createBoxT('DAY 2', "Social Media Strategies",'bg-[#fd93fa]')}
        {createBoxT('DAY 3', "Email Marketing Essentials",'bg-[#fd93fa]')}
        {createBoxT('DAY 4', "Content Marketing Magic",'bg-[#fd93fa]')}
        {labs("Marketing Lab","bg-[#FF69B4]")}
        {createBoxT('DAY 1', "Sales Funnel Basics",'bg-[#7f8192]')}
        {createBoxT('DAY 2', "Conversion Optimization",'bg-[#7f8192]')}
        {createBoxT('DAY 3', "Pricing Strategies",'bg-[#7f8192]')}
        {createBox('Go To Jail', 'bg-[#183e4b] text-white')}
      </div>
      <div className="flex w-full h-full">
        <div className="grid grid-rows-7">
          {labs("Branding Lab","bg-[#32CD32]")}
          {createBoxL('DAY 4', "Positioning Strategies",'bg-[#93fd96]')}
          {createBoxL('DAY 3', "Messaging & Storytelling",'bg-[#93fd96]')}
          {createBoxL('DAY 2', "Visual Branding",'bg-[#93fd96]')}
          {createBoxL('DAY 1', "Brand Identity Basics",'bg-[#93fd96]')}
          {labs("Development Lab","bg-[#FFA500]")}
          {createBoxL('DAY 4', "Development Techniques",' bg-[#fdcb93]')}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-3xl font-bold">Sprint Earn</div>
        </div>
        <div className="grid grid-rows-7">
          {labs("Sales Lab","bg-[#5e606c]")}
          {createBoxR('DAY 1', "Pre-Launch Preparation",' bg-[#8e7ef0]')}
          {createBoxR('DAY 2', "Launch Day Planning",' bg-[#8e7ef0]')}
          {createBoxR('DAY 3', "Post-Launch Strategies",' bg-[#8e7ef0]')}
          {createBoxR('DAY 4', "Growth Hacking",' bg-[#8e7ef0]')}
          {createBox('Demo Day', 'bg-[#6156a4] text-white  font-bold text-2xl')}
        </div>
      </div>
      <div className="grid grid-cols-9 w-full">
        {createBox('DAY 3', 'bg-[#183e4b] ')}
        {createBoxB('DAY 2', "Product Blueprint",'bg-[#fdcb93]')}
        {createBoxB('DAY 1', "Content Creation Kickoff",'bg-[#fdcb93]')}
        {labs("Validation Lab","bg-[#1E90FF]")}
        {createBoxB('DAY 4', "Value Proposition Creation",'bg-blue-300')}
        {createBoxB('DAY 3', " Niche Discovery",'bg-blue-300')}
        {createBoxB('DAY 2', "Market Research Magic",'bg-blue-300')}
        {createBoxB('DAY 1', "Spark Your Idea",'bg-blue-300')}
        {createBox('← Start', 'bg-[#007f4e] text-2xl')}
      </div>
    </div>
  );
};

export default MonopolyUI;
