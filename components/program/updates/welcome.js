import React from 'react';

const Welcome = ({setIsForm,goBack,day,week}) => {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="text-center p-4 md:p-0">
        <div className="mb-4">
          <span className="bg-gray-100 text-cta py-1 px-3 rounded-full inline-block shadow-sm">
            week {week}
          </span>
        </div>
        <h1 className="text-5xl font-bold mb-4">
          time to submit<br /> update #{day}
        </h1>
        <p className="text-gray-400 mb-8">
          Describe the progress of your idea attach related imagesor video for review
        </p>
        <div className="flex justify-center space-x-4">
          <button onClick={()=>setIsForm(true)} className="bg-cta text-white py-2 px-4 rounded-md hover:scale-105">
          i&apos;m ready
          </button>
          <button onClick={()=>goBack()} className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200">
            go-back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
