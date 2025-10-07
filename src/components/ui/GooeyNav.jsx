// GooeyNav.jsx
import React, { useState, useEffect, useRef } from "react";

const GooeyNav = ({
    items,
    animationTime = 600,
    particleCount = 4,
    particleDistances = [90, 10],
    particleR = 100,
    timeVariance = 300,
    colors = [1, 2, 3, 1, 2, 3, 1, 4],
    initialActiveIndex = 0,
    handleClick: externalHandleClick
}) => {
    const containerRef = useRef(null);
    const navRef = useRef(null);
    const filterRef = useRef(null);
    const textRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
    const isInitialMount = useRef(true);

    const noise = (n = 1) => n / 2 - Math.random() * n;
    const getXY = (distance, pointIndex, totalPoints) => {
        const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
        return [distance * Math.cos(angle), distance * Math.sin(angle)];
    };
    const createParticle = (i, t, d, r) => {
        let rotate = noise(r / 10);
        return {
            start: getXY(d[0], particleCount - i, particleCount),
            end: getXY(d[1] + noise(7), particleCount - i, particleCount),
            time: t,
            scale: 1 + noise(0.2),
            color: colors[Math.floor(Math.random() * colors.length)],
            rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
        };
    };
    const makeParticles = element => {
        const d = particleDistances;
        const r = particleR;
        const bubbleTime = animationTime * 2 + timeVariance;
        element.style.setProperty('--time', `${bubbleTime}ms`);
        for (let i = 0; i < particleCount; i++) {
            const t = animationTime * 2 + noise(timeVariance * 2);
            const p = createParticle(i, t, d, r);
            element.classList.remove('active');
            setTimeout(() => {
                const particle = document.createElement('span');
                const point = document.createElement('span');
                particle.classList.add('particle');
                particle.style.setProperty('--start-x', `${p.start[0]}px`);
                particle.style.setProperty('--start-y', `${p.start[1]}px`);
                particle.style.setProperty('--end-x', `${p.end[0]}px`);
                particle.style.setProperty('--end-y', `${p.end[1]}px`);
                particle.style.setProperty('--time', `${p.time}ms`);
                particle.style.setProperty('--scale', `${p.scale}`);
                particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
                particle.style.setProperty('--rotate', `${p.rotate}deg`);
                point.classList.add('point');
                particle.appendChild(point);
                element.appendChild(particle);
                requestAnimationFrame(() => {
                    element.classList.add('active');
                });
                setTimeout(() => {
                    try {
                        element.removeChild(particle);
                    } catch {
                        // do nothing
                    }
                }, t);
            }, 30);
        }
    };
    const updateEffectPosition = element => {
        if (!containerRef.current || !filterRef.current || !textRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const pos = element.getBoundingClientRect();
        const styles = {
            left: `${pos.x - containerRect.x}px`,
            top: `${pos.y - containerRect.y}px`,
            width: `${pos.width}px`,
            height: `${pos.height}px`
        };
        Object.assign(filterRef.current.style, styles);
        Object.assign(textRef.current.style, styles);
        textRef.current.innerText = element.innerText;
    };

    const internalHandleClick = (e, index) => {
        const liEl = e.currentTarget;

        if (externalHandleClick) {
            externalHandleClick(e, index);
        }

        if (activeIndex !== index) {
            setActiveIndex(index);
            updateEffectPosition(liEl);

            if (filterRef.current) {
                const particles = filterRef.current.querySelectorAll('.particle');
                particles.forEach(p => filterRef.current.removeChild(p));
                makeParticles(filterRef.current);
            }

            if (textRef.current) {
                textRef.current.classList.remove('active');
                void textRef.current.offsetWidth;
                textRef.current.classList.add('active');
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const liEl = e.currentTarget.parentElement;
            if (liEl) {
                internalHandleClick({ currentTarget: liEl }, index);
            }
        }
    };

    useEffect(() => {
        setActiveIndex(initialActiveIndex);
    }, [initialActiveIndex]);

    useEffect(() => {
        if (!navRef.current || !containerRef.current) return;

        const activeLi = navRef.current.querySelectorAll('li')[activeIndex];

        if (activeLi) {
            updateEffectPosition(activeLi);

            if (!isInitialMount.current) {
                if (filterRef.current) {
                    const particles = filterRef.current.querySelectorAll('.particle');
                    particles.forEach(p => filterRef.current.removeChild(p));
                    makeParticles(filterRef.current);
                }
                textRef.current?.classList.remove('active');
                void textRef.current.offsetWidth;
                textRef.current?.classList.add('active');
            } else {
                textRef.current?.classList.add('active');
            }
        } else {
            // Hide the effect if activeIndex is invalid
            filterRef.current.style.width = '0px';
            textRef.current.style.width = '0px';
        }

        isInitialMount.current = false;

        const resizeObserver = new ResizeObserver(() => {
            const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
            if (currentActiveLi) {
                updateEffectPosition(currentActiveLi);
            }
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, [activeIndex]);

    return (
        <>
            <style>
                {`
                    :root {
                        --linear-ease: linear(0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949, 0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%, 1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1);
                    }
                    .effect {
                        position: absolute;
                        opacity: 1;
                        pointer-events: none;
                        display: grid;
                        place-items: center;
                        z-index: 1;
                        transition: all ${animationTime}ms var(--linear-ease);
                    }
                    .effect.text {
                        color: white;
                        font-weight: 500;
                        font-size: 0.875rem;
                        transition: color 0.3s ease;
                    }
                    .effect.text.active {
                        color: black;
                    }
                    .effect.filter {
                        filter: url(#goo) contrast(100); 
                    }
                    .effect.filter::before {
                        content: "";
                        position: absolute;
                        inset: -75px;
                        z-index: -2;
                        background: rgba(0,0,0,0.1);
                    }
                    .effect.filter::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: white;
                        transform: scale(0);
                        opacity: 0;
                        z-index: -1;
                        border-radius: 9999px;
                    }
                    .effect.filter.active::after {
                        animation: pill 0.3s ease both;
                    }
                    @keyframes pill {
                        to {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }
                    li {
                        color: white;
                        transition: color 0.3s ease;
                    }
                    li.active {
                        color: black;
                        text-shadow: none;
                    }
                    li::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        border-radius: 9999px;
                        background: white;
                        opacity: 0;
                        transform: scale(0);
                        transition: all 0.3s ease;
                        z-index: -1;
                    }
                    .particle, .point {
                        display: block;
                        opacity: 0;
                        width: 20px;
                        height: 20px;
                        border-radius: 9999px;
                        transform-origin: center;
                    }
                    .particle {
                        --time: 5s;
                        position: absolute;
                        top: calc(50% - 8px);
                        left: calc(50% - 8px);
                        animation: particle calc(var(--time)) ease 1 -350ms;
                    }
                    .point {
                        background: var(--color);
                        opacity: 1;
                        animation: point calc(var(--time)) ease 1 -350ms;
                    }
                    @keyframes particle {
                        0% { transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y))); opacity: 1; animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45); }
                        70% { transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2)); opacity: 1; animation-timing-function: ease; }
                        85% { transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y))); opacity: 1; }
                        100% { transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5)); opacity: 1; }
                    }
                    @keyframes point {
                        0% { transform: scale(0); opacity: 0; animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45); }
                        25% { transform: scale(calc(var(--scale) * 0.25)); }
                        38% { opacity: 1; }
                        65% { transform: scale(var(--scale)); opacity: 1; animation-timing-function: ease; }
                        85% { transform: scale(var(--scale)); opacity: 1; }
                        100% { transform: scale(0); opacity: 0; }
                    }
                `}
            </style>

            <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            <div className="relative" ref={containerRef}>
                <nav className="flex relative" style={{ transform: 'translate3d(0,0,0.01px)' }}>
                    <ul
                        ref={navRef}
                        className="flex gap-2 list-none p-0 px-4 m-0 relative z-[3] "
                        style={{
                            color: 'white',
                            textShadow: '0 1px 1px hsl(205deg 30% 10% / 0.2)'
                        }}
                    >
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className={`rounded-full relative transition-[background-color_color_box-shadow] duration-300 ease shadow-none text-white ${
                                    activeIndex === index ? 'active' : ''
                                }`}
                            >
                                <a
                                    onClick={e => internalHandleClick(e, index)}
                                    href={item.href}
                                    onKeyDown={e => handleKeyDown(e, index)}
                                    className="outline-none py-2 px-4 inline-block text-sm font-medium whitespace-nowrap"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <span className="effect filter" ref={filterRef} />
                <span className="effect text" ref={textRef} />
            </div>
        </>
    );
};

export default GooeyNav;