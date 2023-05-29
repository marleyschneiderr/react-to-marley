import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "./images/msLOGO.png";

const Navbar = () => {
//   const [navbar, setNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleClick = (section) => {
    setActiveSection(section);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="fixed w-full h-[85px] flex justify-between items-center px-4 bg-[#2d00f7] text-white">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
      </div>

      {/* Menu */}
      <ul className={`hidden md:flex ${mobileMenuOpen ? "hidden" : ""}`}>
        <li>
          <a
            href="#home"
            onClick={() => handleClick("home")}
            className={activeSection === "home" ? "active-link" : ""}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#aboutme"
            onClick={() => handleClick("aboutme")}
            className={activeSection === "aboutme" ? "active-link" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={() => handleClick("skills")}
            className={activeSection === "skills" ? "active-link" : ""}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handleClick("portfolio")}
            className={activeSection === "portfolio" ? "active-link" : ""}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contactme"
            onClick={() => handleClick("contactme")}
            className={activeSection === "contactme" ? "active-link" : ""}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1N2RQcF8eYyeHvDkHhPPcsAvQ6zo__P01/view?usp=sharing"
            className={activeSection === "resume" ? "active-link" : ""}
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Navbar hamburger */}
      <div onClick={toggleMobileMenu} className="md:hidden z-10">
        {!mobileMenuOpen ? <FaBars /> : <FaTimes />}
      </div>

      {/* Responsive mobile menu */}
      {mobileMenuOpen && (
        <ul className="fixed top-0 left-0 w-full h-screen bg-[#2d00f7] flex flex-col justify-center items-center">
          <li className="py-5 text-4xl">
            <a href="#home" onClick={() => handleClick("home")}>
              Home
            </a>
          </li>
          <li className="py-5 text-4xl">
            <a href="#aboutme" onClick={() => handleClick("aboutme")}>
              About
            </a>
          </li>
          <li className="py-5 text-4xl">
            <a href="#skills" onClick={() => handleClick("skills")}>
              Skills
            </a>
          </li>
          <li className="py-5 text-4xl">
            <a href="#portfolio" onClick={() => handleClick("portfolio")}>
              Portfolio
            </a>
          </li>
          <li className="py-5 text-4xl">
            <a href="#contactme" onClick={() => handleClick("contactme")}>
              Contact
            </a>
          </li>
          <li className="py-5 text-4xl">
            <a href="https://drive.google.com/file/d/1N2RQcF8eYyeHvDkHhPPcsAvQ6zo__P01/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
      )}
      {/* Social media icons */}
      <div className="hidden lg:flex fixed flex-col top-[40%] left-0">
        <ul>
          <li className="w-[165p] h-[65px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#db00b6]">
            <a
              className="flex justify-between items-center w-full text-white-300"
              href="https://github.com/marleyschneiderr"
            >
              Github <FaGithub size={40} />
            </a>
          </li>
          <li className="w-[165p] h-[65px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#8900f2]">
            <a
              className="flex justify-between items-center w-full text-white-300"
              href="mailto:marleysue@gmail.com"
            >
              Email <HiOutlineMail size={40} />
            </a>
          </li>
          <li className="w-[165p] h-[65px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#b100e8]">
            <a
              className="flex justify-between items-center w-full text-white-300"
              href="https://drive.google.com/file/d/1N2RQcF8eYyeHvDkHhPPcsAvQ6zo__P01/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={40} />
            </a>
          </li>
          <li className="w-[165p] h-[65px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white-300"
              href="https://www.linkedin.com/in/marley-schneider/"
            >
              Linkedin <FaLinkedin size={40} />
            </a>
          </li>
          <li className="w-[165p] h-[65px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#F20089]">
            <a
              className="flex justify-between items-center w-full text-white-300"
              href="https://www.instagram.com/marleyschneiderr/"
            >
              Instagram <FaInstagram size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
