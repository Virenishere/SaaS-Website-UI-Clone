import React from "react";
import LeaficonSVG from "./SVG/LeaficonSVG";

const MidPageOne = () => {
  return (
    <div className="w-full bg-[#030303] text-white py-28 px-11 md:py-44">
      <div className="text-center mb-8">
        <h2 className="text-6xl font-semibold">Everything you need</h2>
        <p className="mt-2 text-2xl text-gray-400 max-w-lg mx-auto">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
      </div>

      {/* Featurescontainer */}
      <div className="grid grid-cols-1 md:grid-cols-1 md:px-40 max-h-6xl h-6xl lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center bg-[#121212] p-6 rounded-lg text-center">
          <div className="bg-white mb-4 rounded-md">
            {" "}
            <LeaficonSVG />{" "}
          </div>
          <h5 className="text-xl font-semibold">Integration ecosystem</h5>
          <p className="text-gray-400 mt-2 text-base">
            Enhance your productivity by connecting with your favorite tools,
            keeping all your essentials in one place.
          </p>
        </div>

        <div className="flex flex-col items-center bg-[#121212] p-6 rounded-lg text-center">
          <div className="bg-white mb-4 rounded-md">
            {" "}
            <LeaficonSVG />{" "}
          </div>
          <h5 className="text-xl font-semibold">Goal setting and tracking</h5>
          <p className="text-gray-400 text-base mt-2">
            Define and track your goals, breaking down objectives into
            achievable tasks to keep your targets in sight.
          </p>
        </div>

        <div className="flex flex-col items-center bg-[#121212] p-6 rounded-lg text-center">
          <div className="bg-white mb-4 rounded-md">
            {" "}
            <LeaficonSVG />{" "}
          </div>
          <h5 className="text-xl font-semibold">Secure data encryption</h5>
          <p className="text-gray-400 text-base mt-2">
            With end-to-end encryption, your data is securely stored and
            protected from unauthorized access.
          </p>
        </div>
      </div>
    </div>
  );
};
export default MidPageOne;