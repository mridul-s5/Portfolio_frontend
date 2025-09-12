import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skill" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-purple-800">
          ABHAY <span className="text-pink-600">SHUKLA</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`hover:text-purple-600 transition-colors duration-200 ${
                  location.pathname === link.path ? "text-purple-800 font-bold" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl text-purple-800 cursor-pointer">
          {menuOpen ? (
            <FiX onClick={() => setMenuOpen(false)} />
          ) : (
            <FiMenu onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block text-gray-700 font-medium hover:text-purple-600 transition ${
                location.pathname === link.path ? "text-purple-800 font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
