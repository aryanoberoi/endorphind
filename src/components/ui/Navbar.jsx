import React, { useState, useEffect, useMemo } from "react";
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

// =========================================================================
// 1. Centralized Navigation Configuration & Logic
// =========================================================================

const NAV_TABS = [
  { name: "home", label: "Home", Icon: HomeIcon, type: "anchor" },
  { name: "about", label: "About", Icon: InfoCircledIcon, type: "anchor" },
  { name: "services", label: "Services", Icon: GearIcon, type: "route" },
  {
    name: "projects",
    label: "Projects",
    Icon: EnvelopeClosedIcon,
    type: "route",
    dropdown: [
      { name: "studios", label: "Endorphind Studios", to: "/studios", color: "bg-cyan-400" },
      { name: "webprojects", label: "Web Projects", to: "/webprojects", color: "bg-blue-400" },
    ],
  },
  { name: "teams", label: "Teams", Icon: PersonIcon, type: "route" },
];

/**
 * Handles all navigation logic (routing or scrolling).
 */
const getNavigationHandler = (navigate, setActiveTab, onClose) => (
  e,
  tabName
) => {
  e.preventDefault();
  setActiveTab(tabName);
  onClose && onClose();

  const tab = NAV_TABS.find(t => t.name === tabName);

  if (tab?.type === "route") {
    // Navigate to a dedicated page
    navigate(`/${tabName}`);
  } else {
    // Navigate to the homepage or scroll to a section
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: tabName } });
    } else {
      const element = document.getElementById(tabName);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

// =========================================================================
// 2. MobileMenuOverlay Component
// =========================================================================

const MobileMenuOverlay = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  // Memoize the handler for stability, including the onClose call
  const navHandler = useMemo(
    () => getNavigationHandler(navigate, setActiveTab, onClose),
    [navigate, setActiveTab, onClose]
  );

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg"
        onClick={onClose}
      />

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
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
              {NAV_TABS.map((tab) => {
                const isActive = activeTab === tab.name;
                const IconComponent = tab.Icon;

                return (
                  <a
                    key={tab.name}
                    href={tab.type === "route" ? `/${tab.name}` : `#${tab.name}`}
                    onClick={(e) => navHandler(e, tab.name)}
                    className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="text-lg font-medium">{tab.label}</span>
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

// =========================================================================
// 3. TopNavigationBar Component
// =========================================================================

const TopNavigationBar = ({ toggleMenu, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  // Memoize the handler without the onClose call (since this is not the overlay)
  const navHandler = useMemo(
    () => getNavigationHandler(navigate, setActiveTab),
    [navigate, setActiveTab]
  );

  const getLinkClass = (tabName) => {
    const baseClasses =
      "relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-cyan-300 after:transition-all after:duration-300 transform hover:scale-105 transition-transform duration-300 ease-in-out";

    return activeTab === tabName
      ? `text-cyan-300 ${baseClasses} after:w-full`
      : `text-white hover:text-cyan-300 ${baseClasses}`;
  };

  return (
    <nav className="fixed top-6 left-4 right-4 md:left-[11em] md:right-[11em] py-3 px-6 flex justify-between items-center bg-gray-900/80 backdrop-blur-3xl border rounded-3xl border-gray-500/50 shadow-2xl z-40 transition-all duration-300 ease-out hover:border-gray-400/50">
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
        {NAV_TABS.map((tab) => {
          const Icon = tab.Icon;
          const isActive = activeTab === tab.name;

          return (
            <div key={tab.name} className="relative group">
              <a
                href={tab.type === "route" ? `/${tab.name}` : `#${tab.name}`}
                onClick={(e) => navHandler(e, tab.name)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 group ${getLinkClass(
                  tab.name
                )} ${isActive ? "bg-cyan-500/10" : "hover:bg-white/5"}`}
              >
                <Icon
                  className={`w-4 h-4 transition-colors duration-200 ${
                    isActive ? "text-cyan-300" : "text-gray-300 group-hover:text-cyan-300"
                  }`}
                />
                <span className="text-sm font-medium font-mono tracking-wide">
                  {tab.label}
                </span>
              </a>

              {/* Dropdown (only if tab has dropdown property) */}
              {tab.dropdown && (
                <div className="absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                  <div className="p-2">
                    {tab.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="flex items-center space-x-3 px-3 py-3 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                      >
                        <div
                          className={`w-2 h-2 ${item.color} rounded-full group-hover:scale-125 transition-transform duration-200`}
                        />
                        <span className="text-sm font-medium">{item.label}</span>
                      </Link>
                    ))}
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

// =========================================================================
// 4. App (Main Container)
// =========================================================================

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();

  // Effect to set active tab based on URL path when page loads or URL changes
  useEffect(() => {
    const currentPath = location.pathname.substring(1); // remove leading '/'
    const tabMatch = NAV_TABS.find(t => t.type === 'route' && t.name === currentPath);
    
    if (tabMatch) {
      setActiveTab(currentPath);
    } else if (location.pathname === '/') {
      setActiveTab('home');
    }

    // Handle scroll after navigation (e.g., navigating from /services to /#about)
    if (location.state?.scrollTo) {
      const target = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }

  }, [location]);

  // Close menu on resize (desktop view)
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
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div
      className="font-sans text-gray-900 min-h-[10vh] relative overflow-hidden">
      <TopNavigationBar
        toggleMenu={toggleMenu}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <MobileMenuOverlay
        isOpen={isMenuOpen}
        onClose={closeMenu}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default App;