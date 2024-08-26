import CourseCard from "@/components/program/weekcard";
import WelcomeCard from "@/components/program/welcome";
import getData from "./getdata";
import WeekList from "@/components/program/weeklist";

const Program = async () => {
  const data = await getData();

  return (
    <div className="min-h-screen bg-white flex flex-col space-y-4 px-4 md:px-8 overflow-scroll pb-20 md:pb-0">
      <div className="pt-4">
        <WelcomeCard />
      </div>
      <div className="space-y-4">
        <h1 className="font-semibold text-xl md:text-2xl text-black">Program Details</h1>
        <WeekList data={data} />
      </div>
    </div>
  );
};

export default Program;
