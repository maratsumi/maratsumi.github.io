import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1d2126]">
      <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-[#e997e1] text-4xl sm:text-5xl font-bold text-center pb-2">
          Gelo
        </h1>
        <h2 className="text-[#fcbbd3] text-xl sm:text-xl font-bold text-center">
          ~~ Software Developer & IT Manager ~~
        </h2>
        <div className="inline md:flex content-center items-center pointer-events-none">
          <p className="text-gray-100 text-base text-justify px-3 sm:text-xl py-6 sm:px-10 max-w-full sm:text-center">
            Experienced in building applications using Java, React, JavaScript,
            and Python. Contributed to production websites used by real
            organizations and hackathon-winning prototypes. Utilizing skills in
            IT management and strategic management to build IT systems and
            solutions for clients. Aspiring to make social impact through
            technology and innovation.
          </p>
        </div>
        <div className="flex mx-auto items-end">
          <Link to="works" smooth={true} duration={500}>
            <button
              className="text-white border-2 px-6 py-3 my-2 mx-auto flex items-center hover:bg-[#e07ad6] hover:border-[#e07ad6] transition ease-in-out duration-300"
              style={{ borderRadius: "16px" }}
            >
              See My Projects <BsChevronDoubleRight className="ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
