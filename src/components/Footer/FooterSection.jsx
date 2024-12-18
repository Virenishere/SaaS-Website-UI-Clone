import React from "react";
import TwitterSVG from "./SVG/TwitterSVG";
import InstagramSVG from "./SVG/InstagramSVG";
import PinterestSVG from "./SVG/PinterestSVG";
import LinkedinSVG from "./SVG/LinkedinSVG";
import TiktokSVG from "./SVG/TiktokSVG";
import YoutubeSVG from "./SVG/YoutubeSVG";

const FooterSection = () => {
  return (
    <footer className="bg-[#030303] text-[#808080] py-6 md:px-10 lg:px-10 ">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="items-center text-center md:text-left text-sm space-y-3 md:space-y-3">
          &copy; 2024 Your Company, Inc. All rights reserved
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end space-x-3">
          <a href="#" className="cursor-pointer">
            <TwitterSVG />
          </a>
          <a href="#" className="cursor-pointer">
            <InstagramSVG />
          </a>
          <a href="#" className="cursor-pointer">
            <PinterestSVG />
          </a>
          <a href="#" className="cursor-pointer">
            <LinkedinSVG />
          </a>
          <a href="#" className="cursor-pointer">
            <TiktokSVG />
          </a>
          <a href="#" className="cursor-pointer">
            <YoutubeSVG />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
