import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { technologiesData } from '../data/technologiesData';

const Technologies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter out the aliases so we don't have duplicate cards
  const aliasesToIgnore = ['react-js', 'node', 'html5'];
  const uniqueTechs = Object.entries(technologiesData)
    .filter(([key]) => !aliasesToIgnore.includes(key))
    .map(([key, tech]) => ({ ...tech, slug: key }));

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#051329] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C8DA1]/20 to-transparent opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0C8DA1] font-semibold tracking-wider uppercase text-sm mb-4 block">Tech Stack</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Technologies We Master</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage modern, scalable, and secure technologies to build powerful digital solutions tailored for your enterprise needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-[3rem] z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Explore Our Expertise</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From robust backends to stunning frontends, we use the right tools for the job.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueTechs.map((tech, index) => {
              const Icon = tech.imageIcon;
              return (
                <Link key={tech.slug} to={`/technology/${tech.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#0C8DA1]/30 transition-all duration-300 group h-full flex flex-col"
                  >
                    <div className="w-14 h-14 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center text-[#0C8DA1] mb-6 group-hover:bg-[#0C8DA1]/10 group-hover:scale-110 transition-all duration-300">
                      {Icon && <Icon size={28} />}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0C8DA1] transition-colors">{tech.title}</h3>
                    <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">{tech.description}</p>
                    <div className="mt-auto flex items-center text-[#0C8DA1] font-semibold group-hover:text-gray-900 transition-colors">
                      Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
