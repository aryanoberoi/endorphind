import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  GearIcon,
  InfoCircledIcon,
  EnvelopeClosedIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { useNavigate, useLocation } from "react-router-dom";

const MobileMenuOverlay = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLinkClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);
    onClose();

    if (tabName === "projects" || tabName === "services") {
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

  if (!isOpen) return null;

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
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg z-40 flex flex-col items-center justify-center p-8">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none z-50"
        aria-label="Close menu"
      >
        <Cross1Icon className="w-8 h-8" />
      </button>
      <nav className="flex flex-col space-y-8 text-center">
        {["home", "services", "about", "projects"].map((tabName) => {
          const IconComponent = getTabIconComponent(tabName);
          const linkClasses = `text-3xl font-light font-sans flex items-center justify-center space-x-4 transition-colors duration-200 ${
            activeTab === tabName
              ? "text-white"
              : "text-gray-300 hover:text-white"
          }`;
          return (
            <div key={tabName} className="relative group">
              <a
                href={tabName === "projects" || tabName === "services" ? `/${tabName}` : `#${tabName}`}
                onClick={(e) => handleLinkClick(e, tabName)}
                className={linkClasses}
              >
                {IconComponent && <IconComponent className="w-8 h-8" />}
                <span>{tabName.charAt(0).toUpperCase() + tabName.slice(1)}</span>
              </a>
              {tabName === "projects" && (
                <div className="absolute left-0 mt-2 w-48 bg-black bg-opacity-70 backdrop-filter backdrop-blur-md rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="/studios"
                    className="block px-4 py-2 text-white font-sans-serif bg-blur"
                  >
                    Endorphind Studios
                  </a>
                  <a
                    href="/webprojects"
                    className="block px-4 py-2 text-white font-sans-serif bg-blur"
                  >
                    Web Projects
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

const TopNavigationBar = ({ toggleMenu, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);

    if (tabName === "projects" || tabName === "services") {
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
      ? `text-white ${baseClasses}`
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
      default:
        return null;
    }
  };

  return (
    <nav className="fixed top-6 left-4 right-4 md:left-[11em] md:right-[11em] py-3 px-4 sm:px-8 lg:px-10 flex justify-between items-center bg-transparent bg-opacity-30 backdrop-filter backdrop-blur-3xl border rounded-3xl border-gray-500 border-opacity-50 shadow-2xl z-50 transition-transform duration-300 ease-out">
      <div className="flex items-center text-2xl sm:text-3xl font-bold font-mono tracking-normal text-white drop-shadow-md hover:text-cyan-300 transition-colors duration-500">
        Endorphind
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none p-2"
        aria-label="Open menu"
      >
        <HamburgerMenuIcon className="w-8 h-8" />
      </button>

      <div className="hidden md:flex items-center space-x-6 sm:space-x-8 lg:space-x-8">
        {["home", "about", "services", "projects"].map((tabName) => {
          const Icon = getTabIconComponent(tabName);
          return (
            <div key={tabName} className="relative group">
              <a
                href={tabName === "projects" || tabName === "services" ? `/${tabName}` : `#${tabName}`}
                onClick={(e) => handleTabClick(e, tabName)}
                className={`focus:outline-none flex items-center group ${getLinkClass(
                  tabName
                )}`}
              >
                {React.createElement(Icon, {
                  className: "mr-2 w-5 h-5 group-hover:text-cyan-300",
                })}
                <span className="text-base sm:text-lg font-normal font-mono">
                  {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
                </span>
              </a>
              {tabName === "projects" && (
                <div className="absolute left-0 mt-2 w-48 bg-black bg-opacity-70 backdrop-filter backdrop-blur-md rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="/studios"
                    className="block px-4 py-2 text-white font-sans-serif bg-blur"
                  >
                    Endorphind Studios
                  </a>
                  <a
                    href="/webprojects"
                    className="block px-4 py-2 text-white font-sans-serif bg-blur"
                  >
                    Web Projects
                  </a>
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

  // ✅ Scroll after navigating back to home
  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300); // wait for DOM render
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        minHeight: "1vh",
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

      <div className="flex-grow flex items-center justify-center pt-[5.5rem] sm:pt-[6rem] md:pt-[7rem]">
        {/* Main Content */}
      </div>
    </div>
  );
};

export default App;
