import React from "react";
import ImpressPng from "../assets/impress-your-friends.png"
import MusicPng from "../assets/music.png"
import SocialPng from "../assets/be-more-social.png"
import TextPng from "../assets/text.png"
import EmployeePng from "../assets/Employee-Tracker.png"
import RegexPng from "../assets/regex.png"


const Projects = () => {
  return (
    <div name="Projects" className="w-full md:h-screen text-white bg-[#2d00f7]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white-300 border-[#F20089]">Portfolio</p>
          <p className="py-6">Check out my recent projects:</p>
        </div>

        <div style={{backgroundImage: `url(${ImpressPng})`}}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[black] group container rounded-md flex justify-center items-center mx-auto div-pics">
            <div>
              <span></span>
              <div>

                <a href="/">
                    <button>

                    </button>
                </a>

                <a href="/">
                    <button>
                        
                    </button>
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
