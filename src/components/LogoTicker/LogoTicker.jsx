import React from "react";
import ticker1 from "../../assets/ticker1.png";
import ticker2 from "../../assets/ticker2.png";
import ticker3 from "../../assets/ticker3.png";
import ticker4 from "../../assets/ticker4.png";
import ticker5 from "../../assets/ticker5.png";
import ticker6 from "../../assets/ticker6.png";

const LogoTicker = () => {
  return (
    <div className="flex flex-col w-full h-[266px] sm:h-[266px] md:h-[150px] lg:h-[150px] xl:h-[150px] 2xl:h-[150px] bg-[#030303] text-[#808080]">
      <p className="text-sm sm:text-sm mt-5 text-center">
        Trusted by the world’s most innovative teams
      </p>

      
      <div className="flex flex-wrap justify-around items-center h-full gap-y-5 gap-x-8 mb-5 px-10">
        
        <img
          src={ticker1}
          alt="Logo 1"
          className="w-[145px] max-h-[50px] object-contain "
        />
        <img
          src={ticker2}
          alt="Logo 2"
          className="max-w-[125px] max-h-[50px] object-contain"
        />
        <img
          src={ticker3}
          alt="Logo 3"
          className="max-w-[160px] max-h-[50px] object-contain"
        />
        <img
          src={ticker4}
          alt="Logo 4"
          className="max-w-[115px] max-h-[50px] object-contain"
        />
        <img
          src={ticker5}
          alt="Logo 5"
          className="max-w-[100px] max-h-[50px] object-contain"
        />
        <img
          src={ticker6}
          alt="Logo 6"
          className="max-w-[85px] max-h-[50px] object-contain"
        />
      </div>
    </div>
  );
};

export default LogoTicker;
