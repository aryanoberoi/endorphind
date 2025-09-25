import React from 'react';

const AboutUs = () => {
    return (
        <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-12 drop-shadow-lg
                                    bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  bg-clip-text
                                    animate-pulse-subtle">
                    About Us
                </h2>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 max-w-3xl mx-auto font-light">
                    Endorphind is a pioneering wellness company at the intersection of art, artificial intelligence, and technology. We co-create with artists, blending human creativity with cutting-edge AI to craft soulful, intelligent products that elevate everyday well-being. Our expertise extends to comprehensive web development—including both frontend and backend—enabling us to build seamless, interactive digital experiences.
                    
                </p>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
                Rooted in beauty, empathy, and innovation, our team combines over four years of hands-on development experience with fresh perspectives from designers and psychology students. Together, we’re shaping a future where technology not only advances but deeply enriches the human experience.

                </p>


            </div>


        </section>
    );
};

export default AboutUs;
