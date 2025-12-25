# Endorphind Project Context

## Project Summary
Endorphind is a creative and wellness company's website. It showcases their work in video production, AI applications, and storytelling. The site features a high-end, dark-themed design with 3D elements, smooth animations, and interactive components.

## Tech Stack
- **Framework**: React 19 (Vite)
- **Language**: JavaScript (JSX)
- **Styling**: Tailwind CSS v4, SCSS (minimal), CSS Modules (implied by file structure)
- **Animations**: GSAP, Motion (Framer Motion), React Spring (likely via dependencies)
- **3D**: Three.js, React Three Fiber, React Three Drei, React Three Rapier
- **UI Components**: Radix UI, Lucide React
- **Carousels**: Glide.js, Embla Carousel, Swiper
- **Routing**: React Router DOM v7

## Architecture
- **Entry Point**: `src/main.jsx` mounts `App.jsx`.
- **Routing**: Defined in `src/App.jsx` using `react-router-dom`.
- **State Management**: Primarily local state (`useState`, `useEffect`).
- **Styling Strategy**: Utility-first with Tailwind CSS. Custom fonts defined in `index.css`.
- **Assets**: Images and static files in `public/` and `src/assets/`.

## Directory Structure
```
/
├── public/              # Static assets (images, fonts)
├── src/
│   ├── assets/          # Imported assets
│   ├── components/      # Main business components
│   │   ├── Projects/    # Project-specific components
│   │   ├── carousel/    # Carousel implementations
│   │   ├── ui/          # Generic/Reusable UI components & effects
│   │   └── ...          # Feature components (AboutUs, Findaura, etc.)
│   ├── lib/             # Utilities (utils.js)
│   ├── pages/           # Page components (Home, Team, etc.)
│   ├── App.jsx          # Main application component & Routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind directives
├── .env                 # Environment variables
├── package.json         # Dependencies & Scripts
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## Key Files
- `src/App.jsx`: Handles client-side routing.
- `src/index.css`: Contains global styles, font definitions, and Tailwind imports.
- `tailwind.config.js`: Custom theme extensions (colors, fonts, animations).
- `src/lib/utils.js`: Common utility functions (likely `cn` for class merging).
