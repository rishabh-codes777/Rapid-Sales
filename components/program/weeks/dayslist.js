'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { checkUser } from '@/utils/auth';
import Loader from '@/components/loader'; // Import the Loader component

const DaysList = ({ weekDetail }) => {
    const [current, setCurrent] = useState(null); // Initialize with null to handle loading state
    const [isLoading, setIsLoading] = useState(true); // State to manage loading

    useEffect(() => {
        const fetchCurrent = async () => {
            setIsLoading(true); // Start loading
            const data = await checkUser();
            const currentWeek = data.currentWeek;
            if (weekDetail.week < currentWeek) setCurrent(8);
            else if (weekDetail.week > currentWeek) setCurrent(0);
            else {
                setCurrent(data.currentDay);
            }
            setIsLoading(false); // Stop loading after data is fetched
        };

        fetchCurrent();
    }, [weekDetail.week]);

    if (isLoading) {
        return <Loader />; // Display Loader while data is being fetched
    }

    return (
        <div className="flex flex-col space-y-6">
            {weekDetail.days.map((day, index) => (
                <div key={index}>
                    {index + 1 > current ?
                        <div className="flex pl-8 pr-3 py-2 justify-between items-center border border-slate-700 rounded-full shadow-md hover:scale-[1.02] transition-all">
                            <div className='hidden md:block'><i className={`far fa-calendar mr-3`}></i>{`Day ${index + 1}`}</div>
                            <div className='flex flex-col md:hidden'>{` ${index + 1}`}</div>
                            <h1 className="font-semibold text-sm md:text-lg text-center">{day.title}</h1>
                            <i className={`fas fa-lock md:mr-10`}></i>
                        </div>
                        :
                        <Link href={`/program/week${weekDetail.week}/day${day.day}`}>
                            <div className="flex pl-8 pr-3 py-2 justify-between items-center border border-slate-700 rounded-full shadow-md hover:scale-[1.02] transition-all">
                                <div className='hidden md:block'><i className={`far fa-calendar mr-3`}></i>{`Day ${index + 1}`}</div>
                                <div className='flex flex-col md:hidden'>{` ${index + 1}`}</div>
                                <h1 className="font-semibold text-sm md:text-lg text-center">{day.title}</h1>
                                
                                <Link href={`/program/week${weekDetail.week}/day${day.day}`}>
                                    <button className={`${index + 1 < current ? "bg-[#e4e4e7] rounded-3xl text-black " : "bg-[#2d2de1] rounded-3xl text-white "} text-sm md:text-base px-4 md:px-6 py-1.5 md:py-2.5 hidden md:block`}>
                                        {index + 1 < current ? "View" : "Start"}
                                    </button>
                                    <div className={`${index + 1 < current ? " text-black  " : " text-cta "} text-2xl flex justify-center items-center  md:hidden`}>
                                        <i className="fa-solid fa-angle-right"></i>
                                    </div>
                                </Link>
                                
                            </div>
                        </Link>
                    }
                </div>
            ))}
        </div>
    );
};

export default DaysList;
