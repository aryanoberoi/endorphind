import React from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import GlassCardCarousel from "../GlassCardCarousel";
import StatsCardSection from "../StatsCardSection";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent text-gray-200 flex flex-col items-center py-16 px-6 space-y-20">
      {/* Header Section */}
      <div className="text-center max-w-4xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Projects
        </h1>
        

        
      </div>

      <div>
        <GlassCardCarousel />
      </div>

      <div>
        <StatsCardSection />
      </div>
    </div>
  );
};

export default Projects;
