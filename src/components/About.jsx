import React from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1f2429] text-gray-100">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="text-left sm:text-right pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#e98adf]">
              About
            </h1>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="hidden sm:flex sm:text-right justify-end text-3xl font-bold pointer-events-none">
            <ul className="about-list">
              <li className="flex mx-auto items-end justify-end py-1">
                Mara
                <HiOutlineChevronLeft className="ml-1" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                06/20
                <HiOutlineChevronLeft className="ml-1" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                Eng/Fil Ok!
                <HiOutlineChevronLeft className="ml-1" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                Any Pronouns
                <HiOutlineChevronLeft className="ml-1" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                Gaming gamer uau
                <HiOutlineChevronLeft className="ml-1" />
              </li>
            </ul>
          </div>
          <div className="text-left flex sm:hidden text-3xl font-bold pointer-events-none">
            <ul className="about-list">
              <li className="flex mx-auto items-end justify-start py-1">
                <HiOutlineChevronRight className="mr-1" />
                Mara
              </li>
              <li className="flex mx-auto items-end justify-start py-1">
                <HiOutlineChevronRight className="mr-1" />
                06/20
              </li>
              <li className="flex mx-auto items-end justify-start py-1">
                <HiOutlineChevronRight className="mr-1" />
                Eng/Fil Ok!
              </li>
              <li className="flex mx-auto items-end justify-start py-1">
                <HiOutlineChevronRight className="mr-1" />
                Any Pronouns
              </li>
              <li className="flex mx-auto items-end justify-start py-1">
                <HiOutlineChevronRight className="mr-1" />
                Gaming gamer uau
              </li>
            </ul>
          </div>
          <div className="text-left flex text-2xl font-bold pointer-events-none">
            <ul className="about-list">
              <li className="flex mx-auto sm:items-end items-center justify-start py-1">
                <BsPlus className="mr-1" />
                Video Games !
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start py-1">
                <BsPlus className="mr-1" />
                Utattemita + Jpop
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start py-1">
                <BsPlus className="mr-1" />
                Jibaku Shounen Hanako-kun
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start py-1">
                <BsPlus className="mr-1" />
                More ( ◡‿◡✿ )
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
