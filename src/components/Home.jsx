import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1d2126]">
      <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-[#e997e1] text-4xl sm:text-5xl font-bold text-center pb-2">
          ✿ Angelo Vitug ✿
        </h1>
        <h2 className="text-[#fcbbd3] text-2xl sm:text-xl font-bold text-center">
          ~ Programmer ~
        </h2>
        <p className="text-gray-100 text-2xl sm:text-xl py-6 max-w-full text-center">
          Hello, I'm Angelo Vitug! You can call me Angelo or Gelo. I am a
          programming student who strives to soon become a software developer,
          backend developer, or website developer in the future! Driven by the
          passion to constantly learn and solve problems, I wish to put my
          critical thinking and logical reasoning skills to great use.
        </p>
        <div className="mx-auto">
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
