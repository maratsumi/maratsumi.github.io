import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { TbFlower } from "react-icons/tb";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed z-10 w-screen h-[60px] flex justify-between items-center px-5 bg-[#1a1d20] text-gray-200">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <div className="hover:rotate-12 transition ease-out duration-300 hover:text-pink-400">
            <TbFlower size={35} />
          </div>
        </Link>
      </div>
      <div>
        <ul className="hidden md:flex">
          <li
            className="hover:bg-[#282b2e] transition ease-in-out duration-300 py-1"
            style={{ borderRadius: "8px" }}
          >
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li
            className="hover:bg-[#282b2e] transition ease-in-out duration-300 py-1"
            style={{ borderRadius: "8px" }}
          >
            <Link to="about" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li
            className="hover:bg-[#282b2e] transition ease-in-out duration-300 py-1"
            style={{ borderRadius: "8px" }}
          >
            <Link to="works" smooth={true} duration={500}>
              Works
            </Link>
          </li>
          <li
            className="hover:bg-[#282b2e] transition ease-in-out duration-300 py-1"
            style={{ borderRadius: "8px" }}
          >
            <Link to="socials" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className="md:hidden flex z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#1a1d20] flex flex-col justify-center items-center"
        }
      >
        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="works" smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="socials" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
