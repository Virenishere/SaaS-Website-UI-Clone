import React from "react";
import cursorimg from "../../assets/cursor.png";
import messageimg from "../../assets/message.png";
import ArrowNavSVG from "./SVG/ArrowNavSVG";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero relative bg-gradient-to-t from-[#a16bd8] from-20% via-[#4c209b] via-40% to-black to-90% min-h-screen -z-20">
      <div className="radial"></div>

      {/* herocontent */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10 space-y-6 px-4 text-center">
        <div className="flex justify-center hover:bg-gray-200 transition cursor-pointer">
          <button className="flex items-center px-6 py-2 border border-gray-500 rounded-lg bg-transparent text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:px-8 xl:py-3">
            Version 2.0 is here{" "}
            <span className="text-white ml-1">Read more</span>
            <ArrowNavSVG />
          </button>
        </div>

        <div className="midcontent pt-8">
          {/* cursoricon */}
          <div className="cursoricon absolute left-[2.25rem] sm:left-[3rem] md:left-[-5rem] lg:left-[5rem] xl:left-[8rem] hidden sm:block">
            <img src={cursorimg} alt="Cursor Icon" />
          </div>

          {/* midcontent */}
          <span className="midtext">
            One Task
            <br />
            at a Time
          </span>

          {/* messageicon */}
          <div className="messageicon absolute top-[14.25rem] right-[1.25rem] md:right-[-2.5rem] lg:right-[3rem] xl:right-[8rem] xl:top-[20rem] hidden sm:block">
            <img src={messageimg} alt="Message Icon" />
          </div>
        </div>

        <p className="paratext w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[30vw] xl:w-[20vw] text-xl text-white">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>

        <div className="relative ">
          <button className="bg-white text-black px-6 py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:bg-gray-200 transition">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
