import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
=======
import { motion } from 'framer-motion';
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
import { FiMenu, FiX, FiHome, FiChevronDown } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', isIcon: true },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Technologies', path: '/technologies', hasDropdown: true },
    { name: 'Virtual Team', path: '/virtual-team', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About US', path: '/about', hasDropdown: true },
  ];

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg border-b border-dark-border'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img
              src="/ashoksoft logo.png"
              alt="AshokSoft Technologies"
              className="h-16 w-auto sm:h-[72px] object-contain"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-1 px-2 py-2 rounded-lg transition-all duration-300 group ${
                  location.pathname === link.path
                    ? 'text-brand-blue font-semibold'
                    : isScrolled ? 'text-slate-600 hover:text-brand-blue' : 'text-white hover:text-brand-blue'
                }`}
              >
                {link.isIcon ? (
                  <FiHome className={`${isScrolled ? 'text-brand-blue' : 'text-white group-hover:text-brand-blue'} text-xl`} />
                ) : (
                  <span className="text-sm xl:text-base font-medium whitespace-nowrap">{link.name}</span>
                )}
                {link.hasDropdown && <FiChevronDown className={`${isScrolled ? 'text-slate-400' : 'text-white/80 group-hover:text-brand-blue'} text-sm mt-0.5`} />}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden sm:inline-block px-6 py-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold rounded-full hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300 whitespace-nowrap"
            >
              Get In Touch
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'} hover:text-brand-blue`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white border-l border-dark-border z-50 shadow-2xl p-6 flex flex-col lg:hidden"
            >
              {/* Header inside drawer */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-dark-border">
                <span className="font-bold text-slate-800 tracking-wide text-lg">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto space-y-2 pr-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                      location.pathname === link.path
                        ? 'bg-brand-blue/10 text-brand-blue font-semibold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      {link.isIcon ? (
                        <FiHome className="text-lg" />
                      ) : (
                        <span className="font-medium">{link.name}</span>
                      )}
                    </div>
                    {link.hasDropdown && <FiChevronDown className="opacity-70" />}
                  </Link>
                ))}
              </div>

              {/* CTA Button at bottom */}
              <div className="mt-8 pt-4 border-t border-dark-border">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
=======

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="lg:hidden pb-4 pt-2 border-t border-dark-border bg-dark-bg absolute w-full left-0 px-4 sm:px-6 shadow-2xl rounded-b-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center justify-between px-4 py-3 text-slate-600 hover:text-brand-blue hover:bg-white rounded-lg mb-1"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  {link.isIcon && <FiHome className="text-brand-blue text-lg" />}
                  <span className="font-medium">{link.name}</span>
                </div>
                {link.hasDropdown && <FiChevronDown />}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </div>
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
    </motion.nav>
  );
};

export default Navbar;

