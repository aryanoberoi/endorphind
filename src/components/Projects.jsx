import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import GlideCarousel from "../components/ui/GlideCarousel";
import CardSwap, { Card } from "../components/ui/CardSwap"

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
        <GlideCarousel />
      </div>

      {/* Stats Card Section */}
      <div className="w-full max-w-6xl rounded-3xl shadow-2xl bg-[#1d1d1d] p-9 sm:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-white">

          {/* Stat 2: Customers */}
          <div className="flex flex-col items-start space-y-4 border-r border-gray-700 pr-6">
            <FaThumbsUp className="text-3xl text-pink-500" />
            <div className="text-5xl font-extrabold">97%</div>
            <p className="font-medium text-lg">of customers</p>
            <p className="text-sm opacity-80">are ready to recommend us</p>
          </div>

          {/* Stat 3: Developers */}
          <div className="flex flex-col items-start space-y-4 border-r border-gray-700 pr-6">
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
          <div className="flex flex-col items-start space-y-4">
            <IoMdHappy className="text-4xl text-green-400" />
            <div className="text-5xl font-extrabold">30+</div>
            <p className="font-medium text-lg">projects</p>
            <p className="text-sm opacity-80">successfully delivered</p>
          </div>
        </div>
      </div>



      <div
        style={{
          height: '600px',
          position: 'relative',
          left: '2em',
          bottom: '10em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card
            style={{
              background: 'rgba(255, 255, 255, 0.1)', // glass effect
              backdropFilter: 'blur(15px)',          // frosted glass
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              color: '#fff',
              minWidth: '250px',
              maxWidth: '300px',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            className="hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFD700' }}>
              Card 1
            </h3>
            <p className="text-gray-200 font-light">Your content here</p>
          </Card>

          <Card
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              color: '#fff',
              minWidth: '250px',
              maxWidth: '300px',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            className="hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#FF69B4' }}>
              Card 2
            </h3>
            <p className="text-gray-200 font-light">Your content here</p>
          </Card>

          <Card
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              color: '#fff',
              minWidth: '250px',
              maxWidth: '300px',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            className="hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#00FFFF' }}>
              Card 3
            </h3>
            <img 
              src="https://source.unsplash.com/random/300x200" 
              alt="Random" 
              className="w-full h-auto mb-2 rounded-md"
            />
            <p className="text-gray-200 font-light">Your content here</p>
          </Card>
        </CardSwap>
      </div>

    </div>
  );
};

export default Projects;
