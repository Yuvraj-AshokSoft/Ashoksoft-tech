import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiClock, FiHeart, FiCpu, FiTrendingUp } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const openPositions = [];

const culturePerks = [
  { icon: FiHeart, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
  { icon: FiClock, title: 'Flexible Hours', desc: 'We care about output, not clocking in. Work when you are most productive.' },
  { icon: FiCpu, title: 'Modern Tech Stack', desc: 'Work with the latest frameworks and tools. No legacy spaghetti code.' },
  { icon: FiTrendingUp, title: 'Growth Budget', desc: '$2,000 annual budget for courses, conferences, and books.' }
];

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans pt-24 sm:pt-32 pb-20 relative z-0">
      {/* Background decoration for Hero */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#0C8DA1]/10 via-[#0C8DA1]/5 to-[#f8fafc] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="inline-block py-1 px-3 rounded-full bg-[#0C8DA1]/10 text-[#0C8DA1] font-semibold text-sm mb-4">We are hiring!</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Do the best work of your life.
          </h1>
          <p className="text-xl text-gray-600 leading-loose font-medium max-w-3xl mx-auto mb-10">
            Join a remote-first team of innovators, creators, and problem solvers. We are building the future of digital experiences.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#openings">
              <Button size="lg">View Open Positions</Button>
            </a>
          </div>
        </div>

        {/* Culture & Perks */}
        <div className="mb-24">
          <SectionTitle title="Why Ashoksoft?" subtitle="Perks and culture that put you first" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {culturePerks.map((perk, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#0C8DA1]/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-[#0C8DA1]/10 transition-all duration-300 relative overflow-hidden group cursor-pointer"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0C8DA1]/0 to-[#0C8DA1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="w-16 h-16 bg-gradient-to-br from-[#0C8DA1]/10 to-[#0C8DA1]/20 rounded-2xl flex items-center justify-center text-[#0C8DA1] mb-6 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ease-out">
                  <perk.icon className="text-3xl" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight relative z-10">{perk.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium relative z-10">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div id="openings" className="scroll-mt-32">
          <SectionTitle title="Open Positions" subtitle="Find a role that fits your passion" />
          
          <div className="mt-12 space-y-4">
            {openPositions.map((job) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-[#0C8DA1]/10 hover:border-[#0C8DA1]/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{job.department}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0C8DA1] bg-[#0C8DA1]/10 px-3 py-1 rounded-full">{job.type}</span>
                  </div>
                  <h3 className="text-3xl sm:text-[36px] font-extrabold text-gray-900 mb-3 group-hover:text-[#0C8DA1] transition-colors tracking-tight leading-tight">{job.title}</h3>
                  <p className="text-gray-600 mb-6 leading-loose font-medium text-lg">{job.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-bold tracking-wide">
                    <FiMapPin /> {job.location}
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <Link to="/contact?type=careers">
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      className="relative overflow-hidden w-full lg:w-auto px-8 py-4 bg-white border-2 border-[#0C8DA1] text-[#0C8DA1] font-bold rounded-xl hover:text-white hover:border-transparent hover:shadow-xl hover:shadow-[#0C8DA1]/20 transition-all duration-300 shadow-sm group/btn"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#0C8DA1] to-[#0a7586] scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out z-0" />
                      <span className="relative z-10">Apply Now</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-16 text-center bg-gradient-to-br from-[#0C8DA1]/5 to-[#0C8DA1]/10 rounded-3xl p-12 border border-[#0C8DA1]/20 shadow-sm relative overflow-hidden group/cta hover:shadow-xl hover:shadow-[#0C8DA1]/5 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0C8DA1]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover/cta:scale-150 transition-transform duration-1000 ease-out" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0C8DA1]/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none group-hover/cta:scale-150 transition-transform duration-1000 ease-out" />
            
            <h4 className="text-3xl font-extrabold text-gray-900 mb-4 relative z-10 tracking-tight">Don't see a perfect fit?</h4>
            <p className="text-gray-600 mb-8 text-lg font-medium max-w-2xl mx-auto relative z-10 leading-loose">We are always looking for talented and passionate individuals. Send us an open application and let's talk!</p>
            <Link to="/contact?type=careers" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0C8DA1] text-white font-bold rounded-xl shadow-lg hover:bg-[#0a7586] hover:shadow-xl hover:shadow-[#0C8DA1]/30 transition-all relative z-10">
              Drop us a line
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Career;
