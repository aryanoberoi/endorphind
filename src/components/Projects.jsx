import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import GlideCarousel from "../components/ui/GlideCarousel";

const Projects = () => {
  return (
    <div className="bg-transparent text-gray-200 flex flex-col items-center py-16 px-6 space-y-20">

      {/* Header Section */}
      <div className="text-center max-w-4xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Our portfolio is a gallery of projects that transformed ideas into
          groundbreaking solutions. Explore our curated collection of case
          studies and see what we can build for you.
        </p>
      </div>

      <div className="flex">
        <GlideCarousel/>
      </div>

      {/* Stats Card Section */}
      <div className="w-full max-w-6xl rounded-3xl shadow-2xl bg-[#1d1d1d] p-9 sm:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-white">

          

          {/* Stat 2: Customers */}
          <div className="flex flex-col items-start space-y-3 border-r border-gray-700 pr-6">
            <FaThumbsUp className="text-3xl text-pink-500" />
            <div className="text-5xl font-extrabold">97%</div>
            <p className="font-medium text-lg">of customers</p>
            <p className="text-sm opacity-80">are ready to recommend us</p>
          </div>

          {/* Stat 3: Developers */}
          <div className="flex flex-col items-start space-y-3 border-r border-gray-700 pr-6">
            <div className="flex items-center -space-x-3">
              <img
                src="https://placehold.co/40x40"
                className="rounded-full border-2 border-white w-10 h-10"
                alt="Developer 1"
              />
              <img
                src="https://placehold.co/40x40"
                className="rounded-full border-2 border-white w-10 h-10"
                alt="Developer 2"
              />
              <img
                src="https://placehold.co/40x40"
                className="rounded-full border-2 border-white w-10 h-10"
                alt="Developer 3"
              />
            </div>
            <div className="text-5xl font-extrabold mt-1">100%</div>
            <p className="font-medium text-lg">of developers</p>
            <p className="text-sm opacity-80">have a degree in engineering</p>
          </div>

          {/* Stat 4: Projects Delivered */}
          <div className="flex flex-col items-start space-y-3">
            <IoMdHappy className="text-4xl text-green-400" />
            <div className="text-5xl font-extrabold">30+</div>
            <p className="font-medium text-lg">projects</p>
            <p className="text-sm opacity-80">successfully delivered</p>
          </div>
        </div>
      </div>

     
      
    </div>
  );
};

export default Projects;
