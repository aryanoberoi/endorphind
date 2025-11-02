import React from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

// Utility function to replace all m-dashes (—, Unicode U+2014) with commas
function removeMdashes(str) {
  if (typeof str === 'string') {
    return str.replace(/\u2014/g, ",");
  }
  return str;
}

// Cleaned experiences data (all m-dashes removed)
const experiences = [
  {
    company: "Endorphind",
    title: "Full Stack Developer & AI Creative Technologist",
    period: "June 2025 - Present",
    description: [
      "Founded and led a boutique AI/GenAI studio delivering cross-domain projects in RAG, diffusion models, and AI automation.",
      "Built Greenfinite.ai: an AI-based sustainability tool for tracking carbon footprint, ESG scores, and sustainability reports.",
      "Developed ComfyUI workflows for Interior Design and Product Photoshoots in collaboration with Jeem Studios.",
      "Created Sounding The Invisible as an art piece for artist Nandita Kumar.",
      "Collaborated with edmo.education to build their AI image/video pipeline for history-based short films with diffusion models.",
    ].map(removeMdashes),
  },
  {
    company: "fanon.co",
    title: "AI Engineer",
    period: "March 2025 - May 2025",
    description: [
      "Developed and optimized the “Story-to-Comic” generation pipeline in collaboration with Baahubali Studios, combining LLMs, Diffusion Models, and ControlNet for narrative-driven visual generation.",
      "Engineered an end-to-end multimodal workflow that transformed user scripts into coherent comic panels, integrating character consistency, scene layout automation, and dialogue-aware image synthesis.",
      "Fine-tuned Stable Diffusion and LoRA models for specific art styles and cinematic themes, improving visual coherence and stylization across frames.",
      "Collaborated cross-functionally with design and creative teams to ensure narrative fidelity and high-quality visual storytelling through AI-assisted creative pipelines.",
    ].map(removeMdashes),
  },
  {
    company: "Indian Institute of Technology, Delhi",
    title: "Research Associate III / Founding Engineer",
    period: "May 2024 - Feb 2025",
    description: [
      "Designed and developed a Retrieval-Augmented Generation (RAG) system for unified querying and analysis of PDF, DOCX, CSV, Excel, and SQL data sources using LangChain, FastAPI, and OpenAI embeddings  iknow.carnotresearch.com.",
      "Architected document-chunking, vector indexing, and hybrid retrieval pipelines combining dense embeddings (FAISS) with keyword-based BM25 search, improving query relevance and response accuracy.",
      "Implemented RAG evaluation pipelines using RAGAS to quantitatively assess faithfulness, answer relevance, and context recall, driving iterative model improvement.",
      "Built and integrated a React-based frontend that enabled users to upload documents, chat with data, and visualize retrieval confidence in real time.",
    ].map(removeMdashes),
  },
  {
    company: "Indian Institute of Technology, Delhi",
    title: "AI/ML Intern",
    period: "Jan 2024 - May 2024",
    description: [
      "Developed cr-nlp, a custom NLP library to streamline natural language processing tasks.",
      "Conducted speech-based sentiment analysis by converting raw audio waveforms into the frequency domain using Fast Fourier Transforms (FFT) to extract emotion-related spectral features.",
      "Developed a modular speech sentiment and clustering suite using NLP, KMeans, and sparse modeling on real-world audio/text datasets; IITD-work."
    ].map(removeMdashes),
  },
  {
    company: "WhatAnAIdea!",
    title: "GenAI Intern",
    period: "March 2024 - May 2024",
    description: [
      "Built Stable Diffusion pipelines for product and interior design rendering, integrating LoRA fine-tuning and ControlNet conditioning for enhanced creative control.",
      "Trained Diffusion Models and LORAs to enhance efficiency and performance of generative AI tasks.",
      "Designed and implemented the WhatAnAIdea internal testing tool to streamline testing processes."
    ].map(removeMdashes),
  },
  {
    company: "Xenvis",
    title: "Technology Research Intern",
    period: "March 2023 - July 2023",
    description: [
      "Developed object recognition models and AR/VR prototypes using Unity and Vuforia.",
      "Created detailed 3D models leveraging photogrammetry techniques for high-quality visual assets.",
      "Designed and deployed Android applications integrating AR/VR modules, contributing to early-stage mixed-reality product research."
    ].map(removeMdashes),
  },
];

