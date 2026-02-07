import React, { useState, useRef } from 'react';

const customCarouselItems = [
    { type: 'video', src: 'Carousel/10.mp4' },
    { type: 'video', src: 'Carousel/13.mp4' },
    { type: 'video', src: 'Carousel/11.mp4' },
    { type: 'video', src: 'Carousel/12.mp4' },
    { type: 'image', src: 'Carousel/3.jpg' },
    { type: 'image', src: 'Carousel/4.jpg' },
    { type: 'image', src: 'Carousel/5.jpg' },
    { type: 'image', src: 'Carousel/6.jpg' },
    { type: 'image', src: 'Carousel/7.jpg' },
    { type: 'image', src: 'Carousel/8.jpg' },
    { type: 'image', src: 'Carousel/9.jpg' }
];

const PreloadContent = () => {
    return customCarouselItems.map((item, index) =>
        item.type === 'video' ? (
            <video key={index} src={item.src} preload="auto" style={{ display: 'none' }} />
        ) : (
            <img key={index} src={item.src} alt={`Preload ${index + 1}`} style={{ display: 'none' }} />
        )
    );
};

const SWIPE_THRESHOLD = 40; // px

const GlideCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [slideDirection, setSlideDirection] = useState(''); // 'left' or 'right'
    const totalSlides = customCarouselItems.length;

    // Touch handling refs
    const touchStartX = useRef(null);
    const touchInProgress = useRef(false);

    const goToNextSlide = () => {
        if (isSliding) return;
        setSlideDirection('right');
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
            setIsSliding(false);
        }, 500);
    };

    const goToPrevSlide = () => {
        if (isSliding) return;
        setSlideDirection('left');
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
            setIsSliding(false);
        }, 500);
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
        if (isSliding) return;
        if (e.touches && e.touches.length === 1) {
            touchStartX.current = e.touches[0].clientX;
            touchInProgress.current = true;
        }
    };

    const handleTouchMove = (e) => {
        // Prevent browser scrolling if inside carousel
        if (touchInProgress.current) {
            e.preventDefault && e.preventDefault();
        }
    };

    const handleTouchEnd = (e) => {
        if (!touchInProgress.current || touchStartX.current === null) return;
        let endX;
        if (e.changedTouches && e.changedTouches.length === 1) {
            endX = e.changedTouches[0].clientX;
            const diff = endX - touchStartX.current;
            if (Math.abs(diff) > SWIPE_THRESHOLD) {
                if (diff > 0) {
                    goToPrevSlide();
                } else {
                    goToNextSlide();
                }
            }
        }
        touchStartX.current = null;
        touchInProgress.current = false;
    };

    // Get slide for display
    const currentItem = customCarouselItems[currentIndex];

    // Simple CSS classes for animation (tailwind-friendly + inline fallback)
    const slideBase = {
        transition: 'transform 0.5s cubic-bezier(0.45,0,0.55,1), opacity 0.5s cubic-bezier(0.45,0,0.55,1)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    let slideAnimStyle = {};
    if (isSliding) {
        slideAnimStyle = slideDirection === 'right'
            ? { ...slideBase, transform: 'translateX(-100%)', opacity: 0 }
            : { ...slideBase, transform: 'translateX(100%)', opacity: 0 };
    } else {
        slideAnimStyle = { ...slideBase, transform: 'translateX(0)', opacity: 1 };
    }

    // OUTER container for positioning arrows outside the carousel frame, plus touch events on the carousel
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Left Arrow */}
            <button
                onClick={goToPrevSlide}
                disabled={isSliding}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 md:relative md:left-auto md:top-auto md:translate-y-0 md:mr-6"
                style={{
                    fontSize: '2.5rem',
                    color: '#fff',
                    background: 'rgba(0,0,0,0.35)',
                    border: 'none',
                    borderRadius: '0 12px 12px 0',
                    cursor: isSliding ? 'not-allowed' : 'pointer',
                    padding: '0.3em 0.8em',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.22)',
                    transition: 'background 0.2s',
                    touchAction: 'none'
                }}
                aria-label="Previous Slide"
            >‹</button>

            {/* Carousel */}
            <div
                className="carousel-container"
                style={{
                    position: 'relative',
                    width: '80%',
                    maxWidth: '750px',
                    height: '400px',
                    overflow: 'hidden',
                    margin: '0 auto',
                    flexShrink: 0,
                    flexGrow: 0,
                    background: "transparent"
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <PreloadContent />
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    {currentItem.type === 'video' ? (
                        <video
                            key={currentIndex}
                            src={currentItem.src}
                            className="carousel-item"
                            controls
                            muted
                            loop
                            autoPlay
                            style={{ ...slideAnimStyle, background: "transparent", maxHeight: '400px', objectFit: "contain" }}
                        />
                    ) : (
                        <img
                            key={currentIndex}
                            src={currentItem.src}
                            alt={`Slide ${currentIndex + 1}`}
                            className="carousel-item"
                            style={{ ...slideAnimStyle, background: "transparent", maxHeight: '400px', objectFit: "contain" }}
                        />
                    )}
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: 18,
                        left: 0,
                        right: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 8,
                        zIndex: 2
                    }}
                >
                    {customCarouselItems.map((_, i) => (
                        <span
                            key={i}
                            style={{
                                display: 'block',
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                background: i === currentIndex ? '#fff' : 'rgba(180,180,180,0.4)'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Right Arrow */}
            <button
                onClick={goToNextSlide}
                disabled={isSliding}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:relative md:right-auto md:top-auto md:translate-y-0 md:ml-6"
                style={{
                    fontSize: '2.5rem',
                    color: '#fff',
                    background: 'rgba(0,0,0,0.35)',
                    border: 'none',
                    borderRadius: '12px 0 0 12px',
                    cursor: isSliding ? 'not-allowed' : 'pointer',
                    padding: '0.3em 0.8em',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.22)',
                    transition: 'background 0.2s',
                    touchAction: 'none'
                }}
                aria-label="Next Slide"
            >›</button>
        </div>
    );
};

export default GlideCarousel;