import React from 'react';
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
    ];

    // Responsive breakpoints configuration
    const breakpoints = {
        // When window width is >= 320px
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
        // When window width is >= 640px
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
        // When window width is >= 1024px
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
        // When window width is >= 1280px
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
                // autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                    <SwiperSlide key={index} className="swiper-slide-responsive">
                        <div className="aspect-w-16 aspect-h-9 w-full max-w-[900px] mx-auto">
                            {slide.type === 'image' ? (
                                <img
                                    src={slide.src}
                                    alt={`slide ${index + 1}`}
                                    className="rounded-lg shadow-lg w-full h-full object-cover"
                                    loading="lazy"
                                />
                            ) : (
                                <video
                                    src={slide.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="rounded-lg shadow-lg w-full h-full object-cover"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                ))}
                
                {/* Custom Navigation Arrows */}
                <div className="swiper-button-prev !text-white !bg-black/30 !rounded-full !w-10 !h-10 md:!w-12 md:!h-12 after:!text-lg md:after:!text-xl"></div>
                <div className="swiper-button-next !text-white !bg-black/30 !rounded-full !w-10 !h-10 md:!w-12 md:!h-12 after:!text-lg md:after:!text-xl"></div>
                
                {/* Custom Pagination */}
                <div className="swiper-pagination !bottom-2 md:!bottom-4"></div>
            </Swiper>

            <style jsx>{`
                .swiper-slide-responsive {
                    width: 100%;
                    max-width: 900px;
                    height: auto;
                    aspect-ratio: 16/9;
                }
                
                @media (max-width: 640px) {
                    .swiper-slide-responsive {
                        max-width: 400px;
                    }
                }
                
                @media (max-width: 480px) {
                    .swiper-slide-responsive {
                        max-width: 320px;
                    }
                }
            `}</style>

            <style jsx global>{`
                .mySwiper {
                    width: 100%;
                    padding: 20px 0;
                }
                
                .swiper-slide-responsive {
                    transition: transform 0.3s ease;
                }
                
                .swiper-slide-active {
                    transform: scale(1.05);
                    z-index: 1;
                }
                
                /* Custom pagination bullets */
                .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.5;
                    width: 8px;
                    height: 8px;
                    margin: 0 4px;
                }
                
                .swiper-pagination-bullet-active {
                    background: #3b82f6;
                    opacity: 1;
                    width: 12px;
                    height: 12px;
                }
                
                /* Navigation buttons hover effects */
                .swiper-button-prev:hover,
                .swiper-button-next:hover {
                    background: rgba(0, 0, 0, 0.5) !important;
                }
                
                /* Mobile optimizations */
                @media (max-width: 768px) {
                    .mySwiper {
                        padding: 15px 0;
                    }
                    
                    .swiper-button-prev,
                    .swiper-button-next {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default GlideCarousel;