import Image from 'next/image';
import React from 'react';

const WeekHeader = ({ weekDetail }) => {
    return (
        <div className="bg-gradient-to-r from-[#71e794] to-[#f4f2ff] rounded-lg p-8 flex flex-col md:flex-row-reverse items-center justify-between space-y-4 md:space-y-0 md:space-x-8"
            style={{ backgroundImage: `linear-gradient(to right, ${weekDetail.color}, ${weekDetail.bgcolor})` }}
        >
            <div className="flex items-center space-x-4">
                <div className="w-32 h-32">
                    <Image src="/calender.png" width={1024} height={1024} alt="calender" className="opacity-50" />
                </div>
            </div>
            <div className="text-white text-center md:text-left">
                <div className="text-lg font-semibold bg-slate-100 w-fit rounded-full px-2 mx-auto md:mx-0" style={{ color: weekDetail.color }}>
                    Week {weekDetail.week}
                </div>
                <div className="text-4xl font-bold">{weekDetail.title}</div>
                <div className="mt-2 text-lg">{weekDetail.description}</div>
            </div>
        </div>
    );
};

export default WeekHeader;
