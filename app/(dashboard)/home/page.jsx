"use client";

import ChatBox from "@/components/home/chatbox";
import ProgressCards from "@/components/home/progress";
import PremiumCard from "@/components/home/task";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col space-y-4 px-4 md:px-8 text-black pb-20 md:pb-0">
      <div className="text-lg md:text-xl font-bold mt-4 text-left">
        👋 Welcome, Mohit Goyal!
      </div>
      <div className="w-full">
        <ChatBox />
      </div>
      <div className="w-full space-y-4">
        <h1 className="font-semibold text-xl md:text-2xl text-bg-primary">Progress</h1>
        <ProgressCards />
      </div>
      <div className="space-y-4">
        <h1 className="font-semibold text-xl md:text-2xl text-bg-primary">Update</h1>
        <PremiumCard />
      </div>
    </div>
  );
};

export default Home;
