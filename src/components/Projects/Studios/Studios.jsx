import React from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import GlideCarousel from "../GlideCarousel";
// import StatsCardSection from "../StatsCardSection";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent text-gray-200 flex flex-col items-center py-16 px-6 space-y-20">
      {/* Header Section */}
      <div className="text-center max-w-4xl space-y-6">
        <img src="studioslogo.png" alt="Projects" className="w-full h-auto" style={{ backgroundColor: 'transparent' }} />
        <div className="flex">
          <GlideCarousel />
        </div>
        <p
          className="text-lg md:text-xl text-gray-400 leading-relaxed"
          style={{ fontFamily: 'Robit, sans-serif' }}
        >
          At Endorphind Studios, we are a pioneering creative and wellness company at the intersection of art, storytelling, artificial intelligence, and technology. Our dynamic team of video producers, editors, cinematographers, scriptwriters, motion graphics artists, and AI content experts builds AI driven films and advertisements. From promotional films, brand stories, event coverage, and social media videos to long-form storytelling, we handle the complete journey—from concept to deployment—with precision and creativity. By blending human artistry with cutting-edge AI, we co-create soulful, seamless, and engaging experiences designed to elevate everyday well-being while capturing your message with clarity and impact.
        </p>
      </div>
    </div>
  );
};

export default Projects;
