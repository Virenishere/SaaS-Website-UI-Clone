import React from "react";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import FooterSection from "./components/Footer/FooterSection";


const App = () => (
  <div className="min-h-screen">
    <Navbar />
    <LandingPage />
   <FooterSection />
  </div>
);
export default App;
