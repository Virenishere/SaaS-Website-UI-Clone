import React from "react";
import heliximg from "../../assets/helix.png";
import chartimg from "../../assets/emojistar.png";

const GetAccess = () => {
  return (
    <div className="bg-[#030303] text-gray-400 h-[472px] flex items-center justify-center">
      <div className="flex flex-row text-center w-full">
        {/* staricon */}
        <div className="rightimg">
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
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-4 sm:space-y-0">
            <input
              type="text"
              placeholder="name@email.com"
              className="px-4 py-3 w-full max-w-xs sm:max-w-md bg-[#333333] text-gray-200 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-6 py-3 md:px-2 md:py-1 md:h-10 md:w-48 bg-white text-black rounded-md font-medium hover:bg-gray-200 w-full sm:w-auto text-xs sm:text-base">
              Get access
            </button>
          </div>
        </div>

        {/* gearicon */}
        <div className="flex items-end">
          <img src={heliximg} alt="3D Chart" />
        </div>
      </div>
    </div>
  );
};

export default GetAccess;
