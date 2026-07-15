import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFacebook, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = 2025;

  return (
    <footer className="bg-dark-bg border-t border-dark-border pt-16 mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

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
              <li><Link to="/service/web-development" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Web Development</Link></li>
              <li><Link to="/service/mobile-app-development" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">App Development</Link></li>
              <li><Link to="/service/ui-ux-design" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">UI/UX Design</Link></li>
              <li><Link to="/service/digital-marketing" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-slate-900 text-lg font-semibold mb-6 relative pb-2 inline-block">
              Legal
              <span className="absolute left-0 bottom-0 w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-slate-600 hover:text-brand-blue hover:pl-2 transition-all duration-300">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h4 className="text-slate-900 text-lg font-semibold mb-6 relative pb-2 inline-block">
              Follow Us
              <span className="absolute left-0 bottom-0 w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"></span>
            </h4>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/ashoksoft-technologies" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#0C8DA1] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FiLinkedin size={18} />
              </a>
              <a href="https://www.instagram.com/ashoksoft_technologies?utm_source=qr&igsh=MWxzMmp6Ynpwemd0Nw==" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#0C8DA1] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FiInstagram size={18} />
              </a>
              <a href="https://www.facebook.com/share/1HQtzDXSDX/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#0C8DA1] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FiFacebook size={18} />
              </a>
              <a href="mailto:Ashoksoft.technologies@gmail.com" className="h-10 w-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#0C8DA1] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider & Copyright Bottom Bar */}
      <div className="border-t border-dark-border bg-[#0C8DA1] py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm font-medium">
            {"\u00A9"} {currentYear} <span className="font-bold">AshokSoft Technologies</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/terms" className="text-white hover:text-white/80 transition-colors">Terms</Link>
            <span className="text-white/40">|</span>
            <Link to="/privacy" className="text-white hover:text-white/80 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
