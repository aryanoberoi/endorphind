import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation, EffectCards, EffectCreative } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Lucide Icons
import { 
  Code, Smartphone, Palette, Cloud, 
  Bot, Shield, ArrowRight, Star,
  Rocket, Gem, Crown, CheckCircle,
  Zap, Globe, Database, Lock,
  Cpu, Monitor, Layers, TrendingUp,
  Play, Eye, Award, Target
} from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.1)_60deg,transparent_120deg)] animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Animated Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-3xl rounded-full px-6 py-3 border border-white/10 mb-8 shadow-2xl"
          >
            <Crown className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">ELITE SERVICES PORTFOLIO</span>
            <Gem className="w-5 h-5 text-purple-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-8 leading-tight"
          >
            Premium Digital
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
              Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Where innovation meets perfection. We craft extraordinary digital experiences that redefine industries and inspire generations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Start Your Project
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group flex items-center gap-2 px-8 py-4 text-white/80 hover:text-white transition-colors duration-300">
              <Play className="w-5 h-5" />
              Watch Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Main Services Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-24"
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="services-swiper"
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.id} className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%]">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-3xl overflow-hidden h-[500px] cursor-pointer group shadow-2xl"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80`}></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-20 h-full flex flex-col justify-between p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/20">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                          <p className="text-white/80 text-sm">{service.subtitle}</p>
                        </div>
                      </div>
                      <div className="text-white/60 text-xs">#{String(index + 1).padStart(2, '0')}</div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <p className="text-white/90 text-base leading-relaxed">{service.description}</p>
                      
                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={hoveredCard === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2 text-white/80 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={hoveredCard === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        className="flex items-center gap-6 pt-4 border-t border-white/20"
                      >
                        {Object.entries(service.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-white font-bold text-lg">{value}</div>
                            <div className="text-white/60 text-xs capitalize">{key}</div>
                          </div>
                        ))}
                      </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-between w-full p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 text-white font-semibold transition-all duration-300 hover:bg-white/20"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Secondary Features Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every project is a masterpiece crafted with precision, innovation, and unwavering commitment to quality.
            </p>
          </div>

          <Swiper
            effect="cards"
            grabCursor
            modules={[EffectCards, Autoplay]}
            autoplay={{ delay: 3000 }}
            className="features-swiper w-full max-w-sm"
          >
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                desc: "Optimized for speed and performance",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Scale",
                desc: "Ready for worldwide deployment",
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Bank-Grade Security",
                desc: "Enterprise-level protection",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Award Winning",
                desc: "Recognized industry excellence",
              },
            ].map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="feature-card">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mb-20"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-3xl rounded-3xl p-12 border border-white/10 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Something <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Extraordinary</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's transform your vision into a digital masterpiece that stands the test of time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
                Start Your Journey
              </button>
              <button className="flex items-center gap-2 px-8 py-5 text-white/80 hover:text-white transition-colors duration-300">
                <Eye className="w-5 h-5" />
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .services-swiper {
          padding: 60px 0 80px 0 !important;
        }
        .features-swiper {
          padding: 40px 0 !important;
        }
        .testimonials-swiper {
          padding: 40px 0 !important;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 12px !important;
          height: 12px !important;
        }
        .swiper-pagination-bullet-active {
          background: white !important;
          transform: scale(1.2) !important;
        }
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(20px) !important;
          width: 60px !important;
          height: 60px !important;
          border-radius: 50% !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          transition: all 0.3s ease !important;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 24px !important;
          font-weight: bold !important;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: scale(1.1) !important;
        }
        .swiper-slide-shadow-left, .swiper-slide-shadow-right {
          background: linear-gradient(to right, rgba(0,0,0,0.5), transparent) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;