import React from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import { motion } from 'framer-motion';

const About = () => (
  <div className="min-h-screen pt-24 sm:pt-28 bg-white px-4 sm:px-6 lg:px-8 text-gray-900">
    <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 pb-20">
      
      {/* About Section */}
      <section className="bg-slate-50 border border-gray-200 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-14 shadow-lg text-center">
        <SectionTitle title="About Ashoksoft Technologies" subtitle="Delivering innovative software solutions" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto mt-6">
          Ashoksoft Technologies is an emerging technology company focused on delivering innovative software solutions powered by Artificial Intelligence, Web Technologies, Cloud Computing, and Automation.
          <br /><br />
          We believe technology should solve real-world problems. Our team develops scalable digital products, custom business solutions, AI-powered applications, robotics projects, and educational technology platforms that empower startups, businesses, and educational institutions.
          <br /><br />
          With a strong focus on innovation, quality, and customer satisfaction, we transform ideas into reliable and future-ready digital products.
        </motion.p>
      </section>

      {/* Vision & Mission */}
      <section className="grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white shadow-md p-8 sm:p-10 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-[#0C8DA1] mb-6">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            To become a globally recognized technology company that drives digital transformation through innovation, artificial intelligence, and next-generation software solutions.
          </p>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white shadow-md p-8 sm:p-10 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-[#0C8DA1] mb-6">Our Mission</h3>
          <ul className="space-y-4 text-gray-600 text-lg">
            <li className="flex items-start">
              <span className="text-[#0C8DA1] mr-3 font-bold">✔</span> Deliver high-quality software solutions
            </li>
            <li className="flex items-start">
              <span className="text-[#0C8DA1] mr-3 font-bold">✔</span> Empower businesses with AI technologies
            </li>
            <li className="flex items-start">
              <span className="text-[#0C8DA1] mr-3 font-bold">✔</span> Bridge the gap between education and industry
            </li>
            <li className="flex items-start">
              <span className="text-[#0C8DA1] mr-3 font-bold">✔</span> Build innovative products for future generations
            </li>
            <li className="flex items-start">
              <span className="text-[#0C8DA1] mr-3 font-bold">✔</span> Create technology that makes a positive impact
            </li>
          </ul>
        </div>
      </section>
      
    </div>
  </div>
);

export default About;
