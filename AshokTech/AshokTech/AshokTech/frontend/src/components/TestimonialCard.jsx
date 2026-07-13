import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const TestimonialCard = ({ name, role, company, content, delay = 0 }) => {
  return (
    <motion.div
      className="bg-white shadow-sm border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={18} />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 mb-8 leading-relaxed italic line-clamp-4">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="h-10 w-10 rounded-full bg-[#0C8DA1]/10 flex items-center justify-center text-[#0C8DA1] font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-gray-900 font-bold">{name}</h4>
          <p className="text-[#0C8DA1] text-sm font-medium">{role} at {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

