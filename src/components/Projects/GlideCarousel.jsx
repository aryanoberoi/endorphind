import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const GlideCarousel = () => {
    const slides = [
        { type: 'image', src: '/Carousel/1.jpg' },
        { type: 'image', src: '/Carousel/2.jpg' },
        { type: 'image', src: '/Carousel/3.jpg' },
        { type: 'image', src: '/Carousel/4.jpg' },
        { type: 'image', src: '/Carousel/5.jpg' },
        { type: 'image', src: '/Carousel/6.jpg' },
        { type: 'image', src: '/Carousel/7.jpg' },
        { type: 'image', src: '/Carousel/8.jpg' },
        { type: 'image', src: '/Carousel/9.jpg' },
        { type: 'video', src: '/Carousel/10.mp4' },
        { type: 'video', src: '/Carousel/11.mp4' },
    ];

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
            coverflowEffect: {
                rotate: 0,
                stretch: 50,
                depth: 100,
                modifier: 1.2,
                slideShadows: false,
            }
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            coverflowEffect: {
                rotate: 0,
                stretch: 100,
                depth: 150,
                modifier: 1.5,
                slideShadows: false,
            }
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 40,
            coverflowEffect: {
                rotate: 0,
                stretch: 100,
                depth: 150,
                modifier: 1.5,
                slideShadows: false,
            }
        }
    };

    return (
        <div className="w-full py-5 md:py-10 px-4 md:px-6">
            <Swiper
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ 
                    clickable: true,
                    el: '.swiper-pagination'
                }}
                breakpoints={breakpoints}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="!w-full !max-w-[300px] sm:!max-w-[400px] md:!max-w-[500px] lg:!max-w-[600px] !aspect-video !transition-transform !duration-300 !ease-out">
                        <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white relative">
                            {slide.type === 'image' ? (
                                <img
                                    src={slide.src}
                                    alt={`slide ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    loading="lazy"
                                />
                            ) : (
                                <VideoWithMute src={slide.src} />
                            )}
                            <img 
                                src="studioslogo.png" 
                                alt="logo" 
                                className="absolute bottom-2 right-2 w-40 h-10"
                            />
                        </div>
                    </SwiperSlide>
                ))}
                
                {/* Navigation Arrows */}
                <div className="swiper-button-prev !text-white !bg-black/30 hover:!bg-black/50 !rounded-full !w-10 !h-10 md:!w-12 md:!h-12 after:!text-lg md:after:!text-xl !transition-all !duration-300"></div>
                <div className="swiper-button-next !text-white !bg-black/30 hover:!bg-black/50 !rounded-full !w-10 !h-10 md:!w-12 md:!h-12 after:!text-lg md:after:!text-xl !transition-all !duration-300"></div>
                
                {/* Pagination */}
                <div className="swiper-pagination !bottom-2 md:!bottom-4"></div>
            </Swiper>

            {/* Global styles using style tag */}
            <style>{`
                .mySwiper {
                    width: 100%;
                    padding: 20px 0;
                }
                
                .swiper-slide-active {
                    transform: scale(1.05) !important;
                    z-index: 1;
                }
                
                .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.5;
                    width: 8px;
                    height: 8px;
                    margin: 0 4px;
                    transition: all 0.3s ease;
                }
                
                .swiper-pagination-bullet-active {
                    background: #3b82f6;
                    opacity: 1;
                    width: 12px;
                    height: 12px;
                }
                
                @media (max-width: 768px) {
                    .mySwiper {
                        padding: 15px 0;
                    }
                    
                    .swiper-button-prev,
                    .swiper-button-next {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

const VideoWithMute = ({ src }) => {
    const [isMuted, setIsMuted] = useState(true);

    const handleMuteToggle = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className="relative h-full">
            <video
                src={src}
                autoPlay
                loop
                playsInline
                muted={isMuted}
                className="w-full h-full object-cover"
            />
            <button
                onClick={handleMuteToggle}
                className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2">
                {isMuted ? '🔇' : '🔊'}
            </button>
            {/* <img 
                src="studioslogo.png" 
                alt="logo" 
                className="absolute bottom-2 right-2 w-15 h-10"
            /> */}
        </div>
    );
};

export default GlideCarousel;