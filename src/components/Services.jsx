import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We build fast, scalable, and secure websites tailored to your business needs. From landing pages to full-stack applications, our team delivers modern digital experiences.",
      link: "#web-development",
      image:
        "https://placehold.co/600x300/0f172a/f1f5f9?text=Web+Development",
    },
    {
      title: "Mobile App Development",
      description:
        "Our experts create intuitive, high-performance mobile applications for iOS and Android. We focus on smooth user experiences and cutting-edge features to keep your users engaged.",
      link: "#mobile-app",
      image: "https://placehold.co/600x300/0f172a/f1f5f9?text=Mobile+Apps",
    },
    {
      title: "UI/UX Design",
      description:
        "Design is at the heart of everything we build. Our UI/UX specialists craft engaging, user-friendly interfaces that are both visually stunning and highly functional.",
      link: "#ui-ux",
      image: "https://placehold.co/600x300/0f172a/f1f5f9?text=UI+%26+UX+Design",
    },
    {
      title: "Cloud Solutions",
      description:
        "We provide scalable cloud integration, deployment, and management services. From migration to optimization, we help businesses harness the power of the cloud.",
      link: "#cloud",
      image: "https://placehold.co/600x300/0f172a/f1f5f9?text=Cloud+Solutions",
    },
    {
      title: "AI & Automation",
      description:
        "Unlock the potential of AI and automation. We develop custom machine learning models, chatbots, and workflow automation to boost efficiency and innovation.",
      link: "#ai",
      image:
        "https://placehold.co/600x300/0f172a/f1f5f9?text=AI+%26+Automation",
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your digital assets with our end-to-end cybersecurity services. We offer risk assessments, penetration testing, and security audits to safeguard your business.",
      link: "#cybersecurity",
      image: "https://placehold.co/600x300/0f172a/f1f5f9?text=Cybersecurity",
    },
  ];

  return (
    <section className="bg-gray-950 py-20 px-6 md:px-12 lg:px-20 font-sans">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold text-white mb-20"
      >
        Our Professional Services
      </motion.h2>

      {/* Services Container */}
      <div className="max-w-7xl mx-auto space-y-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              rotateX: 2,
              rotateY: index % 2 === 0 ? 2 : -2,
              boxShadow: "0px 15px 30px rgba(0,0,0,0.5)",
            }}
            className={`flex flex-col md:flex-row items-center w-full
                        bg-gray-900/90 border border-gray-800 rounded-2xl shadow-lg overflow-hidden
                        backdrop-blur-md transition-all duration-300 ease-in-out
                        ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Service Text */}
            <div className="w-full md:w-1/2 p-8 text-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-base mb-6 leading-relaxed text-gray-300">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                           text-white font-semibold py-2.5 px-6 rounded-full text-sm
                           shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
                           transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
              >
                Get Started
              </a>
            </div>

            {/* Service Image */}
            <div className="w-full md:w-1/2 relative group overflow-hidden">
              <a href={service.link} className="block">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 md:h-64 object-cover transform transition-all duration-500 ease-in-out
                             group-hover:scale-105 group-hover:brightness-75"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/600x300/0f172a/f1f5f9?text=Image+Unavailable`;
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/60"
                >
                  <span className="text-white text-lg font-semibold tracking-wide">
                    Learn More
                  </span>
                </motion.div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
