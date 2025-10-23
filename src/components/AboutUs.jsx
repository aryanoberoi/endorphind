import { LucideHeading1 } from 'lucide-react';
import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

const AboutUs = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Outfit:00,900']
      },
      custom: {
        families: ['Robit'], // The font-family name from your @font-face rule
        urls: ['./index.css'] // Path to your CSS file containing the @font-face rule
      },
    });
  }, []);

  return (
    <section 
      id="about" 
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      {/* Heading */}
      <h1 
        className="text-4xl mb-8 text-center" // Center aligned
        style={{ fontFamily: 'Robit, sans-serif', color: '#DE9F3A' }}
      >
        ABOUT US
      </h1>
      {/* Content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center text-left relative z-10"> 
        <img 
          src="eli/basic.png" 
          alt="About Us Image" 
          className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8"
        />
        <div>
          {/* First Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 max-w-4xl" style={{ fontFamily: 'Robit, sans-serif', textAlign: 'left' }}>
            At <span className="font-semibold text-white">Endorphind</span>, we are a pioneering creative and wellness company at the intersection of art, storytelling, artificial intelligence, and technology. 
            Our dynamic team of video producers, editors, cinematographers, scriptwriters, motion graphics artists, 
            and full-stack developers builds AI applications and intelligent digital experiences.
          </p>

          {/* Second Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 max-w-4xl" style={{ fontFamily: 'Robit, sans-serif', fontWeight: '300', textAlign: 'left' }}>
            From promotional films, brand stories, event coverage, and social media videos 
            to long-form storytelling and end-to-end web and full-stack AI application development, 
            we handle the complete journey—from concept to deployment—with precision and creativity.
          </p>

          {/* Third Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 max-w-4xl" style={{ fontFamily: 'Robit, sans-serif', textAlign: 'left' }}>
            By blending <span className="text-white font-medium">human artistry</span> with cutting-edge AI, 
            we co-create soulful, seamless, and engaging experiences designed to elevate everyday well-being 
            while capturing your message with clarity and impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;