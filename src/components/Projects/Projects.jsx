import React from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import GlassCardCarousel from "./GlassCardCarousel";
const Projects = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-transparent text-gray-200 flex flex-col items-center py-16 px-6 space-y-20"
      style={{ fontFamily: "robit, sans-serif" }}
    >
      {/* Header Section */}
      <div
        className="text-center max-w-4xl space-y-6"
        style={{ fontFamily: "robit, sans-serif" }}
      >
        <h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
          style={{ color: "#DE9F3A", fontFamily: "robit, sans-serif" }}
        >
          Dev Projects
        </h1>
        <p
          className="text-lg md:text-xl text-gray-400 leading-relaxed"
          style={{ fontFamily: "robit, sans-serif" }}
        >
          We build projects that are a blend of technology and creativity. We are primarily focused on Full Stack Development and AI/GenAI applications.
          <br /> Our goal is to build visually appealing projects. We have a strong focus on UI/UX design.
        </p>
      </div>
      <div style={{ fontFamily: "robit, sans-serif" }}>
        <GlassCardCarousel />
      </div>
    </div>
  );
};

export default Projects;
