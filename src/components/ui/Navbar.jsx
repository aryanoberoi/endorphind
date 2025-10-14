import React, { useState } from "react";
import {
  HomeIcon,
  GearIcon,
  EnvelopeClosedIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useNavigate, Link } from "react-router-dom";

const NAV_TABS = [
  { name: "home", label: "Home", Icon: HomeIcon, route: "/" },
  { name: "services", label: "Services", Icon: GearIcon, route: "/services" },
  { name: "studios", label: "Studios", Icon: EnvelopeClosedIcon, route: "/studios" },
  {
    name: "projects",
    label: "Projects",
    Icon: EnvelopeClosedIcon,
    route: "/projects",
    dropdown: [
      { name: "studios", label: "Endorphind Studios", to: "/studios" },
      { name: "webprojects", label: "Web Projects", to: "/webprojects" },
    ],
  },
  { name: "teams", label: "Teams", Icon: PersonIcon, route: "/teams" },
];

const MobileMenuOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="bg-black bg-opacity-70" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-64 bg-gray-800">
        <div className="flex justify-between p-4 border-b border-white">
          <h2 className="text-white">Menu</h2>
          <button onClick={onClose} className="text-white" aria-label="Close menu">
            <Cross1Icon className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4">
          {NAV_TABS.map((tab) => (
            <Link
              key={tab.name}
              to={tab.route}
              className="block py-2 text-white"
              onClick={onClose}
            >
              <tab.Icon className="inline mr-2" />
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-4 z-40 flex justify-center items-center p-6 bg-transparent border border-gray-300 rounded-md text-white" style={{ width: '70%', margin: '0 auto', marginTop: '10px' }}>
      <div className="text-2xl font-bold mr-auto">Endorphind</div>
      <button
        onClick={toggleMenu}
        className="md:hidden ml-auto"
        aria-label="Open menu"
      >
        <HamburgerMenuIcon className="w-6 h-6" />
      </button>
      <div className="hidden md:flex space-x-6">
        {NAV_TABS.map((tab) => (
          <Link
            key={tab.name}
            to={tab.route}
            className="hover:text-cyan-300"
          >
            <tab.Icon className="inline mr-1" />
            {tab.label}
          </Link>
        ))}
      </div>
      <MobileMenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;