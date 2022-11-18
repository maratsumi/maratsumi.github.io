import React from "react";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

const Socials = () => {
  return (
    <div name="socials" className="w-full h-full bg-[#1f2429] text-gray-100">
      <div>
        <div className="max-w-[1080px] mx-auto p-5 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#e98adf]">
              Contact Me
            </h1>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center justify-center py-8 ">
            <div className="facebookIcon">
              <a
                href="https://www.facebook.com/ange.low.cc"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook
                  size={70}
                  className="mx-auto mb-2 hover:scale-110 transition ease-out duration-500"
                />
              </a>
              <h1 className="text-gray-300 pt-2">Angelo Vitug</h1>
            </div>
            <div className="emailIcon">
              <HiOutlineMail
                size={70}
                className="mx-auto mb-2 hover:scale-110 transition ease-out duration-500"
              />
              <h1 className="text-gray-300 pt-2 text-sm sm:text-base">
                angelovitug17@gmail.com<br></br>angelo.vitug@ciit.edu.ph
              </h1>
            </div>
            <div className="phoneIcon">
              <FiPhone
                size={70}
                className="mx-auto mb-2 hover:scale-110 transition ease-out duration-500"
              />
              <h1 className="text-gray-300 pt-2">+63 966 332 6876</h1>
            </div>
            <div className="githubIcon">
              <a
                href="https://github.com/maratsumi"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub
                  size={70}
                  className="mx-auto mb-2 hover:scale-110 transition ease-out duration-500"
                />
              </a>
              <h1 className="text-gray-300 pt-2">maratsumi</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
