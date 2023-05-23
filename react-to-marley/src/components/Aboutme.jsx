import React from "react";

const Aboutme = () => {
  return (
    <div name="aboutme" className="w-full h-screen bg-[#2d00f7] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1010px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-5 border-[#F20089]">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1010px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello! 🦋 I'm Marley, welcome to my portfolio. Check out my work!
            </p>
          </div>

          <div>
            <p>
            Marley here 🤟. I am a Full-Stack Web Developer in training. I'm just a few weeks away from completing my bootcamp, and I can't wait to get started in the tech industry. I graduated from Washington State University in May 2022 with a BA in Advertising and a BA in Digital Technology and Culture. I am currently employed as a Customer Solutions Representative at ChemPoint in Bellevue, Washington. I am eager to begin my career in development . My primary focus right now is on developing a variety of projects to demonstrate my bootcamp learnings. I enjoy developing react and node.js applications and look forward to creating passion projects that I am proud of.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
