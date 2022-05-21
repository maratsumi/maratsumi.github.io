import React from "react";
import WorkImg from "../assets/StudentInformationSystem.png";
import redoThumb from "../assets/redothumbnail.png";
import eftisfun from "../assets/tarkovisfunthumb.png";

const Work = () => {
  return (
    <div name="works" className="w-full md:h-screen text-gray-100 bg-[#1d2126]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-[#e98adf]">
            Works
          </h1>
          <h2 className="py-6 text-xl">
            These are works I have completed, be it programming or videos.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 items-center">
          <div className="shadow-lg shadow-[#040c16] rounded-md justify-center items-center mx-auto">
            <div
              style={{ backgroundImage: `url(${redoThumb})` }}
              className="rounded-lg items-center mb-5"
            >
              <div className="opacity-0 hover:opacity-100 justify-center items-center text-center p-5 transition ease-in-out duration-300 rounded-lg content-div">
                <span className="text-2xl font-bold text-gray-100 tracking-wider">
                  Redo Video
                </span>
                <div className="pt-4">
                  <a href="https://youtu.be/r5Fv9onriMQ" target="_blank">
                    <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 transform hover:scale-105 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                      YouTube
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${eftisfun})` }}
              className="rounded-lg items-center"
            >
              <div className="opacity-0 hover:opacity-100 justify-center items-center text-center p-5 transition ease-in-out duration-300 rounded-lg content-div">
                <span className="text-2xl font-bold text-gray-100 tracking-wider">
                  Tarkov is Fun Video
                </span>
                <div className="pt-4">
                  <a href="https://youtu.be/m7PzlXFiyi8" target="_blank">
                    <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 transform hover:scale-105 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                      YouTube
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] rounded-md justify-center items-center mx-auto">
            <div
              style={{ backgroundImage: `url(${WorkImg})` }}
              className="rounded-lg items-center"
            >
              <div className="opacity-0 hover:opacity-100 justify-center items-center text-center p-5 transition ease-in-out duration-300 rounded-lg content-div">
                <span className="text-2xl font-bold text-gray-100 tracking-wider">
                  Student Information System
                </span>
                <div className="pt-4">
                  <a
                    href="https://github.com/maratsumi/Student-Information-System-CIIT-QA"
                    target="_blank"
                  >
                    <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 transform hover:scale-105 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