// Cleaned projects data (all m-dashes removed)
const projects = [
  {
    name: "Greenfinite.ai",
    url: "https://greenfinite.ai",
    period: "2023",
    description:
      "An AI-powered sustainability tool for organizations to track carbon footprint, ESG scores, and generate compliance-ready sustainability reports. Built intelligent dashboards and integrated automated PDF parsing and data extraction pipelines.",
    stack: ["LangChain", "FastAPI", "React", "OpenAI", "Vector DBs"]
  },
  {
    name: "Story-to-Comic (Baahubali Studios x Fanon.co)",
    url: "https://fanon.co",
    period: "2024",
    description:
      "Developed a narrative pipeline combining LLM-driven script parsing, Stable Diffusion/LoRA for visual synthesis, and ControlNet-based panel structuring to turn scripts into visually rich comic book panels. Enabled dialogue-aware and shot-consistent output.",
    stack: ["Stable Diffusion", "ControlNet", "LoRA", "LLMs", "React"]
  },
  {
    name: "iknow.carnotresearch.com",
    url: "https://iknow.carnotresearch.com",
    period: "2022",
    description:
      "Architected a unified Retrieval-Augmented Generation (RAG) platform allowing users to chat with and query knowledge from a mix of PDF, DOCX, Excel, and SQL data sources via advanced chunking, dense and keyword search, and real-time QA.",
    stack: ["LangChain", "OpenAI", "FAISS", "BM25", "FastAPI", "React"]
  },
  {
    name: "ComfyUI Interior/Product Workflows",
    url: "",
    period: "2023",
    description:
      "Custom ComfyUI node-workflows to generate high-quality interior and product photoshoots with generative AI, incorporating inpainting, control image masks, and prompt/hyperparam scripting. Deployed in collaboration with Jeem Studios.",
    stack: ["ComfyUI", "Diffusion Models", "ControlNet"]
  },
  {
    name: "Sounding The Invisible",
    url: "https://soundingtheinvisible.com/",
    period: "2023",
    description:
      // Removed m-dash in this sentence below ("audio, visuals, and sensors—using AI ..." -> "audio, visuals, and sensorsusing AI ...")
      "Collaborated with artist Nandita Kumar to build an interactive art experience blending generative audio, visuals, and sensorsusing AI for immersive digital artistry.",
    stack: ["p5.js", "AI Audio", "Creative Coding"]
  },
  {
    name: "Edmo Education AI Video Pipeline",
    url: "https://edmo.education",
    period: "2024",
    description:
      "Helped build an AI-powered pipeline to generate history-based short films using diffusion models and image-to-video, automating scripts to cinematic visuals pipeline.",
    stack: ["Diffusion Models", "Image-to-Video", "LLMs", "Python"]
  },
];

