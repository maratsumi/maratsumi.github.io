import React from "react";
import { FaJava } from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiBootstrap,
  SiPandas,
  SiReact,
  SiMysql,
  SiPhp,
  SiPython,
  SiJavascript,
  SiDjango,
  SiFigma,
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
                Technical Skills:
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                Java
                <FaJava className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                JavaScript
                <SiJavascript className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                Python
                <SiPython className="ml-3" />
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
                Django
                <SiDjango className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                Pandas
                <SiPandas className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                Figma
                <SiFigma className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                TailwindCSS
                <SiTailwindcss className="ml-3" />
              </li>
              <li className="flex mx-auto items-end justify-end py-1">
                Bootstrap
                <SiBootstrap className="ml-3" />
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
          <div className="text-left flex text-2xl font-bold sm:hidden pointer-events-none">
            <ul className="about-list">
              <li className="flex mx-auto items-end justify-start py-1">
                Technical Skills:
              </li>
              <li className="flex mx-auto items-end justify-start">
                <FaJava className="mr-3" />
                Java
              </li>
              <li className="flex mx-auto items-end justify-start">
                <SiJavascript className="mr-3" />
                JavaScript
              </li>
              <li className="flex mx-auto items-end justify-start">
                <SiPython className="mr-3" />
                Python
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
                <SiPandas className="mr-3" />
                Pandas
              </li>
              <li className="flex mx-auto items-end justify-start">
                <SiDjango className="mr-3" />
                Django
              </li>{" "}
              <li className="flex mx-auto items-end justify-start">
                <SiFigma className="mr-3" />
                Figma
              </li>
              <li className="flex mx-auto items-end justify-start">
                <SiTailwindcss className="mr-3" />
                TailwindCSS
              </li>
              <li className="flex mx-auto items-end justify-start text-md">
                ... C++, PHP, Bootstrap
              </li>
            </ul>
          </div>
          <div className="text-left flex text-2xl font-bold pointer-events-none sm:text-3xl">
            <ul className="about-list">
              <li className="flex mx-auto sm:items-end items-center justify-start">
                Soft Skills:
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                IT Management
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                Strategic Management
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                Communication
              </li>{" "}
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                Collaboration
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                Innovation
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                Critical Thinking
              </li>
              <li className="flex mx-auto sm:items-end items-center justify-start">
                <BsPlus className="mr-1" />
                User Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
