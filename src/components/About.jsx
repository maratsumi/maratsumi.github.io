import React from "react";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiReact,
  SiJavascript,
  SiMysql,
  SiPhp,
} from "react-icons/si";
import { BsPlus } from "react-icons/bs";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1f2429] text-gray-100">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1080px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="text-left sm:text-right pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#e98adf]">
              Skills
            </h1>
          </div>
        </div>
        <div className="max-w-[1080px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="hidden sm:flex sm:text-right justify-end text-3xl font-bold pointer-events-none">
            <ul className="about-list">
              <li className="flex mx-auto items-end justify-end py-1">
                Languages:
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                Java
                <FaJava className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                HTML & CSS
                <IoLogoHtml5 className="ml-3" /> <BsPlus /> <IoLogoCss3 />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                jQuery
                <SiJquery className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                Tailwind
                <SiTailwindcss className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                Bootstrap
                <SiBootstrap className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                Javascript
                <SiJavascript className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                React.js
                <SiReact className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                SQL
                <SiMysql className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                PHP
                <SiPhp className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                C++
                <SiCplusplus className="ml-3" />
              </li>
            </ul>
          </div>
          <div className="text-left flex text-xl font-bold sm:hidden">
            <ul className="about-list">
              <li className="flex mx-auto items-end justify-start py-1">
                Languages:
              </li>
              <li className="flex mx-auto items-end justify-start">
                <FaJava className="mr-3" />
                Java
              </li>
              <li className="flex mx-auto items-end justify-start">
                <IoLogoHtml5 /> <BsPlus /> <IoLogoCss3 className="mr-3" />
                HTML + CSS
              </li>
              <li className="flex mx-auto items-end justify-start">
                <SiTailwindcss className="mr-3" />
                Tailwind
              </li>
              <li className="flex mx-auto items-end justify-start">
                <SiJavascript className="mr-3" />
                Javascript
              </li>
              <li className="flex mx-auto items-end justify-start">
                <SiReact className="mr-3" />
                React.js
              </li>
              <li className="flex mx-auto items-end justify-start">
                <SiMysql className="mr-3" />
                SQL
              </li>
              <li className="flex mx-auto items-end justify-start">
                <SiPhp className="mr-3" />
                PHP
              </li>
              <li className="flex mx-auto items-end justify-start">
                <SiCplusplus className="mr-3" />
                C++
              </li>
              <li className="flex mx-auto items-end justify-start text-sm">
                ... jQuery, Bootstrap
              </li>
            </ul>
          </div>
          <div className="text-left flex text-xl font-bold pointer-events-none sm:text-3xl">
            <ul className="about-list">
              <li className="flex mx-auto sm:items-end items-center justify-start">
                Soft Skills:
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                Time Management
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                Communication
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                Critical Thinking
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                Teamwork
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                Flexibility
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                Self-management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
