"use client";
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { WelcomeChat } from './welcomeModal';
import Messages from './Messages';
import ChatBox from './ChatBox';

const Chat = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSendMessage = async (text) => {
    if (!chatStarted) setChatStarted(true);

    // Update the state with the user's message
    setMessages((prev) => [...prev, { text, sender: 'user' }]);

    try {
      // Make API call to get the bot's response
      const response = await fetch('https://sprint-earn-ai.onrender.com/generate-response', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: '069bdkhfasbkfb', // replace with the actual session ID if needed
          input: text,
        }),
      });

      const data = await response.json();

      // Update the state with the bot's response
      setMessages((prev) => [
        ...prev,
        { text: data.response, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      // Handle error, e.g., show an error message
      setMessages((prev) => [
        ...prev,
        { text: 'Sorry, something went wrong. Please try again.', sender: 'bot' },
      ]);
    }
  };

  return (
    <div className="h-screen flex flex-col relative">
      {/* Header */}
      <header className="flex items-center justify-end md:justify-between p-4 bg-white shadow-md z-1">
        <div className="hidden md:block text-xl font-bold">Sprint Earn AI</div>
        <div className="flex items-center space-x-4">
          <button className="md:hidden" onClick={toggleSidebar}>
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-grow flex-row-reverse overflow-hidden">
        {/* Sidebar */}
        <div
          className={`fixed md:relative top-0 right-0 h-full w-3/4 max-w-xs bg-white p-4 shadow-md transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-20 md:w-1/4 md:translate-x-0 md:h-auto md:max-w-none`}
        >
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h2 className="text-lg font-bold">Recent Chats</h2>
            <button onClick={toggleSidebar}>
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <ul className="space-y-2 overflow-y-auto">
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">New Project</li>
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">Learning From 100 Years of...</li>
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">Research Officiants</li>
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">What does a senior lead de...</li>
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">Write a sweet note to your...</li>
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">Meet with cake bakers</li>
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">Meet with cake bakers</li>
          </ul>
        </div>

        {/* Overlay for Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main Area */}
        <div className="flex-grow flex flex-col justify-center items-center overflow-hidden bg-[#edf0f5]">
          {chatStarted ? (
            <div className="flex-grow w-full overflow-y-auto">
              <Messages messages={messages} />
            </div>
          ) : (
            <WelcomeChat />
          )}

          {/* Fixed ChatBox */}
          <div className="w-full shadow-sm p-4 bg-transparent fixed bottom-12 md:bottom-0 left-0 right-0 md:relative">
            <ChatBox onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
