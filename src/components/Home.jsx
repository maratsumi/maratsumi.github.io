import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-scroll";
import onebyone from "../assets/1by1.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1d2126]">
      <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-[#e997e1] text-4xl sm:text-5xl font-bold text-center pb-2">
          Angelo Vitug
        </h1>
        <h2 className="text-[#fcbbd3] text-xl sm:text-xl font-bold text-center">
          -- Software Developer --
        </h2>
        <div className="inline md:flex content-center items-center pointer-events-none">
          <img
            src={onebyone}
            alt="1by1"
            className="w-56 mx-auto md:w-72 h-auto rounded-3xl pt-2 md:pb-2"
          />
          <p className="text-gray-100 text-base text-justify px-3 sm:text-xl py-6 sm:px-10 max-w-full sm:text-left">
            Aspiring software developer driven by the passion to constantly
            learn and solve problems. Seeking to make a social impact through
            information technology and software that empowers users.
          </p>
        </div>
        <div className="flex mx-auto items-end">
          <Link to="about" smooth={true} duration={500}>
            <button
              className="text-white border-2 px-6 py-3 my-2 mx-auto flex items-center hover:bg-[#e07ad6] hover:border-[#e07ad6] transition ease-in-out duration-300"
              style={{ borderRadius: "16px" }}
            >
              Read More <BsChevronDoubleRight className="ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
