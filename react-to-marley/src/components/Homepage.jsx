import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profileImage from "./images/profile-image.png"; // Replace with your own image file

const Homepage = () => {
  return (
    <div id="home" name="homepage" className="w-full h-screen bg-[#2d00f7]">
      {/* Responsive for mobile menu */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex items-center">
          <div>
            <p className="text-[#E500A4] font-bold">Welcome! My name is</p>
            <h1 className="text-3xl sm:text-7xl font-bold text-[#ccd6f6]">
              Marley Schneider
            </h1>
            <h2 className="text-3xl sm:text-7xl font-bold text-[#E500A4]">
              I am an aspiring Full Stack Web Developer.
            </h2>
            <p className="text-[#ccd6f6] py-5 max-w-[750px]">
              I love building websites. I am currently enrolled in the
              University of Washington's full stack web development bootcamp
              program. I am actively discovering my niche and passion for a
              variety of full-stack web application languages.
            </p>
            <div>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E500A4] hover:border-[#E500A4]">
                <a href="#portfolio" className="flex items-center">
                  View Work
                  <span className="group-hover:rotate-180 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </a>
              </button>
            </div>
          </div>
          <div className="w-50 h-50 rounded-full overflow-hidden ml-4">
            {/* Circle profile image */}
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
