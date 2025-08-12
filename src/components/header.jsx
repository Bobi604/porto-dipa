import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "food", label: "Gallery" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-500 text-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <img src={logo} alt="" className="h-18 w-23 mr-2" />

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="bg-gray-700"
              className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-600 flex flex-col items-center space-y-2 py-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="bg-gray-700"
                onClick={closeMenu}
                className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded w-full text-center transition"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
