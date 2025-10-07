// Navbar.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  HomeIcon,
  GearIcon,
  InfoCircledIcon,
  EnvelopeClosedIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  PersonIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import { useNavigate, useLocation, Link } from "react-router-dom";

import GooeyNav from './GooeyNav';


// =========================================================================
// 0. Centralized Navigation Configuration
// =========================================================================
const NAV_TABS = [
  { name: "home", label: "Home", Icon: HomeIcon, type: "anchor" },
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
  { name: "findaura", label: "Findaura", Icon: PersonIcon, type: "route" },
];

// =========================================================================
// 1. Navigation Logic
// =========================================================================
const getNavigationHandler = (navigate, setActiveTab, onClose) => (
  e,
  tabName
) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  // Find the primary tab name for setting the active state
  let primaryTabName = tabName;
  const directTab = NAV_TABS.find(tab => tab.name === tabName);

  if (!directTab || directTab.dropdown) {
    const parentTab = NAV_TABS.find(tab => tab.dropdown?.some(item => item.name === tabName));
    if (parentTab) {
      primaryTabName = parentTab.name;
    }
  }

  setActiveTab(primaryTabName);
  onClose && onClose();

  // Determine the route to navigate to
  const tab = NAV_TABS.find(t => t.name === tabName);
  const dropdownItem = NAV_TABS.flatMap(t => t.dropdown || []).find(d => d.name === tabName);

  const targetTab = tab || dropdownItem;
  const targetRoute = targetTab?.to || (tab?.type === "route" ? `/${tabName}` : `#${tabName}`);
  const isRoute = targetTab?.to?.startsWith('/') || tab?.type === "route";

  if (isRoute) {
    navigate(targetRoute);
  } else {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: tabName } });
    } else {
      const element = document.getElementById(tabName);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

// =========================================================================
// 2. Mobile Menu Overlay Component (COLOR FIXED)
// =========================================================================
const MobileMenuOverlay = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  // 🚨 HOOKS CALLED UNCONDITIONALLY
  const navigate = useNavigate();
  const location = useLocation();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const navHandler = useMemo(
    () => getNavigationHandler(navigate, setActiveTab, onClose),
    [navigate, setActiveTab, onClose]
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const isProjectsDropdownActive = NAV_TABS.find(t => t.name === 'projects')?.dropdown?.some(item => location.pathname === item.to);
    if (activeTab === 'projects' || isProjectsDropdownActive) {
      setIsProjectsOpen(true);
    } else {
      // Close dropdown if main tab or any route other than projects/dropdown is active
      setIsProjectsOpen(false);
    }
  }, [activeTab, location.pathname]);


  // Conditional return comes AFTER ALL HOOKS
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg"
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
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
          <nav className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-3">
              {NAV_TABS.map((tab) => {
                const isProjectDropdownRoute = tab.dropdown?.some(item => location.pathname === item.to);
                const isActive = activeTab === tab.name || (isProjectDropdownRoute && tab.name === 'projects');
                const IconComponent = tab.Icon;
                const isDropdownParent = !!tab.dropdown;

                // 🚨 APPLYING DESKTOP STYLES
                const buttonClasses = `px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${isActive
                    ? 'text-black bg-white shadow-md' // Active state (from desktop ProjectDropdown)
                    : 'text-gray-200 hover:text-white hover:bg-white/10' // Default/Hover state (from desktop ProjectDropdown)
                  }`;

                return (
                  <React.Fragment key={tab.name}>
                    <button
                      onClick={(e) => {
                        if (isDropdownParent) {
                          setIsProjectsOpen(prev => !prev);
                        } else {
                          navHandler(e, tab.name);
                        }
                      }}
                      className={`flex items-center w-full space-x-4 ${buttonClasses} p-3 text-lg font-medium`} // Combined classes
                      aria-expanded={isDropdownParent ? isProjectsOpen : undefined}
                    >
                      <IconComponent className={`w-5 h-5 transition-colors ${isActive ? 'text-cyan-600' : 'text-cyan-300'}`} />
                      {/* 🚨 TEXT COLOR ADJUSTMENT FOR CONSISTENCY */}
                      <span className={`text-lg font-medium transition-colors ${isActive ? 'text-gray-900' : 'text-white'}`}>{tab.label}</span>
                      {isDropdownParent && (
                        <ChevronDownIcon
                          className={`ml-auto w-4 h-4 transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : 'rotate-0'} ${isActive ? 'text-gray-600' : 'text-gray-300'}`}
                        />
                      )}
                    </button>
                    {isDropdownParent && isProjectsOpen && (
                      <div className="pl-6 space-y-2 pt-1 border-l border-cyan-500/50 ml-3">
                        {tab.dropdown.map((item) => {
                          const isDropdownActive = location.pathname === item.to;
                          return (
                            <Link
                              key={item.name}
                              to={item.to}
                              onClick={(e) => {
                                e.preventDefault();
                                navHandler(e, item.name);
                              }}
                              className={`flex items-center space-x-3 p-2 rounded-lg text-sm font-medium transition-all duration-200 ${isDropdownActive
                                  ? `${item.color}/30 text-white border border-white/20`
                                  : "text-gray-400 hover:text-cyan-300 hover:bg-white/5"
                                }`}
                            >
                              <div className={`w-2 h-2 rounded-full ${item.color.replace('bg-', 'bg-')}`} />
                              <span>{item.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </nav>
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
// 3. Project Dropdown Component (Desktop)
// =========================================================================
const ProjectDropdown = ({ tab, activeTab, navHandler, location }) => {
  const isDropdownParent = !!tab.dropdown;
  const isDropdownActive = tab.dropdown?.some(item => location.pathname === item.to);
  const isActive = activeTab === tab.name || isDropdownActive;

  const dropdownItems = tab.dropdown || [];

  const baseClasses = `px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${isActive
      ? 'text-black bg-white shadow-md' // Desktop Active
      : 'text-gray-200 hover:text-white hover:bg-white/10' // Desktop Default/Hover
    }`;

  if (!isDropdownParent) return null;

  return (
    <li className="relative group z-20 list-none p-0 m-0">
      <button
        className={`${baseClasses} flex items-center whitespace-nowrap`}
        onClick={(e) => navHandler(e, tab.name)}
      >
        {tab.label}
        <ChevronDownIcon className={`w-3 h-3 ml-1 transition-transform duration-200 ${isActive ? 'rotate-180' : 'rotate-0'}`} />
      </button>

      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48
                            bg-gray-900/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl
                            invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300
                            z-50 p-2 transform origin-top">
        {dropdownItems.map(item => (
          <Link
            key={item.name}
            to={item.to}
            onClick={(e) => {
              e.preventDefault();
              navHandler(e, item.name);
            }}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${location.pathname === item.to
                ? 'text-white bg-cyan-500/30'
                : 'text-gray-200 hover:bg-white/10 hover:text-white'
              }`}
          >
            <div className={`w-2 h-2 rounded-full ${item.color.replace('bg-', 'bg-')}`} />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </li>
  );
};

// =========================================================================
// 4. TopNavigationBar Component
// =========================================================================
const TopNavigationBar = ({ toggleMenu, activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navHandler = useMemo(
    () => getNavigationHandler(navigate, setActiveTab),
    [navigate, setActiveTab]
  );

  // 1. Filter tabs for GooeyNav (excluding 'projects')
  const gooeyNavTabs = useMemo(() =>
    NAV_TABS.filter(tab => !tab.dropdown)
    , []);

  // 2. Prepare items for GooeyNav
  const gooeyNavItems = useMemo(() =>
    gooeyNavTabs.map(tab => ({
      label: tab.label,
      href: tab.type === "route" ? `/${tab.name}` : `#${tab.name}`,
      name: tab.name,
    }))
    , [gooeyNavTabs]);

  // 3. Find the correct active index for GooeyNav
  const activeGooeyIndex = useMemo(() => {
    return gooeyNavItems.findIndex(item => item.name === activeTab);
  }, [gooeyNavItems, activeTab]);

  // 4. Custom GooeyNav click handler
  const handleGooeyClick = useCallback((e, index) => {
    e.preventDefault();
    const tabName = gooeyNavItems[index].name;
    navHandler(e, tabName);
  }, [gooeyNavItems, navHandler]);

  const projectsTab = NAV_TABS.find(tab => tab.name === 'projects');


  return (
    <nav
      className="fixed top-6 left-4 right-4 md:left-[12em] md:right-[12em] py-3 px-10 flex justify-between items-center
                     bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl
                     rounded-4xl z-40 transition-all duration-300 ease-out hover:border-white/30"
    >
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

      {/* Desktop Navigation - GooeyNav + Dropdown */}
      <div className="hidden md:flex items-center space-x-2">

        {/* GooeyNav Integration */}
        {gooeyNavItems.length > 0 && (
          <GooeyNav
            items={gooeyNavItems}
            initialActiveIndex={Math.max(activeGooeyIndex, 0)}
            handleClick={handleGooeyClick}
          />
        )}

        {/* The Projects Dropdown */}
        {projectsTab && (
          <ProjectDropdown
            tab={projectsTab}
            activeTab={activeTab}
            navHandler={navHandler}
            location={location}
          />
        )}
      </div>
    </nav>
  );
};


// =========================================================================
// 5. Navbar (Main Container)
// =========================================================================

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.substring(1);

    let activeTabName = NAV_TABS.find(t => t.name === currentPath)?.name;

    if (!activeTabName) {
      const dropdownItem = NAV_TABS.flatMap(t => t.dropdown || []).find(d => d.to === location.pathname);
      if (dropdownItem) {
        activeTabName = NAV_TABS.find(t => t.dropdown?.some(d => d.name === dropdownItem.name))?.name;
      }
    }

    if (activeTabName) {
      setActiveTab(activeTabName);
    } else if (location.pathname === '/') {
      // Check if there is a hash for anchor links on the home page
      const hash = location.hash.substring(1);
      if (NAV_TABS.some(t => t.name === hash && t.type === 'anchor')) {
        setActiveTab(hash);
      } else {
        setActiveTab('home');
      }
    }

    if (location.state?.scrollTo) {
      const target = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
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

export default Navbar;