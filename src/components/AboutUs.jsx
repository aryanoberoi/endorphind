import React from 'react';

const AboutUs = () => {
  return (
    <section 
      id="about" 
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 
          className="text-[#e33d22] text-4xl font-myfont"
        >
          About Us
        </h2>

        {/* First Paragraph */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 max-w-4xl mx-auto font-light">
          At <span className="font-semibold text-white">Endorphind</span>, we are a pioneering creative and wellness company at the intersection of <span className="text-purple-300">art, storytelling, artificial intelligence,</span> and <span className="text-pink-300">technology</span>. 
          Our dynamic team of video producers, editors, cinematographers, scriptwriters, motion graphics artists, 
          and full-stack developers builds <span className="text-red-300">AI applications</span> and intelligent digital experiences.
        </p>

        {/* Second Paragraph */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 max-w-4xl mx-auto font-light">
          From <span className="text-purple-200">promotional films, brand stories, event coverage, and social media videos</span> 
          to <span className="text-pink-200">long-form storytelling and end-to-end web and full-stack AI application development</span>, 
          we handle the complete journey—from concept to deployment—with precision and creativity.
        </p>

        {/* Third Paragraph */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 max-w-4xl mx-auto font-light">
          By blending <span className="text-white font-medium">human artistry</span> with <span className="text-red-300">cutting-edge AI</span>, 
          we co-create soulful, seamless, and engaging experiences designed to elevate everyday well-being 
          while capturing your message with clarity and impact.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
