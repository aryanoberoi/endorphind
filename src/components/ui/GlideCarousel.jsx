import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
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

  return (
    <div className="w-full py-10">
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}
           className="aspect-w-16 aspect-h-9 w-[300px]"
           style={{ width: '900px', height: '481.25px' }}>
            {slide.type === 'image' ? (
              <img
                src={slide.src}
                alt={`slide ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-full object-cover"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GlideCarousel;
