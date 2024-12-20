import React from "react";
import heliximg from "../../assets/helix.png";
import chartimg from "../../assets/emojistar.png";
import "./GetAcess.css";

const GetAccess = () => {
  return (
    <div className="maindiv bg-[#030303] text-gray-400 h-[472px] flex items-center justify-center">
      <div className=" flex flex-row text-center w-full">
        {/* staricon */}
        <div className="charticon absolute hidden lg:block">
          <img src={chartimg} alt="3D Gear" />
        </div>

        {/* content*/}
        <div className="py-32 flex-1">
          <h2 className="text-white text-6xl font-semibold mb-4">
            Get instant access
          </h2>
          <p className="text-gray-400 mb-8 text-base">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              placeholder="name@email.com"
              className="px-4 py-3 w-2/3 max-w-sm bg-[#333333] text-gray-200 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-4 py-3 w-2/3 max-w-sm sm:w-auto bg-white text-black rounded-md font-medium hover:bg-gray-200 text-base">
              Get access
            </button>
          </div>
        </div>

        {/* gearicon */}
        <div className="helixicon absolute right-0 hidden lg:block">
          <img src={heliximg} alt="3D Chart" />
        </div>
      </div>
    </div>
  );
};

export default GetAccess;
