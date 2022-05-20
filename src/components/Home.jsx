import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1d2126]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-[#ec87e2] text-6xl sm:text-5xl font-bold">
          ✿ Maratsumi ✿
        </h1>
        <p className="text-[#ebebeb] text-3xl sm:text-xl py-6 max-w-[700px]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <div>
          <button
            className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e46fd8] hover:border-[#e46fd8] transition ease-in-out duration-300"
            style={{ borderRadius: "16px" }}
          >
            More About Me <FaRegArrowAltCircleRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
