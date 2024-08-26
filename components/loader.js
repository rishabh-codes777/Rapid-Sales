import { PropagateLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
            <PropagateLoader color="#306338" />
            <p className="mt-6 ml-2 text-xl font-semibold">Loading</p>
        </div>
    );
}

export default Loader;
