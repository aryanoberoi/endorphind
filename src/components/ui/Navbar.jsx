import React, { useState } from "react";
import {
  HomeIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  PersonIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { useNavigate, Link } from "react-router-dom";
import ConnectButtonAndForm from "./Connect";

const NAV_TABS = [
  { name: "home", label: "Home", Icon: HomeIcon, route: "/" },
  { name: "team", label: "Our Team", Icon: PersonIcon, route: "/team" },
  { name: "Findaura", label: "Findaura", Icon: MagnifyingGlassIcon, route: "/findaura" },
];

const MobileMenuOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50" style={{ fontFamily: "robit, sans-serif" }}>
      <div className="bg-black bg-opacity-70" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-64 bg-gray-800">
        <div className="flex justify-between p-4 border-b border-white" style={{ fontFamily: "robit, sans-serif" }}>
          <h2 className="text-white">Menu</h2>
          <button onClick={onClose} className="text-white" aria-label="Close menu">
            <Cross1Icon className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4" style={{ fontFamily: "robit, sans-serif" }}>
          {NAV_TABS.map((tab) => (
            <Link
              key={tab.name}
              to={tab.route}
              className="block py-2 text-white"
              onClick={onClose}
              style={{ fontFamily: "robit, sans-serif" }}
            >
              <tab.Icon className="inline mr-2" />
              {tab.label}
            </Link>
          ))}
          {/* Add Connect button at the bottom of the mobile menu */}
          <div className="mt-6">
            <ConnectButtonAndForm />
          </div>
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
    <nav
      className="sticky top-4 z-40 flex justify-center items-center p-6 bg-transparent border border-gray-300 rounded-md text-white"
      style={{
        width: '70%',
        margin: '0 auto',
        marginTop: '10px',
        fontFamily: "robit, sans-serif"
      }}
    >
      <img src="FindAura..png" alt="Endorphind Logo" className="mr-auto h-20" style={{ fontFamily: "robit, sans-serif" }} />
      <button
        onClick={toggleMenu}
        className="md:hidden ml-auto"
        aria-label="Open menu"
        style={{ fontFamily: "robit, sans-serif" }}
      >
        <HamburgerMenuIcon className="w-6 h-6" />
      </button>
      <div className="hidden md:flex space-x-6 items-center" style={{ fontFamily: "robit, sans-serif" }}>
        {NAV_TABS.map((tab) => (
          <Link
            key={tab.name}
            to={tab.route}
            className="hover:text-cyan-300"
            style={{ fontFamily: "robit, sans-serif" }}
          >
            <tab.Icon className="inline mr-1" />
            {tab.label}
          </Link>
        ))}
        {/* Place the connect button to the right most */}
        <div className="ml-6">
          <ConnectButtonAndForm />
        </div>
      </div>
      <MobileMenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;