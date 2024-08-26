import React from 'react';

const ChatBox = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-white w-full space-y-2">
        <div className="bg-white shadow-md rounded-xl flex items-center w-full px-4 py-2">
          <textarea
            type="text"
            placeholder="What do you want to build?"
            className="p-4 w-full h-[15vh] focus:outline-none"
          />
        </div>
        <div className="w-full flex justify-end px-4 py-2">
          <button className="bg-[#2d2de1] text-white py-2 px-4 rounded-full">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
