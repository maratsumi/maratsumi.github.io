import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1d2126]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-[#e98adf] text-5xl font-bold text-center">
          ✿ Maratsumi ✿
        </h1>
        <h2 className="text-[#fcbbd3] text-2xl sm:text-xl font-bold text-center">
          Any Pronouns | Eng/Fil ok!
        </h2>
        <p className="text-gray-100 text-3xl sm:text-xl py-6 max-w-[936px] text-center">
          Heyo ! Welcome to my website ! Currently, Im still working on this
          website and will keep updating it as I go !
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button
              className="text-white border-2 px-6 py-3 my-2 mx-auto flex items-center hover:bg-[#e07ad6] hover:border-[#e07ad6] transition ease-in-out duration-300"
              style={{ borderRadius: "16px" }}
            >
              Read More <FaRegArrowAltCircleRight className="ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
