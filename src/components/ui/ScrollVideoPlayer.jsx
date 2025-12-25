import { useEffect, useState, useRef } from "react";

const ScrollVideoPlayer = () => {
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll] = useState(400); // Fixed max scroll for shrinking
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / maxScroll, 1);

  const currentWidth = 100 - 50 * scrollProgress; // 100% → 30%
  const currentHeight = 100 - 50 * scrollProgress; // 100% → 30%
  const borderRadius = scrollProgress * 20;

  // While scrolling, keep it fixed. After full shrink, let it scroll away.
  const isFixed = scrollY < maxScroll;

  return (
    <div ref={containerRef} className="relative z-10">
      <div
        className={`w-full flex justify-center z-10 ${
          isFixed ? "fixed" : "absolute"
        }`}
        style={{
          top: isFixed ? "70px" : `${maxScroll + 70}px`,
        }}
      >
        <div
          className="relative overflow-hidden shadow-video transition-all duration-700 ease-out bg-black"
          style={{
            width: `${currentWidth}vw`,
            height: `${currentHeight}vh`,
            borderRadius: `${borderRadius}px`,
          }}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/poster.png"
          >
            <source
              src="/Video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* Spacer to allow scrolling after video shrinks */}
      <div style={{ height: `${maxScroll + 400}px` }} />
    </div>
  );
};

export default ScrollVideoPlayer;
