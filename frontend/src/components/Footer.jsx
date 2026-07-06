import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-dark-border pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Company Column */}
          <div>
            <h4 className="text-slate-900 text-lg font-semibold mb-6 relative pb-2 inline-block">
              Company
              <span className="absolute left-0 bottom-0 w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">About Us</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Our Services</Link></li>
              <li><Link to="/portfolio" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Portfolio</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-slate-900 text-lg font-semibold mb-6 relative pb-2 inline-block">
              Services
              <span className="absolute left-0 bottom-0 w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Web Development</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">App Development</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-slate-900 text-lg font-semibold mb-6 relative pb-2 inline-block">
              Legal
              <span className="absolute left-0 bottom-0 w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Privacy Policy</Link></li>
              <li><Link to="#" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Terms of Service</Link></li>
              <li><Link to="#" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h4 className="text-slate-900 text-lg font-semibold mb-6 relative pb-2 inline-block">
              Follow Us
              <span className="absolute left-0 bottom-0 w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"></span>
            </h4>
            <div className="flex space-x-3">
              <a href="#" className="h-10 w-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FiGithub size={18} />
              </a>
              <a href="#" className="h-10 w-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FiLinkedin size={18} />
              </a>
              <a href="#" className="h-10 w-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FiTwitter size={18} />
              </a>
              <a href="mailto:info@ashoksofttechnologies.com" className="h-10 w-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider & Copyright */}
        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {currentYear} AshokSoft Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <Link to="#" className="hover:text-brand-blue transition-colors">Terms</Link>
            <Link to="#" className="hover:text-brand-blue transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
