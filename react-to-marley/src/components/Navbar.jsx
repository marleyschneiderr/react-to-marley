import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../assets/MS.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const doClick = () => setNavbar(!navbar);

  return (
    <div className="fixed w-full h-[85px] flex justify-between items-center px-4 bg-[#f25c54] text-white">
      <div>
        <img scr={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>

      {/* Navbar hamburger */}
      <div onClick={doClick} className="md:hidden z-10">
        <FaBars />
      </div>

      {/* Responsive for mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#f25c54] flex flex-col justify-center items-center"
        }
      >
        <li className="py-5 text-4xl">Home</li>
        <li className="py-5 text-4xl">Portfolio</li>
        <li className="py-5 text-4xl">Contact</li>
        <li className="py-5 text-4xl">Resume</li>
      </ul>

      {/* Social media icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
