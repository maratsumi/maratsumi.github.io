import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/placeholder.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-5 bg-[#1a1d20] text-gray-200">
      <div>
        <img
          src={Logo}
          alt="Logo Image"
          style={{ width: "50px", borderRadius: "12px" }}
        />
      </div>
      <div>
        <ul className="hidden md:flex">
          <li
            className="hover:bg-[#282b2e] transition ease-in-out duration-200"
            style={{ borderRadius: "8px" }}
          >
            Home
          </li>
          <li
            className="hover:bg-[#282b2e] transition ease-in-out duration-200"
            style={{ borderRadius: "8px" }}
          >
            About
          </li>
          <li
            className="hover:bg-[#282b2e] transition ease-in-out duration-200"
            style={{ borderRadius: "8px" }}
          >
            Work
          </li>
          <li
            className="hover:bg-[#282b2e] transition ease-in-out duration-200"
            style={{ borderRadius: "8px" }}
          >
            Contact
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
        <li className="py-5 text-3xl">Home</li>
        <li className="py-5 text-3xl">About</li>
        <li className="py-5 text-3xl">Work</li>
        <li className="py-5 text-3xl">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
