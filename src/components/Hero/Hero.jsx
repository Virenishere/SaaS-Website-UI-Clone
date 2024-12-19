import React from "react";
import cursorimg from "../../assets/cursor.png";
import messageimg from "../../assets/message.png";
import herosectionimg from "../../assets/herosection.png";
import ArrowNavSVG from "./SVG/ArrowNavSVG";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative">
        <img src={herosectionimg} alt="" />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10 space-y-6 px-4 text-center">
        <div className="flex justify-center">
          <button className="flex items-center px-4 py-2 border border-gray-500 rounded-lg bg-transparent text-gray-300 hover:bg-gray-800 hover:border-gray-400 hover:text-white transition duration-200">
            Version 2.0 is here{" "}
            <span className="text-white ml-1">Read more</span>
            <ArrowNavSVG />
          </button>
        </div>

        <div className="pt-8">
          <span className="flex w-[600px] h-[250px] justify-center items-start shrink-0 font-['DM_Sans'] text-[165px] font-bold leading-[125px] text-[#fff] tracking-[-12.38px] relative text-center overflow-hidden z-10">
            One Task
            <br />
            at a Time
          </span>
        </div>

        <p className="flex w-[457px] h-[93px] justify-center items-start pt-8 text-lg md:text-xl max-w-2xl mx-auto text-white">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>

        <div className="pt-8">
          <button className="mt-10 bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-200 transition">
            Get for free
          </button>
        </div>
      </div>

      {/* icons */}
      <div className="absolute top-80 left-64 animate-float">
        <img src={cursorimg} alt="Cursor Icon" />
      </div>
      <div className="absolute top-64 right-56 animate-float delay-150">
        <img src={messageimg} alt="Message Icon" />
      </div>
    </div>
  );
};

export default Hero;
