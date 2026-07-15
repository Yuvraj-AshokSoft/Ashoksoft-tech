import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiChevronDown, FiLayers, FiUser, FiUsers, FiTag, FiCpu, FiMonitor, FiSmartphone, FiCloud, FiSettings, FiBarChart2, FiArrowRight, FiCode, FiPenTool, FiBriefcase, FiHeart, FiGlobe, FiBookOpen } from 'react-icons/fi';
import {
  FaAngular,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaPhp,
  FaBootstrap,
  FaLaravel,
  FaApple,
  FaAndroid,
  FaWordpress,
  FaHtml5,
} from 'react-icons/fa';
import { SiDotnet, SiMicrosoftazure, SiMagento } from 'react-icons/si';
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
    { name: 'Events', path: '/events' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About US', path: '/about', hasDropdown: true },
  ];

  const servicesMenu = [
    { title: 'Website Development', desc: 'Modern responsive websites', icon: FiMonitor, link: '/service/website-development', projects: ['ERP', 'E-commerce', 'CMS Portals'] },
    { title: 'Mobile App Development', desc: 'iOS & Android apps', icon: FiSmartphone, link: '/service/mobile-app-development', projects: ['iOS Apps', 'Android Apps', 'Flutter'] },
    { title: 'Software Development', desc: 'Custom enterprise software', icon: FiCode, link: '/service/software-development', projects: ['CRM Systems', 'SaaS Platforms', 'API Integration'] },
    { title: 'UI/UX Design', desc: 'Creative interface design', icon: FiPenTool, link: '/service/ui-ux-design', projects: ['Wireframing', 'Prototyping', 'User Research'] },
    { title: 'Artificial Intelligence', desc: 'AI and ML solutions', icon: FiCpu, link: '/service/artificial-intelligence-solutions', projects: ['Chatbots', 'Machine Learning', 'NLP'] },
    { title: 'Cloud Solutions', desc: 'AWS and Azure integration', icon: FiCloud, link: '/service/cloud-solutions', projects: ['AWS', 'Azure', 'Cloud Migration'] },
    { title: 'Robotics & Automation', desc: 'Smart device automation', icon: FiSettings, link: '/service/robotics-and-automation', projects: ['IoT', 'Smart Devices', 'Industrial Automation'] },
    { title: 'Digital Marketing', desc: 'SEO and brand growth', icon: FiBarChart2, link: '/service/digital-marketing', projects: ['SEO', 'Social Media', 'Content Strategy'] },
    { title: 'AI & Robotics Lab Setup', desc: 'AI and robotics lab setup for schools', icon: FiBookOpen, link: '/service/ai-robotics-lab-setup', projects: ['STEM Labs', 'Robotics Kits', 'AI Training'] },
    { title: 'Data Analytics', desc: 'Business Intelligence & Big Data', icon: FiBarChart2, link: '/service/data-analytics', projects: ['BI Solutions', 'Big Data', 'Predictive Analysis'] }
  ];

  const techList = [
    { name: 'Angular', icon: <FaAngular className="w-6 h-6" /> },
    { name: 'React JS', icon: <FaReact className="w-6 h-6" /> },
    { name: 'Node', icon: <FaNodeJs className="w-6 h-6" /> },
    { name: 'Vue.Js', icon: <FaVuejs className="w-6 h-6" /> },
    { name: 'MEAN', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-3zm-1 17.9C7.4 18.7 5 15.1 5 11V6.4l6-2v15.5zm8-8.9c0 4.1-2.4 7.7-6 8.9V4.4l6 2V11z"/>
      </svg>
    )},
    { name: 'PHP', icon: <FaPhp className="w-6 h-6" /> },
    { name: 'Laravel', icon: <FaLaravel className="w-6 h-6" /> },
    { name: 'ASP.NET MVC', icon: <SiDotnet className="w-6 h-6" /> },
    { name: 'React Native', icon: <FaReact className="w-6 h-6" /> },
    { name: 'IOS', icon: <FaApple className="w-6 h-6" /> },
    { name: 'Android', icon: <FaAndroid className="w-6 h-6" /> },
    { name: 'Azure', icon: <SiMicrosoftazure className="w-6 h-6" /> },
    { name: 'Magento', icon: <SiMagento className="w-6 h-6" /> },
    { name: 'Wordpress', icon: <FaWordpress className="w-6 h-6" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="w-6 h-6" /> },
    { name: 'HTML5', icon: <FaHtml5 className="w-6 h-6" /> },
  ];

  const aboutDropdown = [
    { name: 'Our Team', path: '/team', icon: FiUsers, desc: 'Meet our experts' },
    { name: 'Partners', path: '/partners', icon: FiHeart, desc: 'Our valued partners' },
    { name: 'Career', path: '/career', icon: FiBriefcase, desc: 'Join our company' }
  ];

  const isHomePage = location.pathname === '/';
  const isSolidNavbar = isScrolled || !isHomePage;

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isSolidNavbar
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
                      : isSolidNavbar ? 'text-slate-600 hover:text-[#0C8DA1]' : 'text-white hover:text-[#0C8DA1]'
                  }`}
                >
                  {link.isIcon ? (
                    <FiHome className={`${isSolidNavbar ? 'text-[#0C8DA1]' : 'text-white group-hover:text-[#0C8DA1]'} text-xl`} />
                  ) : (
                    <span className="text-sm xl:text-base font-medium whitespace-nowrap">{link.name}</span>
                  )}
                  {link.hasDropdown && <FiChevronDown className={`${isSolidNavbar ? 'text-slate-400' : 'text-white/80 group-hover:text-[#0C8DA1]'} text-sm mt-0.5`} />}
                </Link>

                {/* Mega Menu for Services */}
                {link.name === 'Services' && (
                  <div className="fixed top-[96px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1100px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border-t-2 border-[#0C8DA1] border-x border-b border-gray-100 rounded-b-xl overflow-hidden cursor-default">
                    <div className="p-8">
                      <h4 className="text-gray-900 font-bold mb-8 text-2xl text-center">Our Core Services</h4>
                      <div className="grid grid-cols-3 gap-6">
                        {servicesMenu.map((service, idx) => (
                          <div key={idx} className="bg-gray-50 border border-gray-100 p-5 rounded-xl hover:border-[#0C8DA1] transition-all hover:shadow-lg flex flex-col group/service">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="flex-shrink-0 bg-white shadow-sm border border-gray-100 w-10 h-10 rounded-lg flex items-center justify-center text-[#0C8DA1] text-xl group-hover/service:bg-[#0C8DA1] group-hover/service:text-white transition-colors">
                                <service.icon />
                              </div>
                              <h5 className="font-bold text-gray-900 text-md leading-tight">{service.title}</h5>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed mb-3">{service.desc}</p>
                            
                            {/* Project tags */}
                            <div className="flex flex-wrap gap-2 mb-4 flex-grow content-start">
                              {service.projects.map((proj, pIdx) => (
                                <span key={pIdx} className="text-[10px] font-medium bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-md group-hover/service:border-[#0C8DA1]/30 group-hover/service:text-[#0C8DA1] transition-colors">
                                  {proj}
                                </span>
                              ))}
                            </div>

                            <Link 
                              to={service.link}
                              className="inline-flex items-center text-xs font-semibold text-[#0C8DA1] group-hover/service:text-gray-900 transition-colors mt-auto"
                            >
                              Learn More <FiArrowRight className="ml-1 group-hover/service:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Mega Menu for Technologies */}
                {link.name === 'Technologies' && (
                  <div className="fixed top-[96px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1100px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border-t-2 border-[#0C8DA1] border-x border-b border-gray-100 rounded-b-xl overflow-hidden cursor-default">
                    <div className="p-8">
                      <h4 className="text-gray-900 font-bold mb-8 text-2xl text-center">Technologies We Master</h4>
                      <div className="grid grid-cols-4 gap-4">
                        {techList.map((tech, idx) => (
                          <Link
                            key={tech.name}
                            to={`/technology/${tech.name.toLowerCase().replace(/ & /g, '-and-').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`}
                            className="bg-gray-50 border border-gray-100 p-4 rounded-xl hover:border-[#0C8DA1] transition-all hover:shadow-md flex items-center gap-4 group/tech"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center text-[#0C8DA1] text-xl group-hover/tech:bg-[#0C8DA1] transition-colors">
                              <div className="[&>svg]:text-[#0C8DA1] group-hover/tech:[&>svg]:text-white transition-colors">
                                {tech.icon}
                              </div>
                            </div>
                            <span className="font-semibold text-gray-900 group-hover/tech:text-[#0C8DA1] transition-colors text-sm">
                              {tech.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown for About US */}
                {link.name === 'About US' && (
                  <div className="fixed top-[96px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[800px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border-t-2 border-[#0C8DA1] border-x border-b border-gray-100 rounded-b-xl overflow-hidden cursor-default z-50">
                    <div className="p-8">
                      <h4 className="text-gray-900 font-bold mb-8 text-2xl text-center">About AshokSoft</h4>
                      <div className="grid grid-cols-3 gap-6">
                        {aboutDropdown.map((item, idx) => (
                          <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#0C8DA1] transition-all hover:shadow-lg flex flex-col group/about">
                            <div className="flex flex-col items-center text-center gap-4 mb-4">
                              <div className="bg-white shadow-sm border border-gray-100 w-14 h-14 rounded-full flex items-center justify-center text-[#0C8DA1] text-2xl group-hover/about:bg-[#0C8DA1] group-hover/about:text-white transition-colors">
                                <item.icon />
                              </div>
                              <h5 className="font-bold text-gray-900 text-lg">{item.name}</h5>
                            </div>
                            <p className="text-sm text-gray-500 text-center leading-relaxed mb-6 flex-grow">{item.desc}</p>
                            <Link 
                              to={item.path}
                              className="inline-flex items-center justify-center text-sm font-semibold text-[#0C8DA1] group-hover/about:text-gray-900 transition-colors mt-auto w-full"
                            >
                              Explore <FiArrowRight className="ml-2 group-hover/about:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
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
              className={`lg:hidden transition-colors ${isSolidNavbar ? 'text-slate-900' : 'text-white'} hover:text-brand-blue`}
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

