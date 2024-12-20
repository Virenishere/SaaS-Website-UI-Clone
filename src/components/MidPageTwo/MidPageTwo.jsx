import React from "react";
import AppNightImg from "../../assets/AppNight.png";

const MidPageTwo = () => {
  return (
    <div className="bg-gradient-to-b from-[#030303] to-[#4d258e] h-full w-full ">
        <div className="text-center mb-8">
        <h2 className="text-6xl font-bold text-white pt-24">Intuitive interface</h2>
        <p className="mt-2 text-gray-400 max-w-lg text-2xl mx-auto">
        Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.
        </p>
      </div>
        <div className="flex justify-center items-center py-14 px-11">
            <img src={AppNightImg} alt="App Night"/></div>
          
    </div>
  );
};

export default MidPageTwo;
