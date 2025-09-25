import React from 'react';

const Teams = () => {
  const teamMembers = [
    {
      name: 'Elon Musk', // Founder now part of the general team members list
      role: 'Chief Visionary Officer',
      bio: 'Pioneering the future of space exploration, sustainable energy, and artificial intelligence. Driven by a relentless pursuit of innovation and a commitment to humanity\'s progress.',
      image: 'https://placehold.co/120x120/0f0e1c/FFFFFF?text=Founder', // Smaller image placeholder
      isFounder: true, // Optional: flag to identify founder if needed for specific styling later
    },
    {
      name: 'Bob Williams',
      role: 'UI/UX Designer',
      bio: 'Crafting intuitive and visually stunning user interfaces that blend aesthetics with functionality.',
      image: 'https://placehold.co/120x120/0f0e1c/FFFFFF?text=Bob',
    },
    {
      name: 'Charlie Brown',
      role: 'Project Manager',
      bio: 'Ensuring seamless project execution, from concept to deployment, with a focus on efficiency and collaboration.',
      image: 'https://placehold.co/120x120/0f0e1c/FFFFFF?text=Charlie',
    },
    {
      name: 'Diana Prince',
      role: 'Data Scientist',
      bio: 'Unlocking insights from vast datasets, building predictive models, and driving data-informed decisions.',
      image: 'https://placehold.co/120x120/0f0e1c/FFFFFF?text=Diana',
    },
    {
      name: 'Eve Adams',
      role: 'Hardware Engineer',
      bio: 'Designing and optimizing cutting-edge hardware components for high-performance cosmic applications.',
      image: 'https://placehold.co/120x120/0f0e1c/FFFFFF?text=Eve',
    },
    {
      name: 'Frank Miller',
      role: 'Cybersecurity Expert',
      bio: 'Safeguarding digital assets and ensuring robust security protocols across all interstellar networks.',
      image: 'https://placehold.co/120x120/0f0e1c/FFFFFF?text=Frank',
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 text-gray-200"> {/* Reduced vertical padding */}
      {/* Section Heading */}
      <h2 className="relative z-10 mb-12 text-center text-4xl font-extrabold tracking-wide text-[#ccf] drop-shadow-[0_0_15px_rgba(100,200,255,0.7)] md:text-5xl"> {/* Reduced heading size and margin */}
      Humans Behind the Code
      </h2>

      {/* Team Members Grid - Now includes the founder */}
      {/* Adjusted grid columns to fit more cards per row on various screen sizes */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"> {/* Removed xl:grid-cols-6 as there are fewer members, adjusted grid-cols for better spacing */}
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border border-white/15 bg-white/5 p-5 text-center shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:shadow-black/50 w-full max-w-[180px] mx-auto" // Increased max-w for slightly larger cards
          >
            {/* Glowing outlines/hover effects */}
            <div className="absolute inset-[-2px] -z-10 rounded-[1.1rem] bg-[linear-gradient(45deg,_#1a1a1a,_#333333,_#1a1a1a,_#333333)] bg-[length:400%_400%] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-glowing-border"></div>

            {/* Member Image */}
            <div className="mb-3 flex justify-center"> {/* Reduced margin-bottom */}
              <img
                src={member.image}
                alt={member.name}
                className="h-24 w-24 rounded-full object-cover border-2 border-white/20 shadow-lg" // Maintained image size
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/0f0e1c/FFFFFF?text=User"; }}
              />
            </div>

            {/* Member Info */}
            <h3 className="mb-1 text-base font-semibold text-white tracking-wide">{member.name}</h3> {/* Maintained font size */}
            <p className="mb-1 text-xs font-medium text-blue-300">{member.role}</p> {/* Maintained font size and margin */}
            <p className="text-gray-100 text-xs leading-tight line-clamp-3">{member.bio}</p> {/* Maintained font size, line height, added line-clamp to limit bio height */}
          </div>
        ))}
      </div>

      {/* Custom CSS for glowing-border animation */}
      <style>
        {`
        @keyframes glowing-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>
    </section>
  );
};

export default Teams;
