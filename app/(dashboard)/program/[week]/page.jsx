import WeekHeader from "@/components/program/weekheader";
import '@fortawesome/fontawesome-free/css/all.min.css';
import getData from "../getdata";
import DaysList from "@/components/program/weeks/dayslist";

const Program = async ({ params }) => {
    const data = await getData();
    const week = params.week;
    const weekNumber = week.match(/\d+/)[0];
    const weekDetail = data[weekNumber - 1];

    return (
        <div className="h-screen bg-white flex flex-col space-y-4 px-4 md:px-8 overflow-scroll pb-20 md:pb-0">
            <div className="pt-4">
                <WeekHeader weekDetail={weekDetail} />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
                <div className="w-full md:w-2/3 text-black md:p-4 space-y-4">
                    <h1 className="text-xl font-bold">Task List</h1>
                    <DaysList weekDetail={weekDetail} />
                </div>
                <div className="w-full md:w-1/3 text-black">
                    <h1 className="text-xl font-bold">Activity</h1>
                    <div>
                        {/* Add Activity Content Here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;
