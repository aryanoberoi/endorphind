import React from 'react';
import { FaThumbsUp } from 'react-icons/fa'; 
import { IoMdHappy } from 'react-icons/io'; 

/**
 * A responsive component to display key statistics in a card format.
 * It uses Tailwind CSS for styling and a dark background for contrast.
 */
const StatsCardSection = () => {
  return (
    // Stats Card Section Wrapper
    <div className="w-full max-w-6xl rounded-3xl shadow-2xl bg-gradient-to-br from-[#1d1d1d] to-[#2a2a2a] p-6 sm:p-10 lg:p-16 mx-4 sm:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 text-white">

        {/* Stat 1: Customers */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 md:border-r md:border-gray-700 md:pr-6 lg:pr-8 relative group">
          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="bg-pink-500/10 p-3 rounded-full inline-flex items-center justify-center mb-2">
              <FaThumbsUp className="text-2xl sm:text-3xl text-pink-500 transition-transform group-hover:scale-110 duration-300" />
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              97%
            </div>
            <p className="font-semibold text-lg sm:text-xl mt-2">of customers</p>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              are ready to recommend us
            </p>
          </div>
        </div>

        {/* Stat 2: Developers */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 md:border-r md:border-gray-700 md:pr-6 lg:pr-8 relative group">
          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="flex items-center -space-x-3 mb-3 ml-10 lg:ml-0">
              <div className="relative group/avatar">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  className="rounded-full border-2 border-white/80 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover/avatar:scale-110 group-hover/avatar:border-blue-400"
                  alt="Developer 1"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full opacity-0 group-hover/avatar:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group/avatar">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                  className="rounded-full border-2 border-white/80 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover/avatar:scale-110 group-hover/avatar:border-green-400"
                  alt="Developer 2"
                />
                <div className="absolute inset-0 bg-green-500/20 rounded-full opacity-0 group-hover/avatar:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group/avatar">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                  className="rounded-full border-2 border-white/80 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover/avatar:scale-110 group-hover/avatar:border-yellow-400"
                  alt="Developer 3"
                />
                <div className="absolute inset-0 bg-yellow-500/20 rounded-full opacity-0 group-hover/avatar:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
              100%
            </div>
            <p className="font-semibold text-lg sm:text-xl mt-2">of developers</p>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              have a degree in engineering
            </p>
          </div>
        </div>

        {/* Stat 3: Projects Delivered */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 relative group">
          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="bg-green-500/10 p-3 rounded-full inline-flex items-center justify-center mb-2">
              <IoMdHappy className="text-3xl sm:text-4xl text-green-400 transition-transform group-hover:scale-110 duration-300" />
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              30+
            </div>
            <p className="font-semibold text-lg sm:text-xl mt-2">projects</p>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              successfully delivered
            </p>
          </div>
        </div>

      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-500/5 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};

export default StatsCardSection;