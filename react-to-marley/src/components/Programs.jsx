import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Programs = () => {
  return (
    <div name="Programs" className="w-full h-screen bg-[#2d00f7] text-white">
      <div className="max-w-[1010px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#F20089]">Language Experience</p>
          <p className="py-5">I have built applications using these languages</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="bg-[#F20089] shadow-md shadow-[#040c16] hover:scale-120 duration-600">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="my-5">HTML</p>
          </div>
          <div className="bg-[#F20089] shadow-md shadow-[#040c16] hover:scale-120 duration-600">
            <img className="w-20 mx-auto" src={JavaScript} alt="Javascript Icon" />
            <p className="my-5">JavaScript</p>
          </div>
          <div className="bg-[#F20089] shadow-md shadow-[#040c16] hover:scale-120 duration-600">
            <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
            <p className="my-5">CSS</p>
          </div>
          <div className="bg-[#F20089] shadow-md shadow-[#040c16] hover:scale-120 duration-600">
            <img className="w-20 mx-auto" src={Node} alt="Node.js Icon" />
            <p className="my-5">Node.js</p>
          </div>
          <div className="bg-[#F20089] shadow-md shadow-[#040c16] hover:scale-120 duration-600">
            <img className="w-20 mx-auto" src={GitHub} alt="Github Icon" />
            <p className="my-5">GitHub</p>
          </div>
          <div className="bg-[#F20089] shadow-md shadow-[#040c16] hover:scale-120 duration-600">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind Icon" />
            <p className="my-5">Tailwind</p>
          </div>
          <div className="bg-[#F20089] shadow-md shadow-[#040c16] hover:scale-120 duration-600">
            <img className="w-20 mx-auto" src={Mongo} alt="MongoDB Icon" />
            <p className="my-5">MongoDB</p>
          </div>
          <div className="bg-[#F20089] shadow-md shadow-[#040c16] hover:scale-120 duration-600">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p className="my-5">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
