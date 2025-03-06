import React from "react";
import WorkImg from "../assets/StudentInformationSystem.png";
import covid19log from "../assets/COVID19Log.png";
import oldwebsite from "../assets/OldWebsite.png";
import pointofsale from "../assets/PointOfSale.png";
import sml from "../assets/shipmentManagementLog.png";
import mugnaweblatest from "../assets/MugnaWebsiteLatest.png";
import mugnawebsecond from "../assets/MugnaWebsiteSecond.png";
import mugnawebfirst from "../assets/MugnaWebsiteFirst.png";
import mugnastellahub from "../assets/MugnaStellaHub.png";
import imSummit2025 from "../assets/IMSummit2025.png";
import "../index.css";

const Work = () => {
  return (
    <div name="works" className="w-full h-full text-gray-100 bg-[#1d2126]">
      <div className="max-w-[1080px] mx-auto p-6 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-[#e98adf]">
            Works
          </h1>
          <h2 className="pt-6 text-xl">
            Here are some of the works I have completed, be it programming,
            videos, etc.
          </h2>
          <h2 className="text-base">
            You can find more in my respective profiles!
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center pb-6">
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div h-60"
          >
            <div className="opacity-0 group-hover:opacity-100 transition ease-in duration-200 p-3">
              <h1 className="text-xl font-bold text-gray-100 tracking-wider pointer-events-none">
                Student Information System
              </h1>
              <p className="text-sm text-gray-100 tracking-wider pointer-events-none">
                This full-fledged application features the use of the CRUD
                system and OOP in Java. Created with NetBeans.
              </p>
              <div className="pt-2">
                <a
                  href="https://github.com/maratsumi/Student-Information-System-CIIT-QA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${oldwebsite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div h-60"
          >
            <div className="opacity-0 group-hover:opacity-100 transition ease-in duration-200 p-3">
              <h1 className="text-xl font-bold text-gray-100 tracking-wider pointer-events-none">
                Portfolio Website (Outdated)
              </h1>
              <p className="text-sm text-gray-100 tracking-wider pointer-events-none">
                This website was the first iteration of my portfolio website.
                jQuery and Bootstrap were used during its creation. Created with
                Visual Studio Code.
              </p>
              <div className="pt-2">
                <a
                  href="https://maratsumi.github.io/maratsumi.github.io-old/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                    Website
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${covid19log})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div h-60"
          >
            <div className="opacity-0 group-hover:opacity-100 transition ease-in duration-200 p-3">
              <h1 className="text-xl font-bold text-gray-100 tracking-wider pointer-events-none">
                COVID-19 Visitor Log (Console/CLI)
              </h1>
              <p className="text-sm text-gray-100 tracking-wider pointer-events-none">
                This console application features the use of OOP using Java.
                Created with NetBeans and Visual Studio Code.
              </p>
              <div className="pt-2">
                <a
                  href="https://github.com/maratsumi/Covid19TrackerJava"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${pointofsale})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div h-60"
          >
            <div className="opacity-0 group-hover:opacity-100 transition ease-in duration-200 p-3">
              <h1 className="text-xl font-bold text-gray-100 tracking-wider pointer-events-none">
                Point of Sale System (Console/CLI)
              </h1>
              <p className="text-sm text-gray-100 tracking-wider pointer-events-none">
                This application features the use of the CRUD system in C++
                using the file create/read/write libraries. Created with Visual
                Studio.
              </p>
              <div className="pt-2">
                <a
                  href="https://github.com/maratsumi/Point-of-sale"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${sml})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div h-60"
          >
            <div className="opacity-0 group-hover:opacity-100 transition ease-in duration-200 p-3">
              <h1 className="text-xl font-bold text-gray-100 tracking-wider pointer-events-none">
                Shipment Management Log
              </h1>
              <p className="text-sm text-gray-100 tracking-wider pointer-events-none">
                This application features the use of the CRUD system using SQL
                and PHP on a functional website. Ran through XAMPP. Created with
                Visual Studio Code.
              </p>
              <div className="pt-2">
                <a
                  href="https://github.com/maratsumi/IM-Project-Proposal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mugnaweblatest})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div h-60"
          >
            <div className="opacity-0 group-hover:opacity-100 transition ease-in duration-200 p-3">
              <h1 className="text-xl font-bold text-gray-100 tracking-wider pointer-events-none">
                Mugna Website Prototype
              </h1>
              <p className="text-sm text-gray-100 tracking-wider pointer-events-none">
                Latest prototype of Mugna's website during my internship.
                Features responsive design. Created in Figma and originally
                exported to Webflow.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.figma.com/file/EJvEdc1eYTWI97qvuwDihv/Mugna-Project-Charlie---PORTFOLIO-VIEWING-ONLY?type=design&node-id=0%3A1&t=DuFhGtPazIZVnKD0-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                    Figma
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mugnastellahub})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div h-60"
          >
            <div className="opacity-0 group-hover:opacity-100 transition ease-in duration-200 p-3">
              <h1 className="text-xl font-bold text-gray-100 tracking-wider pointer-events-none">
                Mugna Solution Prototype
              </h1>
              <p className="text-sm text-gray-100 tracking-wider pointer-events-none">
                Latest prototype of Mugna's solution, StellaHub, during my
                internship. Meant for restaurant franchises. Created in Figma.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.figma.com/file/ZjLgkPevm9J6Qc46UEEruf/StellaHub-Prototype-SAMPLE---PORTFOLIO-VIEWING-ONLY?type=design&node-id=0%3A1&t=dJKeI0vS8g8FefhF-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                    Figma
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mugnawebsecond})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div h-60"
          >
            <div className="opacity-0 group-hover:opacity-100 transition ease-in duration-200 p-3">
              <h1 className="text-xl font-bold text-gray-100 tracking-wider pointer-events-none">
                Mugna Website (Second Iteration)
              </h1>
              <p className="text-sm text-gray-100 tracking-wider pointer-events-none">
                Second prototype of Mugna's website during my internship.
                Features responsive design. Created in Figma and originally
                exported to Webflow.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.figma.com/file/EJvEdc1eYTWI97qvuwDihv/Mugna-Project-Charlie---PORTFOLIO-VIEWING-ONLY?type=design&node-id=0%3A1&t=DuFhGtPazIZVnKD0-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                    Figma
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mugnawebfirst})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div h-60"
          >
            <div className="opacity-0 group-hover:opacity-100 transition ease-in duration-200 p-3">
              <h1 className="text-xl font-bold text-gray-100 tracking-wider pointer-events-none">
                Mugna Website (First Iteration)
              </h1>
              <p className="text-sm text-gray-100 tracking-wider pointer-events-none">
                First prototype of Mugna's website during my internship. Created
                in Figma.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.figma.com/file/8hIDuweLT04OtJOlrSnSUB/Mugna-Project-Charlie-First-Iteration-Prototype-SAMPLE---PORTFOLIO-VIEWING-ONLY?type=design&node-id=0%3A1&t=Z4PyLeZumpOiS1za-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                    Figma
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${imSummit2025})` }} // Need to change max-width
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div h-60"
          >
            <div className="opacity-0 group-hover:opacity-100 transition ease-in duration-200 p-3">
              <h1 className="text-xl font-bold text-gray-100 tracking-wider pointer-events-none">
                IM Summit Website (2025)
              </h1>
              <p className="text-sm text-gray-100 tracking-wider pointer-events-none">
                Website I helped develop for IM Summit, the flagship event of
                Ateneo Management Information Systems Association (MISA)
              </p>
              <div className="pt-2">
                <a
                  href="https://imsummit2025.misa.org.ph"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                    Website
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
