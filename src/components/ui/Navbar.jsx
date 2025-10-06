import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  GearIcon,
  InfoCircledIcon,
  EnvelopeClosedIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useNavigate, useLocation, Link } from "react-router-dom";

const MobileMenuOverlay = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLinkClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);
    onClose();

    if (tabName === "projects" || tabName === "services" || tabName === "teams") {
      navigate(`/${tabName}`);
    } else {
      if (window.location.pathname !== "/") {
        navigate("/", { state: { scrollTo: tabName } });
      } else {
        const element = document.getElementById(tabName);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const getTabIconComponent = (tabName) => {
    switch (tabName) {
      case "home":
        return HomeIcon;
      case "services":
        return GearIcon;
      case "about":
        return InfoCircledIcon;
      case "projects":
        return EnvelopeClosedIcon;
      case "teams":
        return PersonIcon;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg"
        onClick={onClose}
      />
      
      {/* Slide-in Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-cyan-300 transition-colors duration-200 p-2"
              aria-label="Close menu"
            >
              <Cross1Icon className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-6">
            <div className="space-y-4">
              {["home", "about", "services", "projects", "teams"].map((tabName) => {
                const IconComponent = getTabIconComponent(tabName);
                const isActive = activeTab === tabName;
                
                return (
                  <a
                    key={tabName}
                    href={tabName === "projects" || tabName === "services" || tabName === "teams" ? `/${tabName}` : `#${tabName}`}
                    onClick={(e) => handleLinkClick(e, tabName)}
                    className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                    <span className="text-lg font-medium">
                      {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
                    </span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-cyan-300 rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="text-center text-gray-400 text-sm">
              Endorphind © 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TopNavigationBar = ({ toggleMenu, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);

    if (tabName === "projects" || tabName === "services" || tabName === "teams") {
      navigate(`/${tabName}`);
    } else {
      if (window.location.pathname !== "/") {
        navigate("/", { state: { scrollTo: tabName } });
      } else {
        const element = document.getElementById(tabName);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getLinkClass = (tabName) => {
    const baseClasses =
      "relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-cyan-300 after:transition-all after:duration-300 transform hover:scale-105 transition-transform duration-300 ease-in-out";

    return activeTab === tabName
      ? `text-cyan-300 ${baseClasses} after:w-full`
      : `text-white hover:text-cyan-300 ${baseClasses}`;
  };

  const getTabIconComponent = (tabName) => {
    switch (tabName) {
      case "home":
        return HomeIcon;
      case "services":
        return GearIcon;
      case "about":
        return InfoCircledIcon;
      case "projects":
        return EnvelopeClosedIcon;
      case "teams":
        return PersonIcon;
      default:
        return null;
    }
  };

  return (
    <nav className="fixed top-6 left-4 right-4 md:left-[11em] md:right-[11em] py-3 px-6 flex justify-between items-center bg-gray-900/80 backdrop-filter backdrop-blur-3xl border rounded-3xl border-gray-500/50 shadow-2xl z-40 transition-all duration-300 ease-out hover:border-gray-400/50">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-2xl font-bold font-mono tracking-tight bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-md hover:from-cyan-200 hover:to-blue-300 transition-all duration-500 cursor-pointer">
          Endorphind
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white hover:text-cyan-300 transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
        aria-label="Open menu"
      >
        <HamburgerMenuIcon className="w-6 h-6" />
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {["home", "about", "services", "projects", "teams"].map((tabName) => {
          const Icon = getTabIconComponent(tabName);
          const isProjects = tabName === "projects";
          
          return (
            <div key={tabName} className="relative group">
              <a
                href={tabName === "projects" || tabName === "services" || tabName === "teams" ? `/${tabName}` : `#${tabName}`}
                onClick={(e) => handleTabClick(e, tabName)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 group ${getLinkClass(tabName)} ${
                  activeTab === tabName ? 'bg-cyan-500/10' : 'hover:bg-white/5'
                }`}
              >
                {React.createElement(Icon, {
                  className: `w-4 h-4 transition-colors duration-200 ${
                    activeTab === tabName ? 'text-cyan-300' : 'text-gray-300 group-hover:text-cyan-300'
                  }`,
                })}
                <span className="text-sm font-medium font-mono tracking-wide">
                  {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
                </span>
              </a>

              {/* Projects Dropdown */}
              {isProjects && (
  <div className="absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
    <div className="p-2">
      <Link
        to="/studios"
        className="flex items-center space-x-3 px-3 py-3 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 group"
      >
        <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-200" />
        <span className="text-sm font-medium">Endorphind Studios</span>
      </Link>

      <Link
        to="/webprojects"
        className="flex items-center space-x-3 px-3 py-3 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 group"
      >
        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-200" />
        <span className="text-sm font-medium">Web Projects</span>
      </Link>
    </div>
  </div>
)}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();

  // Handle scroll after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div
      className="font-sans text-gray-900 min-h-screen relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542296332-2a4470b8f2d0?auto=format&fit=crop&q=80&w=1920&h=1080&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "10vh",
      }}
    >
      <TopNavigationBar
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <MobileMenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      
    </div>
  );
};

export default App;