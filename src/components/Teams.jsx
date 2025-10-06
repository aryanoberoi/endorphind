import React from 'react';
import BackgroundLayout from './ui/BackgroundLayout';

const Teams = () => {
  const teamMembers = [
    {
      name: 'Dr. Alexander Chen',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years in tech innovation and strategic growth.',
      specialty: 'Strategic Leadership & Business Development',
      level: 1
    },
    {
      name: 'Isabella Rossi',
      role: 'Chief Technology Officer',
      bio: 'Former Google engineer specializing in scalable architecture solutions.',
      specialty: 'Technical Architecture & System Design',
      level: 2
    },
    {
      name: 'Marcus Thorne',
      role: 'Creative Director',
      bio: 'Award-winning designer with expertise in brand storytelling.',
      specialty: 'Brand Strategy & Visual Design',
      level: 2
    },
    {
      name: 'Dr. Sophia Williams',
      role: 'Head of AI Research',
      bio: 'Neuroscience and AI researcher pushing ML boundaries.',
      specialty: 'Machine Learning & Neural Networks',
      level: 3
    },
    {
      name: 'Jonathan Park',
      role: 'Lead Developer',
      bio: 'Full-stack virtuoso with React, Node.js expertise.',
      specialty: 'Full-Stack Development & API Design',
      level: 3
    },
    {
      name: 'Olivia Martinez',
      role: 'Product Manager',
      bio: 'Transforming requirements into user-centric solutions.',
      specialty: 'Product Strategy & User Experience',
      level: 3
    },
    {
      name: 'Daniel Kim',
      role: 'DevOps Architect',
      bio: 'Cloud infrastructure specialist ensuring performance.',
      specialty: 'Cloud Infrastructure & CI/CD Pipelines',
      level: 3
    },
    {
      name: 'Elena Petrova',
      role: 'UX Research Lead',
      bio: 'Human-centered design expert passionate about accessibility.',
      specialty: 'User Research & Interaction Design',
      level: 3
    }
  ];

  return (
    // ⬇️ Wrap the entire section inside BackgroundLayout
    <BackgroundLayout>
      <section className="relative min-h-screen py-20 overflow-hidden">
        
        {/* Section Header */}
        <div className="relative z-10 text-center mb-16 px-4">
          <div className="inline-flex items-center space-x-2 text-gray-400 mb-4">
            <div className="w-12 h-px"></div>
            <span className="text-sm font-semibold tracking-widest">MEET OUR TEAM</span>
            <div className="w-12 h-px"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Expert
            <span className="block text-gray-300">Team Members</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A dedicated team of professionals bringing diverse expertise and innovation to every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative min-h-[320px] transition-all duration-500">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105">
                  
                  {/* Front content */}
                  <div className="h-full flex flex-col items-center text-center transition-opacity duration-500 group-hover:opacity-0">
                    <div className="w-20 h-20 mb-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center border-2 border-gray-600 group-hover:border-cyan-400/50 transition-colors duration-300">
                      <span className="text-2xl font-bold text-gray-300">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>

                  {/* Hover content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105">
                    <h4 className="text-cyan-400 font-semibold text-sm mb-3 tracking-wide">SPECIALTY</h4>
                    <p className="text-white text-lg font-medium leading-tight mb-4">{member.specialty}</p>
                    <div className="flex space-x-1 mb-4">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`w-2 h-2 rounded-full ${
                            level <= member.level ? 'bg-cyan-400' : 'bg-gray-600'
                          } ${level === member.level ? 'scale-125' : ''}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 max-w-4xl mx-auto mt-16 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '8', label: 'Team Members' },
              { number: '12+', label: 'Years Avg. Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-gray-300 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-500 font-medium group-hover:text-gray-400 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative z-10 text-center mt-16 px-4">
          <div className="inline-flex items-center space-x-4 text-gray-500">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
            <span className="text-sm">READY TO WORK WITH US?</span>
            <div className="w-20 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
          </div>
          
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-md border border-gray-600/50 rounded-full font-semibold text-white hover:from-gray-600/50 hover:to-gray-700/50 hover:border-gray-500/50 transform hover:scale-105 transition-all duration-300">
            Contact Our Team
          </button>
        </div>
      </section>
    </BackgroundLayout>
  );
};

export default Teams;
