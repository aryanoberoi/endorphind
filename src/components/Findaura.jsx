import React, { useState } from "react";
import { BookOpen, HeartHandshake, Users } from "lucide-react";

const Findaura = () => {
  const [showForm, setShowForm] = useState(false);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-[#DE9F3A]" />,
      title: "Intelligent Journaling",
      description: "Empower your journey with AI-driven insights and secure, private reflection spaces."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#DE9F3A]" />,
      title: "Therapist Aid",
      description: "Advanced tools to assist professionals in understanding and supporting their clients better."
    },
    {
      icon: <Users className="w-8 h-8 text-[#DE9F3A]" />,
      title: "Client Management",
      description: "Streamline connections, appointments, and progress tracking in one unified platform."
    }
  ];

  return (
    <div
      className="flex flex-col items-center w-full min-h-screen text-white"
      style={{ fontFamily: "robit, sans-serif", background: "transparent" }}
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center w-full px-4 pt-20 pb-12 text-center md:pt-32 md:pb-20">
        <img
          src="/FindAura..png"
          alt="FindAura Logo"
          className="mb-8 w-48 md:w-64 h-auto"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
          The Future of <span className="text-[#DE9F3A]">Mental Health</span> Connection
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
          An AI-powered ecosystem for journaling, therapist assistance, and seamless client management.
          <br className="hidden md:block" />
          Built solely by therapists, psychologists, and mental health professionals.
        </p>

        <button
          className="px-10 py-4 rounded-full bg-[#DE9F3A] text-black font-bold text-xl hover:bg-[#c98b2d] transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#DE9F3A]/20"
          onClick={() => setShowForm(true)}
        >
          Try Now
        </button>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#DE9F3A]/50 transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#DE9F3A]">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Form */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowForm(false);
          }}
        >
          <div className="relative w-full max-w-2xl bg-[#111] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            <button
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              onClick={() => setShowForm(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full h-[400px] md:h-[500px] p-4 md:p-8 flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src="https://31e53447.sibforms.com/serve/MUIFAAhvHRBolcC4UlIZeD6iw1btrIL6i8L2bVj5zuxLKKwkvcrMk1pPdmbSf2vg0Emt-RM2gaOSan8W0Hw4BXt_-WWWNYAZAut-HRZnz0YrDWF9fG7CcwABTR1Azu9fXaDrf8AQAwMmk9kK7x7ETydZYHGrzWVqVxkFqlXrkjseDNwgs48UKLKQZCsaF0WXbHkQEfhZsf1MuuvAaQ=="
                frameBorder="0"
                scrolling="auto"
                allowFullScreen
                title="Findaura Signup"
                className="w-full h-full bg-transparent"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Findaura;
