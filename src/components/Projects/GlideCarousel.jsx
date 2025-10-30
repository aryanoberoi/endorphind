import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';

const DEFAULT_ITEMS = [
  { type: 'video', src: 'Carousel/10.mp4' },
  { type: 'video', src: 'Carousel/11.mp4' },
  { type: 'image', src: 'Carousel/1.jpg' },
  { type: 'image', src: 'Carousel/2.jpg' },
  { type: 'image', src: 'Carousel/3.jpg' },
  { type: 'image', src: 'Carousel/4.jpg' },
  { type: 'image', src: 'Carousel/5.jpg' },
  { type: 'image', src: 'Carousel/6.jpg' },
  { type: 'image', src: 'Carousel/7.jpg' },
  { type: 'image', src: 'Carousel/8.jpg' },
  { type: 'image', src: 'Carousel/9.jpg' }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = true, // Enable loop by default for infinite scrolling
  round = false
}) {
  const baseWidth = window.innerWidth * 0.9;
  const itemWidth = baseWidth / 3;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, ...items.slice(0, 2)] : items; // Repeat first items for smooth infinite effect
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);

  const handleNext = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % carouselItems.length
    );
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => 
      (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const dragProps = loop ? {} : {
    dragConstraints: {
      left: -trackItemOffset * (carouselItems.length - 1),
      right: 0
    }
  };

  return (
    <div className="relative overflow-hidden p-4" style={{ width: '90vw', height: '300px' }}>
      <button
        className="absolute left-0 top-0 w-12 h-full bg-black bg-opacity-50 text-white text-3xl flex items-center justify-center z-10"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          x,
          width: itemWidth * carouselItems.length,
          gap: `${GAP}px`
        }}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={SPRING_OPTIONS}
      >
        {carouselItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative shrink-0 flex-none"
            style={{ width: itemWidth }}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={`Carousel item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                controls
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
      <button
        className="absolute right-0 top-0 w-12 h-full bg-black bg-opacity-100 text-white text-3xl flex items-center justify-center z-10"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
}
