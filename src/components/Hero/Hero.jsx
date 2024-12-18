import React from "react";

const Hero = () =>{
    return (
        <section className="relative bg-gradient-to-b from-purple-700 to-black text-white min-h-[90vh] flex flex-col items-center justify-center">
        {/* Hero Content */}
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            One Task <br /> at a Time
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300">
            Get for free
          </button>
        </div>
  
        {/* Illustration Placeholder */}
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-purple-300 rounded-lg transform rotate-12"></div>
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-purple-400 rounded-lg"></div>
      </section>
    );
}
export default Hero;