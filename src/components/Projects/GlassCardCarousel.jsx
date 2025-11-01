import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Greenfinite.ai",
    period: "2023",
    link: "https://greenfinite.ai",
    description:
      "An AI-powered sustainability tool for organizations to track carbon footprint, ESG scores, and generate compliance-ready sustainability reports. Built intelligent dashboards and integrated automated PDF parsing and data extraction pipelines.",
    stack: ["LangChain", "FastAPI", "React", "OpenAI", "Vector DBs"],
    images: [
      "project/greenfinite1.png",
      "project/greenfinite2.png",
      "project/greenfinite3.png",
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

// Simple Modal component
const DetailsModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(16,16,20,0.77)" }}>
      <div
        className="relative bg-gradient-to-br from-[#0e1020]/95 via-[#151e28]/90 to-[#0e1020]/95 backdrop-blur-2xl shadow-2xl border border-white/40 p-8 rounded-2xl w-full max-w-lg flex flex-col items-center"
        style={{
          maxHeight: "85vh",
          overflowY: "auto",
        }}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        <button
          className="absolute top-3 right-3 bg-black/30 text-white px-3 py-1 rounded-full text-lg font-bold hover:bg-orange-500/80 transition"
          onClick={onClose}
          aria-label="Close Details"
          tabIndex={0}
        >
          &times;
        </button>
        <h2
          className="text-2xl font-bold mb-1 text-white"
          style={{ letterSpacing: "-.01em" }}
        >
          {project.name}
        </h2>
        {project.period && (
          <span className="text-orange-400 mb-3 font-semibold" style={{ fontSize: "1rem" }}>
            {project.period}
          </span>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-3 text-orange-300 hover:text-orange-500 underline font-semibold transition"
            style={{ fontSize: "1.04rem" }}
            tabIndex={0}
          >
            Visit Project &rarr;
          </a>
        )}
        <p
          className="text-gray-200 text-md font-medium text-center mt-3 mb-5"
          style={{
            lineHeight: "1.5",
            letterSpacing: ".01em",
            fontSize: "1.15rem",
          }}
        >
          {project.description}
        </p>
        {project.stack && (
          <div className="mt-1 mb-4 flex flex-wrap gap-2 justify-center">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="bg-white/10 text-gray-100 text-xs rounded-full px-3 py-1 border border-white/10 backdrop-blur-sm"
                style={{ fontWeight: 700, letterSpacing: ".04em" }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {project.images && project.images.length > 0 && (
          <div className="w-full flex flex-wrap justify-center gap-2 mt-2">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={project.name + " image " + (idx + 1)}
                style={{ width: "70px", height: "52px", borderRadius: "7px", objectFit: "cover", border: "1px solid #232428" }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const GlassCardCarousel = () => {
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const imageIntervalRef = useRef();

  // Only auto image carousel for main card
  useEffect(() => {
    clearInterval(imageIntervalRef.current);
    imageIntervalRef.current = setInterval(() => {
      setCurrentImageIdx((prev) => {
        const images = projects[currentProjectIdx].images;
        return (prev + 1) % images.length;
      });
    }, 3600);
    return () => clearInterval(imageIntervalRef.current);
  }, [currentProjectIdx]);

  // Change project on manual next/prev, no auto project switch!
  const handleNextProject = () => {
    setCurrentImageIdx(0);
    setModalOpen(false);
    setCurrentProjectIdx((idx) => (idx + 1) % projects.length);
  };
  const handlePrevProject = () => {
    setCurrentImageIdx(0);
    setModalOpen(false);
    setCurrentProjectIdx((idx) =>
      idx === 0 ? projects.length - 1 : idx - 1
    );
  };

  // Change image in current project (only if modal not open)
  const handleNextImage = (e) => {
    if (modalOpen) return;
    if (e) e.stopPropagation();
    setCurrentImageIdx((idx) => (idx + 1) % projects[currentProjectIdx].images.length);
  };
  const handlePrevImage = (e) => {
    if (modalOpen) return;
    if (e) e.stopPropagation();
    setCurrentImageIdx((idx) => {
      const arr = projects[currentProjectIdx].images;
      return idx === 0 ? arr.length - 1 : idx - 1;
    });
  };

  const project = projects[currentProjectIdx];
  const images = project.images;
  const showImage = images[currentImageIdx];

  // Remove flip variables/styles and just use modern card
  const cardOuterStyle = {
    width: "100%",
    minHeight: "40vh",
    fontFamily: "Robit, Outfit, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const cardContentStyle = {
    position: "relative",
    width: "80vw",
    maxWidth: "700px",
    minHeight: "450px",
    boxShadow: "0 4px 32px 0 rgba(0,0,0,0.18)",
    overflow: "hidden",
    borderRadius: "1.5rem",
    background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(12,20,32,0.12) 100%)",
  };

  const cardFaceStyle = {
    width: "100%",
    minHeight: "450px",
    borderRadius: "1.5rem",
  };

  return (
    <div className="flex flex-col items-center justify-center w-full" style={cardOuterStyle}>
      <div style={cardContentStyle}>
        {/* CARD - Only image carousel and proj name */}
        <div
          className="bg-gradient-to-br from-white/10 via-white/10 to-white/0 backdrop-blur-xl shadow-2xl border border-white/30 p-10 transition hover:scale-105 hover:border-white/70 flex flex-col items-center"
          style={{ ...cardFaceStyle, zIndex: 2 }}
        >
          <div
            className="relative w-full max-w-[600px] h-[340px] bg-black/30 rounded-2xl overflow-hidden flex items-center justify-center mb-8"
            style={{
              boxShadow: "0 2px 16px 0 rgba(0,0,0,0.13)"
            }}
          >
            <img
              src={showImage}
              alt="Project"
              className="object-cover h-full w-full transition-all duration-400"
              draggable={false}
              style={{
                borderRadius: "16px",
                filter: "brightness(0.92) saturate(1.13)",
                cursor: "pointer"
              }}
              tabIndex={0}
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition"
              onClick={handlePrevImage}
              aria-label="Previous Image"
              tabIndex={0}
            >
              &#8592;
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition"
              onClick={handleNextImage}
              aria-label="Next Image"
              tabIndex={0}
            >
              &#8594;
            </button>
            {/* Dots */}
            <div className="absolute bottom-4 w-full flex justify-center gap-1">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`inline-block rounded-full ${i === currentImageIdx ? "bg-white/80" : "bg-gray-300/50"}`}
                  style={{ width: 10, height: 10, margin: "0 3px" }}
                />
              ))}
            </div>
            <button
              className="absolute right-3 top-3 bg-orange-500/80 text-white px-4 py-1 rounded-full text-sm font-semibold shadow hover:bg-orange-400 transition"
              style={{ zIndex: 50 }}
              onClick={() => setModalOpen(true)}
              aria-label="Show Description & Stack"
              tabIndex={0}
            >
              Show Details
            </button>
          </div>
          <div className="w-full flex flex-col items-center">
            <h3
              className="text-3xl sm:text-4xl font-extrabold text-white px-4 py-2 transition-colors duration-200 select-none"
              style={{ letterSpacing: "-.01em", borderRadius: "10px" }}
              tabIndex={0}
            >
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition underline underline-offset-2"
                  tabIndex={0}
                  style={{ textDecorationThickness: "2px" }}
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
          </div>
          {/* Project controls */}
          <div className="flex items-center mt-8 gap-8">
            <button
              className="bg-white/10 px-4 py-2 rounded-full text-white font-bold shadow hover:bg-white/30 transition"
              onClick={handlePrevProject}
              aria-label="Previous Project"
              tabIndex={0}
            >
              &#8592; Prev
            </button>
            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <span
                  key={idx}
                  style={{
                    display: "inline-block",
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    margin: "0 3px",
                    background: idx === currentProjectIdx
                      ? "rgba(255,255,255,0.85)"
                      : "rgba(180,180,180,0.23)",
                    border: idx === currentProjectIdx
                      ? "2px solid #fff"
                      : "1px solid #888"
                  }}
                />
              ))}
            </div>
            <button
              className="bg-white/10 px-4 py-2 rounded-full text-white font-bold shadow hover:bg-white/30 transition"
              onClick={handleNextProject}
              aria-label="Next Project"
              tabIndex={0}
            >
              Next &#8594;
            </button>
          </div>
        </div>
      </div>

      {/* Modal for details */}
      <DetailsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={project}
      />
    </div>
  );
};

export default GlassCardCarousel;