export default function AryanPortfolio() {
  return (
    <div
      className="min-h-screen flex flex-col w-full"
      style={{
        background: "transparent",
        backgroundSize: "cover",
        fontFamily: "robit, 'Outfit', sans-serif",
        width: "100vw",
        minWidth: 0,
      }}
    >
      <Navbar />
      <main className="flex-1 flex flex-col items-center px-4 py-10 w-full" style={{ background: "transparent" }}>
        {/* Who am I */}
        <section className="w-full max-w-4xl mb-16" style={{ background: "transparent" }}>
          <h1
            className="text-5xl md:text-6xl font-bold text-center mb-6"
            style={{
              color: "#DE9F3A",
              letterSpacing: "0.04em",
              fontFamily: "Robit, 'Outfit', sans-serif",
              background: "transparent",
            }}
          >
            Aryan Oberoi
          </h1>
          <h2 className="text-lg text-center mb-8 text-gray-300" style={{ background: "transparent" }}>
            Creative Technologist | Full-Stack Developer | AI 
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6" style={{ background: "transparent" }}>
            <div className="flex-shrink-0 flex justify-center">
              <img
                src="team/aryano.png"
                alt="Aryan Oberoi"
                className="object-cover"
                style={{
                  width: 400,
                  height: 700,
                  border: "4px solid #DE9F3A",
                  background: "transparent",
                  minWidth: 400,
                  minHeight: 400,
                  borderRadius: 0,
                  boxShadow: "0 4px 40px rgba(0,0,0,0.25)",
                }}
                onError={e => (e.target.style.display='none')}
              />
            </div>
            <div>
              <p className="text-gray-200 text-xl leading-relaxed text-center md:text-left" style={{ background: "transparent" }}>
                I am a passionate technologist with a deep love for philosophy, spirituality, and psychology. I believe that the intersection of these fields holds the key to creating innovative solutions that can truly transform our world.
                <br /><br />
                My journey in AI has been driven by relentless curiosity and a desire to leverage advancements for the greater good. I am particularly fascinated by how AI can be used to enhance emotional understanding and human connections. My interests extend to data science, machine learning (ML), large language models (LLMs), and research, fields that captivate me with their endless possibilities for innovation and solving complex problems.
                <br /><br />
                In addition to my passion for technology, I have a keen interest in filmmaking, content creation, and acting. I see storytelling as a powerful tool to inspire, educate, and bring about change. I also use AI to create beautiful visuals in films, as I believe content is the way to touch people’s hearts and spark inspiration.
                <br /><br />
                Understanding the human mind and behavior not only fascinates me but also informs my approach to technology and storytelling. Whether it’s through developing cutting-edge technology, or crafting engaging content, my goal is to contribute to a better, more empathetic world.
              </p>
              {/* Social Links */}
              <div className="flex justify-center md:justify-start mt-6 gap-6">
                <a
                  href="https://github.com/aryanoberoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-300 hover:text-[#DE9F3A]"
                  style={{ fontSize: 30, background: "transparent" }}
                >
                  <svg height="1.4em" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline', verticalAlign: 'middle' }}>
                    <path d="M12 0c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.833 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.304-5.467-1.333-5.467-5.932 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.524.117-3.177 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.403c1.018.004 2.045.138 3.003.403 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.874.12 3.177.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.479 5.921.43.371.814 1.102.814 2.222 0 1.606-.015 2.903-.015 3.293 0 .32.217.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/aryan-oberoi-1b4358195/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-300 hover:text-[#DE9F3A]"
                  style={{ fontSize: 30, background: "transparent" }}
                >
                  <svg height="1.4em" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline', verticalAlign: 'middle' }}>
                    <path d="M4.98 3.5C4.98 5.43 3.41 7 1.49 7S-2 5.43-2 3.5 1.57 0 3.49 0 4.98 1.57 4.98 3.5zm.02 4.5H0v16h5V8zm7.5 0h-4.69V24H14.5v-8.4c0-2.03 2.64-2.21 2.64 0V24h4.88V13.33c0-6.11-6.6-5.89-7.88-2.89V8z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* My Journey */}
        <section className="w-full max-w-4xl mb-16" style={{ background: "transparent" }}>
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ color: "#DE9F3A", fontFamily: "Robit, 'Outfit', sans-serif", background: "transparent" }}
          >
            My Journey
          </h2>
          <ol className="relative border-l-2 border-[#DE9F3A] ml-4" style={{ background: "transparent" }}>
            {experiences.map((exp, idx) => (
              <li key={idx} className="mb-12 ml-8 relative" style={{ background: "transparent" }}>
                <span className="absolute -left-5 top-3 w-4 h-4 bg-[#DE9F3A] rounded-full border-2 border-black" style={{ background: "#DE9F3A" }}></span>
                <h3 className="text-2xl font-semibold text-white mb-1" style={{ background: "transparent" }}>{exp.title}</h3>
                <span className="text-[#DE9F3A] text-lg font-medium" style={{ background: "transparent" }}>{exp.company}</span>
                <span className="block text-gray-400 text-sm mb-2" style={{ background: "transparent" }}>{exp.period}</span>
                <ul className="list-disc text-gray-300 text-base max-w-2xl ml-5 space-y-1" style={{ background: "transparent" }}>
                  {Array.isArray(exp.description)
                    ? exp.description.map((point, i) => (
                        <li key={i} style={{ background: "transparent" }}>{removeMdashes(point)}</li>
                      ))
                    : <li style={{ background: "transparent" }}>{removeMdashes(exp.description)}</li>
                  }
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* How I got here */}
        <section className="w-full max-w-3xl mb-12" style={{ background: "transparent" }}>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            style={{ color: "#DE9F3A", fontFamily: "Robit, 'Outfit', sans-serif", background: "transparent" }}
          >
            How I Got Here
          </h2>
          <p className="text-gray-200 text-xl leading-relaxed text-center mb-3" style={{ background: "transparent" }}>
            My journey began with curiosity about how things work and how we connect. From tweaking front-end designs at midnight, to running video edits, to meditating on ways tech can heal, I found immense joy in learning and creating.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed text-center" style={{ background: "transparent" }}>
            Today, I’m building at Endorphind, fusing technology, story, and wellness into meaningful digital adventures. The journey continues: always learning, always building, always connecting.
          </p>
        </section>
        <section className="w-full max-w-4xl mb-16" style={{ background: "transparent" }}>
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ color: "#DE9F3A", fontFamily: "Robit, 'Outfit', sans-serif", background: "transparent" }}
          >
            Projects
          </h2>
          <div className="space-y-10" style={{ background: "transparent" }}>
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 flex flex-col md:flex-row gap-6"
                style={{
                  background: "transparent",
                  boxShadow: "none",
                  backdropFilter: "none"
                }}
              >
                <div className="flex-1" style={{ background: "transparent" }}>
                  <div className="flex items-center gap-3 mb-1" style={{ background: "transparent" }}>
                    <h3 className="text-2xl font-semibold text-white" style={{ background: "transparent" }}>
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#DE9F3A]" style={{ background: "transparent" }}>{project.name}</a>
                      ) : (
                        <span className="text-[#DE9F3A]" style={{ background: "transparent" }}>{project.name}</span>
                      )}
                    </h3>
                    <span className="text-xs text-gray-400 mt-1" style={{ background: "transparent" }}>{project.period}</span>
                  </div>
                  {/* removed m-dashes here in project.description */}
                  <p className="text-gray-200 text-lg mb-2" style={{ fontFamily: "Robit, 'Outfit', sans-serif", background: "transparent" }}>
                    {removeMdashes(project.description)}
                  </p>
                  {project.stack && (
                    <div className="flex flex-wrap items-center gap-2 mt-1" style={{ background: "transparent" }}>
                      {project.stack.map((stackItem, sidx) => (
                        <span
                          key={sidx}
                          className="text-[#DE9F3A] text-xs px-2 py-1 rounded font-mono tracking-wide"
                          style={{ background: "transparent" }}
                        >
                          {stackItem}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* My Spiritual Journey */}
        <section className="w-full max-w-3xl mb-16" style={{ background: "transparent" }}>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            style={{
              color: "#DE9F3A",
              fontFamily: "Robit, 'Outfit', sans-serif",
              background: "transparent",
            }}
          >
            My Spiritual Journey
          </h2>
          <p className="text-gray-200 text-xl leading-relaxed text-center mb-3" style={{ background: "transparent" }}>
            My spiritual journey has been a continuous exploration of consciousness, purpose, and interconnectedness. From a young age, I found myself drawn to the deeper questions of existence, seeking meaning beyond the surface and aspiring to understand the intricate relationship between mind, spirit, and the universe.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed text-center mb-3" style={{ background: "transparent" }}>
            Practices like meditation, yoga, and mindfulness have been instrumental in nurturing my inner awareness and resilience. These disciplines have not only provided clarity and grounding, but have deeply influenced how I navigate challenges, create, and relate to others. Through spiritual inquiry, I have learned to appreciate the beauty of presence, the power of silence, and the wisdom that comes from simply being.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed text-center mb-3" style={{ background: "transparent" }}>
            Alongside these, I also regularly dabble into the realms of astrology and occult sciences, always with a spirit of curiosity and the intention of using these ancient knowledges for the well-being and benefit of all. Exploring astrology and occult teachings complements my spiritual pursuits, providing fresh perspectives and insights that support my own growth and help others find meaning, guidance, and harmony in their lives.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed text-center" style={{ background: "transparent" }}>
            My work is an extension of this inner journey, an earnest attempt to channel creativity, compassion, and consciousness into everything I build and share. My vision is to bridge technology and spirituality, helping others find joy, connection, and purpose in the digital age while nurturing my own path towards a more awakened and harmonious existence.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
