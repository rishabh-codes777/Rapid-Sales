import React, { useState } from 'react';

const ChatBox = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
      <div className="w-full  sticky left-0 right-0 bottom-0 ">
            <div className="flex items-center px-4 rounded-3xl shadow-md border border-neutral-500">
              <textarea
                tabIndex="0"
                rows="1"
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow p-2 rounded-l-full outline-none text-wrap h-12 max-h-14 resize-none bg-[#edf0f5] "
                
              ></textarea>
              <button 
              onClick={handleSendMessage}
              className="bg-cta text-white px-4 py-2 rounded-full">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            
          </div>   
  );
};

export default ChatBox;
