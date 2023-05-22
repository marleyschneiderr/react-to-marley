import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {HiOutlineMail} from 'react-icons/hi';
import Logo from "../assets/MS.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const doClick = () => setNavbar(!navbar);

  return (
    <div className="fixed w-full h-[85px] flex justify-between items-center px-4 bg-[#720026] text-white">
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
        {!navbar ? <FaBars /> : <FaTimes />}
      </div>

      {/* Responsive for mobile menu */}
      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#720026] flex flex-col justify-center items-center"
        }
      >
        <li className="py-5 text-4xl">Home</li>
        <li className="py-5 text-4xl">Portfolio</li>
        <li className="py-5 text-4xl">Contact</li>
        <li className="py-5 text-4xl">Resume</li>
      </ul>

      {/* Social media icons */}
      <div className="flex fixed flex-col top-[40%] left-0">
        <ul>
          <li className="w-[165p] h-[65px] flex justify-between items-center ">
              <a className="flex justify-between items-center w-full text-white-300" href="/">
                Linkedin <FaFacebook size={40}/>
              </a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
