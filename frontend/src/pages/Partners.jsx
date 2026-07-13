import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiUsers, FiBriefcase, FiAward, FiSmile, FiBookOpen } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import partnersHero from '../assets/partners-hero.png';

const stats = [
  { label: 'Trusted Partners', value: '20+', icon: FiUsers },
  { label: 'Collaborative Projects', value: '50+', icon: FiBriefcase },
  { label: 'Students Impacted', value: '1000+', icon: FiBookOpen },
  { label: 'Client Satisfaction', value: '95%', icon: FiSmile }
];

const partnerCategories = [
  {
    id: 'technology',
    title: 'Technology Partners',
    description: 'We collaborate with leading technology vendors to build scalable, robust, and modern solutions.',
    items: [
      { name: 'Amazon Web Services', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', type: 'Cloud Infrastructure' },
      { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg', type: 'Cloud Solutions' },
      { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg', type: 'Cloud & AI Platform' },
      { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg', type: 'NoSQL Database' },
      { name: 'Vercel', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg', type: 'Frontend Hosting' },
      { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg', type: 'Payment Integration' }
    ]
  },
  {
    id: 'educational',
    title: 'Educational Partners',
    description: 'Bridging the gap between academia and industry by empowering students with cutting-edge training and projects.',
    items: [
      { name: 'Jawaharlal Nehru Technological University', logo: '', type: 'University Partner', isAcademic: true, shortName: 'JNTU' },
      { name: 'Andhra University', logo: '', type: 'University Partner', isAcademic: true, shortName: 'AU' },
      { name: 'National Skill Development Corp', logo: '', type: 'Skill Development', isAcademic: true, shortName: 'NSDC' }
    ]
  },
  {
    id: 'industry',
    title: 'Industry Partners',
    description: 'Partnering with enterprises and consultancies to deliver digital transformation and strategic growth.',
    items: [
      { name: 'Zoho Corporation', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Zoho_logo.svg', type: 'SaaS Partner' },
      { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.svg', type: 'CRM Partner' }
    ]
  }
];

const categories = [
  { id: 'all', label: 'All Partners' },
  { id: 'technology', label: 'Technology' },
  { id: 'educational', label: 'Educational' },
  { id: 'industry', label: 'Industry' }
];

const Partners = () => {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter items dynamically based on tab selection
  const filteredPartners = activeTab === 'all'
    ? partnerCategories.flatMap(cat => cat.items.map(item => ({ ...item, categoryId: cat.id })))
    : partnerCategories.find(cat => cat.id === activeTab)?.items.map(item => ({ ...item, categoryId: activeTab })) || [];

  return (
    <div className="bg-white min-h-screen font-sans pt-24 sm:pt-32 pb-20 relative overflow-hidden">
      
      {/* Floating Blobs (matching home screen blob animations) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0C8DA1]/5 rounded-full filter blur-3xl opacity-70 animate-blob pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#F97316]/5 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#0C8DA1]/5 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Heading and Text */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="Our Trusted Partners" 
                subtitle="Collaborating for Innovation, Education, and Digital Transformation" 
                align="left"
              />
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
                AshokSoft Technologies collaborates with educational institutions, technology companies, training organizations, and industry partners to deliver innovative AI, software development, and digital transformation solutions.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link to="/contact?type=partnership">
                  <Button variant="primary" className="shadow-lg shadow-[#0C8DA1]/20">
                    Become a Partner <FiArrowRight className="ml-2" />
                  </Button>
                </Link>
                <span className="text-gray-300 text-lg hidden sm:inline-block">|</span>
                <span className="text-[#0C8DA1] font-semibold text-sm tracking-wider uppercase">Join 20+ Global Alliances</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic floating illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-square rounded-[2rem] overflow-hidden shadow-hover border border-brand-border/40 bg-slate-50 flex items-center justify-center p-6"
            >
              {/* Radial glow background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0C8DA1]/15 to-[#F97316]/5 opacity-40 blur-2xl rounded-[2rem]" />
              
              <motion.img 
                src={partnersHero} 
                alt="Digital Partnership Illustration" 
                className="w-full h-full object-contain relative z-10 rounded-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 relative z-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/85 backdrop-blur-md border border-brand-border/60 rounded-2xl p-6 shadow-card hover:shadow-hover hover:border-[#0C8DA1]/40 transition-all duration-300 flex flex-col justify-between h-36 cursor-default"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">{stat.label}</span>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0C8DA1] to-[#0A6E7E] flex items-center justify-center text-white text-lg shadow-md shadow-[#0C8DA1]/10">
                  <stat.icon />
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-heading mt-2">
                {stat.value}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Category Filter Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-slate-50 p-1.5 rounded-2xl border border-gray-200/80 max-w-2xl mx-auto relative z-10 shadow-sm">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300 z-10 ${
                  isActive ? 'text-white' : 'text-gray-500 hover:text-[#0C8DA1]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-[#0C8DA1] to-[#0A6E7E] rounded-xl -z-10 shadow-md shadow-[#0C8DA1]/15"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Partners Showcase Section with Grid Layout Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-28 relative z-10 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredPartners.map((partner, partnerIdx) => (
              <motion.div
                key={`${partner.categoryId}-${partner.name}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group relative h-52 rounded-2xl cursor-default"
              >
                {/* Radial Glow Hover overlay (matching premium website aesthetic) */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-brand-primary via-[#0A6E7E] to-brand-accent opacity-0 group-hover:opacity-100 blur-[5px] transition-opacity duration-500" />
                
                {/* Main Card */}
                <div className="relative h-full rounded-2xl bg-white border border-brand-border/60 p-6 flex flex-col justify-between shadow-card group-hover:shadow-hover transition-all duration-300">
                  
                  {/* Top Row: Category Tag & Icon */}
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-[10px] font-bold text-gray-400 group-hover:text-brand-primary uppercase tracking-wider transition-colors">
                      {partner.type}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-gray-400 group-hover:bg-[#0C8DA1]/10 group-hover:text-[#0C8DA1] transition-all">
                      {partner.categoryId === 'educational' ? <FiBookOpen className="text-xs" /> : <FiBriefcase className="text-xs" />}
                    </div>
                  </div>

                  {/* Middle: Logo or Academic Fallback */}
                  <div className="flex-1 flex items-center justify-center w-full my-3">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-[130px] max-h-[50px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallbackEl = e.target.nextSibling;
                          if (fallbackEl) fallbackEl.style.display = 'flex';
                        }}
                      />
                    ) : null}

                    {/* Academic Fallback */}
                    <div 
                      className="flex-col items-center justify-center text-center"
                      style={{ display: partner.logo ? 'none' : 'flex' }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0C8DA1]/10 to-[#0A6E7E]/10 flex items-center justify-center text-[#0C8DA1] mb-1 group-hover:scale-110 transition-transform">
                        {partner.isAcademic ? <FiBookOpen className="text-xl" /> : <FiBriefcase className="text-xl" />}
                      </div>
                      <span className="font-bold text-base text-brand-heading group-hover:text-brand-primary transition-colors">
                        {partner.shortName || partner.name}
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Partner Description/Title */}
                  <div className="text-left w-full border-t border-gray-100 pt-3">
                    <h4 className="text-sm font-bold text-brand-heading line-clamp-1 group-hover:text-[#0C8DA1] transition-colors">
                      {partner.name}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-1 overflow-hidden">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0C8DA1]/60 group-hover:bg-[#F97316] transition-colors" />
                      <span className="text-[10px] text-gray-400 font-medium group-hover:text-gray-500 transition-colors">
                        Certified Alliance Partner
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Become Our Partner CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto z-10"
        >
          {/* Subtle Border Gradient/Glow overlay */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-30 blur-sm pointer-events-none" />
          
          <div className="relative bg-gradient-to-br from-white via-slate-50 to-white/95 border border-brand-border/60 rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-card hover:shadow-hover transition-all duration-300">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0C8DA1]/10 flex items-center justify-center text-[#0C8DA1] mb-6">
                <FiUsers className="text-2xl" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-heading mb-4">
                Become Our Partner
              </h2>
              <p className="text-gray-500 text-base sm:text-lg mb-8 leading-relaxed">
                Are you an educational institution, technology provider, or training organization looking to collaborate? Let's join forces to bridge the gap between technology, education, and industry.
              </p>
              <Link to="/contact?type=partnership">
                <Button variant="primary" size="lg" className="shadow-lg shadow-[#0C8DA1]/20">
                  Let's Collaborate <FiArrowRight className="ml-2 text-lg" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Partners;
