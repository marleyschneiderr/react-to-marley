import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="fixed bottom-4 right-4 flex justify-end items-center">
      <div className="flex">
        <a
          className="w-[165px] h-[65px] text-white flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#2d00f7]"
          href="https://github.com/marleyschneiderr"
        >
            <FaGithub size={40} />
        </a>
        <a
          className="w-[165px] h-[65px] text-white flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#2d00f7]"
          href="https://www.linkedin.com/in/marley-schneider/"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          className="w-[165px] h-[65px] text-white flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#2d00f7]"
          href="https://www.instagram.com/marleyschneiderr/"
        >
          <FaInstagram size={40} />
        </a>
      </div>
    </footer>
  );
};
