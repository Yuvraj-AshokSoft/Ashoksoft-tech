import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiChevronDown, FiLayers, FiUser, FiUsers, FiTag } from 'react-icons/fi';
import { SiAngular, SiReact, SiNodedotjs, SiVuedotjs, SiPhp, SiLaravel, SiDotnet, SiApple, SiAndroid, SiMicrosoftazure, SiMagento, SiWordpress, SiBootstrap, SiHtml5 } from 'react-icons/si';
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

  const servicesMegaMenu = [
    {
      title: 'Digital Engineering',
      items: ['Website Development', 'Mobile App Development', 'Software Development', 'UI/UX Design']
    },
    {
      title: 'Advanced Solutions',
      items: ['Artificial Intelligence Solutions', 'Cloud Solutions', 'Robotics & Automation', 'Digital Marketing']
    }
  ];

  const technologiesMegaMenu = [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'Python']
    },
    {
      title: 'Database',
      items: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'Cloud',
      items: ['AWS', 'Firebase', 'Vercel']
    },
    {
      title: 'AI',
      items: ['OpenAI APIs', 'Machine Learning', 'Computer Vision', 'NLP']
    }
  ];

  const virtualTeamMegaMenu = {
    models: [
      { title: 'Hire Developer Model', desc: 'Best suited for medium to large projects that require long-term collaboration.', icon: FiUser },
      { title: 'DGR Model', desc: 'A dedicated resource manages the offshore team by working onshore with your in-house team', icon: FiUsers },
      { title: 'Fixed Price Model', desc: 'Best suited for businesses that are planning to build an MVP within a limited budget.', icon: FiTag }
    ],
    categories: [
      {
        title: 'Hire Mobile Developers',
        items: ['Hire React Native Developers', 'Hire Flutter Developers', 'Hire iOS Developers', 'Hire Android Developers']
      },
      {
        title: 'Hire Frontend Developers',
        items: ['Hire React Developers', 'Hire Next.js Developers', 'Hire Vue.js Developers']
      },
      {
        title: 'Hire Backend Developers',
        items: ['Hire Node.js Developers', 'Hire Python Developers', 'Hire PHP Developers']
      },
      {
        title: 'Hire E-Commerce Developers',
        items: ['Hire Shopify Developers', 'Hire WooCommerce Developers']
      }
    ]
  };

  const aboutDropdown = [
    { name: 'Our Team', path: '/team' },
    { name: 'Partners', path: '/partners' },
    { name: 'Career', path: '/career' }
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
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4 h-full">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                <Link
                  to={link.path}
                  className={`flex items-center space-x-1 px-2 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-[#0C8DA1] font-semibold'
                      : isScrolled ? 'text-slate-600 hover:text-[#0C8DA1]' : 'text-white hover:text-[#0C8DA1]'
                  }`}
                >
                  {link.isIcon ? (
                    <FiHome className={`${isScrolled ? 'text-[#0C8DA1]' : 'text-white group-hover:text-[#0C8DA1]'} text-xl`} />
                  ) : (
                    <span className="text-sm xl:text-base font-medium whitespace-nowrap">{link.name}</span>
                  )}
                  {link.hasDropdown && <FiChevronDown className={`${isScrolled ? 'text-slate-400' : 'text-white/80 group-hover:text-[#0C8DA1]'} text-sm mt-0.5`} />}
                </Link>

                {/* Mega Menu for Services */}
                {link.name === 'Services' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/4 w-[600px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border-t-2 border-[#0C8DA1] border-x border-b border-gray-100 rounded-b-xl overflow-hidden cursor-default">
                    <div className="grid grid-cols-2 gap-8 p-10">
                      {servicesMegaMenu.map((column, idx) => (
                        <div key={idx}>
                          <h4 className="text-gray-900 font-bold mb-6 text-lg tracking-wide">{column.title}</h4>
                          <ul className="space-y-3">
                            {column.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link 
                                  to={`/service/${item.toLowerCase().replace(/ & /g, '-and-').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`} 
                                  className="text-gray-600 hover:text-[#0C8DA1] font-medium text-sm transition-colors block"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega Menu for Technologies */}
                {link.name === 'Technologies' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1000px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border-t-2 border-[#0C8DA1] border-x border-b border-gray-100 rounded-b-xl overflow-hidden cursor-default">
                    <div className="grid grid-cols-5 gap-8 p-8 bg-gray-50/50">
                      {technologiesMegaMenu.map((column, idx) => (
                        <div key={idx}>
                          <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0C8DA1]"></span>
                            {column.title}
                          </h3>
                          <ul className="space-y-3">
                            {column.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link 
                                  to={`/technology/${item.toLowerCase().replace(/ & /g, '-and-').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`} 
                                  className="text-gray-600 hover:text-[#0C8DA1] font-medium text-sm transition-colors block"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega Menu for Virtual Team */}
                {link.name === 'Virtual Team' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1100px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border-t-2 border-[#0C8DA1] border-x border-b border-gray-100 rounded-b-xl overflow-hidden cursor-default">
                    <div className="grid grid-cols-12 gap-10 p-10">
                      
                      {/* Left Sidebar - Hiring Models */}
                      <div className="col-span-5 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <h4 className="text-gray-900 font-bold mb-6 text-xl">Choose Your Hiring Model</h4>
                        <div className="space-y-4">
                          {virtualTeamMegaMenu.models.map((model, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 p-4 rounded-xl hover:border-[#0C8DA1] transition-colors hover:shadow-md flex gap-4 group/model">
                              <div className="mt-1 flex-shrink-0 bg-[#0C8DA1]/10 w-12 h-12 rounded-lg flex items-center justify-center text-[#0C8DA1] text-xl group-hover/model:bg-[#0C8DA1] group-hover/model:text-white transition-colors">
                                <model.icon />
                              </div>
                              <div>
                                <h5 className="font-bold text-gray-900 mb-1">{model.title}</h5>
                                <p className="text-xs text-gray-500 leading-relaxed">{model.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Section - Categories */}
                      <div className="col-span-7 grid grid-cols-2 gap-x-8 gap-y-10">
                        {virtualTeamMegaMenu.categories.map((cat, idx) => (
                          <div key={idx}>
                            <h4 className="text-gray-900 font-bold mb-4 text-lg">{cat.title}</h4>
                            <ul className="space-y-3">
                              {cat.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link 
                                    to={`/hire/${item.replace(/^Hire /, '').toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]+/g, '')}`} 
                                    className="text-gray-600 hover:text-[#0C8DA1] font-medium text-sm transition-colors block"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                )}

                {/* Dropdown for About US */}
                {link.name === 'About US' && (
                  <div className="absolute top-full left-0 w-52 bg-[#0B1525] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl py-4 cursor-default z-50">
                    <ul className="flex flex-col space-y-1">
                      {aboutDropdown.map((item, idx) => (
                        <li key={idx}>
                          <Link to={item.path} className="text-white hover:text-[#0C8DA1] font-medium px-8 py-3 transition-colors block">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
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
    </motion.nav>
  );
};

export default Navbar;

