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
    <div className="bg-white min-h-screen font-sans pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="inline-block py-1 px-3 rounded-full bg-[#0C8DA1]/10 text-[#0C8DA1] font-semibold text-sm mb-4">We are hiring!</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Do the best work of your life.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
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
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:border-[#0C8DA1] hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#0C8DA1]/10 rounded-xl flex items-center justify-center text-[#0C8DA1] mb-5">
                  <perk.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{perk.title}</h3>
                <p className="text-gray-600">{perk.desc}</p>
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
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:shadow-xl hover:border-[#0C8DA1] transition-all duration-300 group"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{job.department}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0C8DA1] bg-[#0C8DA1]/10 px-3 py-1 rounded-full">{job.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#0C8DA1] transition-colors">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <FiMapPin /> {job.location}
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <Link to="/contact">
                    <button className="w-full lg:w-auto px-6 py-3 border-2 border-[#0C8DA1] text-[#0C8DA1] font-bold rounded-lg hover:bg-[#0C8DA1] hover:text-white transition-colors">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Don't see a fit?</h4>
            <p className="text-gray-600 mb-4">We are always looking for talented individuals. Send us an open application!</p>
            <Link to="/contact" className="text-[#0C8DA1] font-bold hover:underline">Drop us a line →</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Career;
