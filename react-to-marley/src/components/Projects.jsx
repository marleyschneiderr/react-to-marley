import React from "react";
import ImpressPng from "../assets/impress.png";
import MusicPng from "../assets/music.png";
import SocialPng from "../assets/be-more-social.png";
import TextPng from "../assets/text.png";
import EmployeePng from "../assets/Employee-Tracker.png";
import RegexPng from "../assets/regex.png";

const Projects = () => {
  return (
    <div name="Projects" className="w-full md:h-screen text-white bg-[#2d00f7]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white-300 border-[#F20089]">
            Portfolio
          </p>
          <p className="py-6">Check out my recent projects:</p>
        </div>

    {/* ENTIRE CONTAINER OF ALL PROJECTS */}
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >

        {/* Project 1 */}
          <div style={{ backgroundImage: `url(${ImpressPng})` }} className="shadow-lg shadow-[black] group container rounded-md flex justify-center items-center mx-auto div-pics">
            
            {/* More Hovering */}
            <div className="opacity-0 hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                Impress Your Friends
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/GrindBoiWes/impress-your-friends">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">Github</button>
                </a>

                <a href="https://grindboiwes.github.io/impress-your-friends/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">Live Link</button>
                </a>
              </div>
            </div>
          </div>

        {/* Project 2 */}
          <div style={{ backgroundImage: `url(${MusicPng})` }} className="shadow-lg shadow-[black] group container rounded-md flex justify-center items-center mx-auto div-pics">
            
            {/* More Hovering */}
            <div className="opacity-0 hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                Music to my Ears
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Ally27/Music-to-My-Ears">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">Github</button>
                </a>

                <a href="https://music-to-my-ears1.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">Live Link</button>
                </a>
              </div>
            </div>
          </div>

        {/* Project 3 */}
          <div style={{ backgroundImage: `url(${SocialPng})` }} className="shadow-lg shadow-[black] group container rounded-md flex justify-center items-center mx-auto div-pics">
            
            {/* More Hovering */}
            <div className="opacity-0 hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                Be More Social 
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/marleyschneiderr/be-more-social">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">Github</button>
                </a>

                <a href="https://drive.google.com/file/d/1hdZl9W89dOukRcrZ6jYHK2YTKBs7Ggl8/view">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">Video</button>
                </a>
              </div>
            </div>
          </div>

        {/* Project 4 */}
          <div style={{ backgroundImage: `url(${TextPng})` }} className="shadow-lg shadow-[black] group container rounded-md flex justify-center items-center mx-auto div-pics">
            
            {/* More Hovering */}
            <div className="opacity-0 hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                PWA Text Editor 
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/marleyschneiderr/edit-dat-txt">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">Github</button>
                </a>

                <a href="https://edit-dat-text.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">Live Link</button>
                </a>
              </div>
            </div>
          </div>


        {/* Project 5 */}
          <div style={{ backgroundImage: `url(${EmployeePng})` }} className="shadow-lg shadow-[black] group container rounded-md flex justify-center items-center mx-auto div-pics">
            
            {/* More Hovering */}
            <div className="opacity-0 hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                Employee Tracker
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/marleyschneiderr/track-that-employee">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">Github</button>
                </a>

                <a href="https://drive.google.com/file/d/1el7poBd9HXd-j2b17cSf5eZObciNBF64/view">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">Video</button>
                </a>
              </div>
            </div>
          </div>

        {/* Project 6 */}
          <div style={{ backgroundImage: `url(${RegexPng})` }} className="shadow-lg shadow-[black] group container rounded-md flex justify-center items-center mx-auto div-pics">
            
            {/* More Hovering */}
            <div className="opacity-0 hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                Regular Expressions
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/marleyschneiderr/computer-science-wizard">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">Github</button>
                </a>

                <a href="https://github.com/marleyschneiderr/computer-science-wizard/blob/main/gist-template.md">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">Regex.md</button>
                </a>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Projects;
