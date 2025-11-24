import React, { useEffect } from 'react';
import BackgroundLayout from './ui/BackgroundLayout';
import ConnectButtonAndForm from './ui/Connect';
import WebFont from 'webfontloader';

const Teams = () => {
  useEffect(() => {
    WebFont.load({
      custom: {
        families: ['Robit'], // The font-family name from your @font-face rule
        urls: ['./index.css'] // Path to your CSS file containing the @font-face rule
      },
    });
  }, []);
  const teamMembers = [
    {
      name: 'Aryan Oberoi',
      role: 'Founder and Technical Lead',
      bio: "I am a passionate technologist with a deep love for philosophy, spirituality, and psychology. I believe that the intersection of these fields holds the key to creating innovative solutions that can truly transform our world. My journey in AI has been driven by relentless curiosity and a desire to leverage advancements for the greater good. I am particularly fascinated by how AI can be used to enhance emotional understanding and human connections. My interests extend to data science, machine learning (ML), large language models (LLMs), and research—fields that captivate me with their endless possibilities for innovation and solving complex problems. In addition to my passion for technology, I have a keen interest in filmmaking, content creation, and acting. I see storytelling as a powerful tool to inspire, educate, and bring about change. I also use AI to create beautiful visuals in films, as I believe content is the way to touch people’s hearts and spark inspiration. Understanding the human mind and behavior not only fascinates me but also informs my approach to technology and storytelling. Whether it’s through developing cutting-edge technology, crafting engaging content, my goal is to contribute to a better, more empathetic world.",
      photo: 'team/aryano.png',
      socialLinks: {
        instagram: 'https://www.instagram.com/_aryanoberoi/',
        linkedin: 'https://www.linkedin.com/in/aryan-oberoi-1b4358195/',
        github: 'https://github.com/aryanoberoi'
      }
    },
    {
      name: 'Aryan Das',
      role: 'Co Founder and Creative Director',
      bio: "I am a filmmaker with a strong grasp of meme and pop culture references. My up-to-date knowledge of social media allows me to create content that feels relevant and fresh. That being said, I'm not bound by the algorithm because I believe, in a world of shrinking attention spans, people crave good stories, and no algorithm can beat a well-told narrative.",
      photo: 'team/aryand.png',
      socialLinks: {
        instagram: 'https://www.instagram.com/das._.mine/',
        linkedin: 'https://www.linkedin.com/in/aryan-das-969227267/',
      }
    },
    {
      name: 'Anahita Zahl Tantra',
      role: 'Co Founder and Ops',
      bio: 'Part-ops, part-people management - an industrial psychologist who is carving her space at the intersection of talent, strategy, and sustainability. In her experience of 1.5+ years working closely with founders, leading everything from hiring and strategic operations to workflow automation and market research, she brings structure, clarity and just the right amount of curiosity to help things grow — thoughtfully and efficiently.',
      photo: 'team/anahita.png',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/anahitazahltantra/',
      }
    },
    {
      name: 'Pinak',
      role: 'Co Founder and Lead Artist',
      bio: 'Pinak Ahlawat is an emerging Indian creative talent, an animator, and a cartoonist currently carving out his niche in the design world.',
      photo: 'team/arham.png',
      socialLinks: {
        instagram: 'https://www.instagram.com/pinakahlawat'
      }
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
            <span className="text-sm font-semibold tracking-widest" style={{ fontFamily: 'Robit, sans-serif', color: '#DE9F3A' }}>MEET THE TEAM</span>
            <div className="w-12 h-px"></div>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Robit, sans-serif' }}>
            A dedicated team of professionals bringing diverse expertise and innovation to every project.
          </p>
        </div>

        {/* Team List */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {teamMembers.map((member, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-6`}>
              {/* Member Photo */}
              {index % 2 === 0 ? (
                <div className="flex-shrink-0 w-80 h-120 mb-4 md:mb-0 md:mr-6 overflow-hidden border-2 border-gray-600">
                  <img src={member.photo} alt={`${member.name}'s photo`} className="w-full h-full object-cover" />
                </div>
              ) : null}
              {/* Member Info */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Robit, sans-serif' }}>{member.name}</h3>
                <p className="text-cyan-400 font-medium text-sm mb-3" style={{ fontFamily: 'Robit, sans-serif' }}>{member.role}</p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Robit, sans-serif' }}>{member.bio}</p>
                <div className="flex justify-center md:justify-start space-x-4 mt-3">
                  {member.socialLinks.instagram && (
                    <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" style={{ fontFamily: 'Robit, sans-serif' }}>
                      Instagram
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" style={{ fontFamily: 'Robit, sans-serif' }}>
                      LinkedIn
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" style={{ fontFamily: 'Robit, sans-serif' }}>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
              {/* Member Photo on the right for odd indices */}
              {index % 2 !== 0 ? (
                <div className="flex-shrink-0 w-80 h-120 mb-4 md:mb-0 md:ml-6 overflow-hidden border-2 border-gray-600">
                  <img src={member.photo} alt={`${member.name}'s photo`} className="w-full h-full object-cover" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="relative z-10 text-center mt-16 px-4">
          <div className="inline-flex items-center space-x-4 text-gray-500">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
            <span className="text-sm" style={{ fontFamily: 'Robit, sans-serif' }}>READY TO WORK WITH US?</span>
            <div className="w-20 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
          </div>

          <ConnectButtonAndForm />
        </div>
      </section>
    </BackgroundLayout>
  );
};

export default Teams;
