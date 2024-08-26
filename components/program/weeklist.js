'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CourseCard from "@/components/program/weekcard";
import { checkUser } from '@/utils/auth';
import Loader from '@/components/loader'; // Import the Loader component

const WeekList = ({ data }) => {
    const [currentWeek, setCurrentWeek] = useState(null); // Initialize with null to handle loading state
    const [currentDay, setCurrentDay] = useState(1);
    const [isLoading, setIsLoading] = useState(true); // State to manage loading

    useEffect(() => {
        const fetchCurrentWeek = async () => {
            setIsLoading(true); // Start loading
            const data = await checkUser();
            const result = data.currentWeek;
            setCurrentWeek(result);
            setCurrentDay(data.currentDay);
            setIsLoading(false); // Stop loading after data is fetched
        };

        fetchCurrentWeek();
    }, []);

    if (isLoading) {
        return <Loader />; // Display Loader while data is being fetched
    }

    return (
        <div className="grid grid-cols-2 gap-4 grid-flow-row-dense"
             style={{ gridTemplateAreas: `"card1 card2" 
                                           "fullCard1 fullCard1" 
                                           "card3 card4" 
                                           "fullCard2 fullCard2"` }}>
            {data.map((weekData, index) => {
                let areaName = '';
                switch (index) {
                    case 0:
                        areaName = 'card1';
                        break;
                    case 1:
                        areaName = 'card2';
                        break;
                    case 2:
                        areaName = 'fullCard1';
                        break;
                    case 3:
                        areaName = 'card3';
                        break;
                    case 4:
                        areaName = 'card4';
                        break;
                    case 5:
                        areaName = 'fullCard2';
                        break;
                    default:
                        areaName = '';
                }

                return (
                    <div key={index} style={{ gridArea: areaName }}>
                        {index + 1 <= currentWeek ? (
                            <Link href={`/program/week${index + 1}`}>
                                <CourseCard data={weekData} currentDay={currentDay} currentWeek={currentWeek} />
                            </Link>
                        ) : (
                            <div className="opacity-80">
                                <CourseCard data={weekData} currentWeek={currentWeek} />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default WeekList;
