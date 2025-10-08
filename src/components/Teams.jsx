import React from 'react';
import BackgroundLayout from './ui/BackgroundLayout';

const Teams = () => {
  const teamMembers = [
    {
      name: 'Aryan Oberoi',
      role: 'Founder',
      bio: 'Visionary leader with 15+ years in tech innovation and strategic growth.'
    },
    {
      name: 'Aryan Das',
      role: 'Co Founder and Creative Director',
      bio: 'Former Google engineer specializing in scalable architecture solutions.'
    },
    {
      name: 'Anahita Zahl Tantra',
      role: 'Co Founder',
      bio: 'Award-winning designer with expertise in brand storytelling.'
    },
    {
      name: 'Arham',
      role: 'Technical Lead',
      bio: 'Md. Anas Jamal is an AI Engineer with expertise in large language models, generative AI, and machine learning. He has developed enterprise-grade AI solutions, led research projects, and optimized ML applications for the public and private sectors. With experience at Carnot Research, Persist Ventures, and Tata Steel, he has demonstrated proficiency in AI-driven applications, including multilingual meeting intelligence tools, advanced web scraping, and machine learning pipelines'
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
            <span className="text-sm font-semibold tracking-widest">MEET THE TEAM</span>
            <div className="w-12 h-px"></div>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A dedicated team of professionals bringing diverse expertise and innovation to every project.
          </p>
        </div>

        {/* Team List */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20">
              {/* Member Photo */}
              <div className="w-24 h-24 mb-4 md:mb-0 md:mr-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center border-2 border-gray-600 transition-colors duration-300">
                <span className="text-2xl font-bold text-gray-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              {/* Member Info */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
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
