import React from "react";

import Hero from "../components/Hero/Hero";
import MidPageOne from "../components/MidPageOne/MidPageOne";
import LogoTicker from "../components/LogoTicker/LogoTicker";
import MidPageTwo from "../components/MidPageTwo/MidPageTwo";
import FAQ from "../components/FAQ/FAQ";
import GetAccess from "../components/GetAcess/GetAcess";
import Test from "./Test";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      
      <Hero />
      <LogoTicker />
      <MidPageOne />
      <MidPageTwo />
      <FAQ />
      <GetAccess />
    </div>
  );
};
export default LandingPage;
