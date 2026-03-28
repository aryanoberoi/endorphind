import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Greenfinite.ai",
    period: "2023",
    link: "https://greenfinite.ai",
    description:
      "An AI-powered sustainability tool for organizations to track carbon footprint, ESG scores, and generate compliance-ready sustainability reports. Built intelligent dashboards and integrated automated PDF parsing and data extraction pipelines.",
    stack: ["LangChain", "FastAPI", "React", "OpenAI", "Vector DBs"],
    images: [
      "/project/greenfinite1.png",
      "/project/greenfinite2.png",
      "/project/greenfinite3.png",
    ],
  },
  {
    name: "iknow.carnotresearch.com",
    period: "2024",
    link: "https://iknow.carnotresearch.com",
    description:
      "Architected a unified Retrieval-Augmented Generation (RAG) platform allowing users to chat with and query knowledge from a mix of PDF, DOCX, Excel, and SQL data sources via advanced chunking, dense and keyword search, and real-time QA.",
    stack: ["LangChain", "OpenAI", "FAISS", "BM25", "FastAPI", "React", "Elasticsearch", "LLM Evaluation"],
    images: [
      "/project/carnot12.png"
    ],
  },
  {
    name: "Sounding The Invisible",
    period: "2023",
    link: "https://soundingtheinvisible.nanditakumar.com/", // Example, replace with correct if different
    description:
      "This is an art piece initiated by Nandita Kumar. " +
      "It was made to depict the various chemical pollutants in the environment and their interaction with their respective counteractive plants. " +
      "This work was commissioned within the framework of the S+T+ARTS 4Water II residency program by TBA21–Academy with the support of Konsortium Deutsche Meeresforschung (KDM) and with the collaboration of Ca' Foscari, CNR-ISMAR, ETT, and Venice International University and the S+T+ARTS program of the European Union.",
    stack: ["Supercollider", "React", "Creative Coding", "CSS", "Flask"],
    images: [
      "/project/sounding1.png",
      "/project/sounding2.png",
      "/project/sounding3.png",
      "/project/sounding4.png",
      "/project/sounding5.png",
      "/project/sounding6.png",
    ],
  },
]    



const GlassCardCarousel = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIdx((prev) => (prev + newDirection + projects.length) % projects.length);
  };

  const project = projects[currentIdx];

  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-6 sm:py-12 px-2 sm:px-4 min-h-[500px] md:min-h-[700px]">
      <div className="relative w-full min-h-[600px] sm:min-h-[650px] md:min-h-[550px] lg:aspect-[16/8] flex items-center justify-center overflow-hidden rounded-3xl bg-black/60 border border-white/10 shadow-2xl backdrop-blur-2xl">
        <AnimatePresence initial={true} custom={direction} mode="wait">
          <motion.div
            key={currentIdx}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 260, damping: 20 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full p-4 sm:p-8 md:p-16 flex flex-col lg:flex-row gap-6 md:gap-10 items-center lg:items-center justify-start lg:justify-center overflow-y-auto lg:overflow-visible custom-scrollbar"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-[250px] sm:h-[350px] lg:h-full relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-rose-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-3 sm:space-y-6 px-2 md:px-0" style={{ fontFamily: "Bangers, cursive" }}>
              <div className="space-y-2">
                <motion.h3 
                  className="text-2xl sm:text-3xl md:text-5xl font-black text-white hover:sv-glitch select-none cursor-default"
                  data-text={project.name}
                >
                  {project.name}
                </motion.h3>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest leading-none">
                    {project.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-6 sm:line-clamp-none">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-1.5 py-0.5 sm:px-3 sm:py-1 bg-white/5 border border-white/10 rounded-lg text-[7px] sm:text-[10px] md:text-xs text-gray-400 font-mono hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white !text-black rounded-xl font-bold transition-all hover:bg-cyan-400 hover:!text-white active:scale-95 text-sm sm:text-base"
                >
                  Visit Project
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls - Hidden on mobile */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden md:flex justify-between px-4 pointer-events-none z-10">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 border border-white/10 rounded-full text-white pointer-events-auto transition active:scale-90 backdrop-blur-md"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 border border-white/10 rounded-full text-white pointer-events-auto transition active:scale-90 backdrop-blur-md"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-white/5">
          <motion.div 
            className="h-full bg-gradient-to-r from-cyan-500 to-rose-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentIdx + 1) / projects.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
      </div>
      
      {/* Pagination Indicators */}
      <div className="flex gap-3 mt-8">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIdx ? 1 : -1);
              setCurrentIdx(idx);
            }}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              idx === currentIdx ? "w-8 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GlassCardCarousel;
