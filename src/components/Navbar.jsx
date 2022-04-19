import { FcSearch } from "react-icons/fc";
import { ContextHandler } from "../context/Context";
import { FaLightbulb, FaCameraRetro, FaRegNewspaper } from "react-icons/fa";
import { AiFillVideoCamera } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = ({ mode, setMode }) => {
  const { delayValue, query } = ContextHandler();
  return (
    <div className="w-full border-b pt-5 pb-3">
      <div className="w-full lg:w-[90%] lg:px-0 px-10 mx-auto  flex flex-wrap items-start justify-between">
        <div className="bg-blue-500 cursor-pointer text-white align-middle px-3 py-1 rounded-md shadow-md">
          <FcSearch size="1.2rem" className="mr-2 inline-block align-middle" />
          <h5 className="text-base font-semibold inline-block align-middle">
            Googl
          </h5>
        </div>
        <div className="w-full xl:mt-0 mt-5 xl:w-[420px] order-3 xl:order-2 align-middle">
          <input
            onChange={delayValue}
            type="search"
            placeholder="search"
            className="w-full bg-white shadow-lg py-2 px-3 rounded-full"
          />
          <div className="w-full dark:text-white  text-gray-700 ml-3 mt-5 flex items-center">
            <Link to="/search">
              <span className="flex text-sm font-semibold  items-center mr-4">
                <FcSearch size="1rem" className="mr-2" />
                All
              </span>
            </Link>
            <Link to="/image">
              <span className="flex text-sm font-semibold  items-center mr-4">
                <FaCameraRetro size="1rem" className="mr-2" />
                Images
              </span>
            </Link>
            <Link to="/news">
              <span className="flex text-sm font-semibold  items-center mr-4">
                <FaRegNewspaper size="1rem" className="mr-2" />
                News
              </span>
            </Link>
            <Link to="/video">
              <span className="flex text-sm font-semibold  items-center mr-3">
                <AiFillVideoCamera size="1rem" className="mr-2" />
                Videos
              </span>
            </Link>
          </div>
        </div>
        <div className="w-[45%] text-right xl:order-3 order-2 align-middle">
          <button
            onClick={() => setMode(!mode)}
            className="bg-blue-500 py-1 px-3 rounded-full  text-white font-semibold"
          >
            <FaLightbulb
              size="0.90rem"
              className="mr-1 inline-block align-middle text-sm"
            />
            {mode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
