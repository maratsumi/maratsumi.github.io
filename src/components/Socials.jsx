import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

const Socials = () => {
  return (
    <div name="socials" className="w-full h-full bg-[#1f2429] text-gray-100">
      <div>
        <div className="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#e98adf]">
              Socials
            </h1>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center justify-center py-8 ">
            <div className="hover:scale-110 transition ease-out duration-500 twitterIcon">
              <a href="https://twitter.com/maratsumi" target="_blank">
                <BsTwitter size={70} className="w-20 mx-auto mb-2" />
              </a>
            </div>
            <div className="hover:scale-110 transition ease-out duration-500 steamIcon">
              <a
                href="https://steamcommunity.com/id/flatchams/"
                target="_blank"
              >
                <FaSteam size={70} className="w-20 mx-auto mb-2" />
              </a>
            </div>
            <div className="hover:scale-110 transition ease-out duration-500 youtubeIcon">
              <a
                href="https://www.youtube.com/channel/UCHRplBbkMZDMUFrKNATVCJA"
                target="_blank"
              >
                <FaYoutube size={70} className="w-20 mx-auto mb-2" />
              </a>
            </div>
            <div className="hover:scale-110 transition ease-out duration-500 githubIcon">
              <a href="https://github.com/maratsumi" target="_blank">
                <BsGithub size={70} className="w-20 mx-auto mb-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
