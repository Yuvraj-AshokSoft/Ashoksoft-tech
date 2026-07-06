import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const TestimonialCard = ({ name, role, company, content, delay = 0 }) => {
  return (
    <motion.div
<<<<<<< HEAD
      className="bg-white shadow-sm border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
=======
      className="bg-gradient-to-br from-dark-card to-dark-card/50 border border-dark-border rounded-xl p-6 hover:border-brand-cyan transition-all duration-300"
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Stars */}
<<<<<<< HEAD
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={18} />
=======
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className="text-brand-blue fill-brand-blue" size={16} />
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
        ))}
      </div>

      {/* Content */}
<<<<<<< HEAD
      <p className="text-gray-600 mb-8 leading-relaxed italic line-clamp-4">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-[#0C8DA1]/10 flex items-center justify-center text-[#0C8DA1] font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-gray-900 font-bold">{name}</h4>
          <p className="text-[#0C8DA1] text-sm font-medium">{role} at {company}</p>
        </div>
=======
      <p className="text-gray-300 mb-6 line-clamp-4">"{content}"</p>

      {/* Author */}
      <div>
        <h4 className="text-white font-bold">{name}</h4>
        <p className="text-brand-blue text-sm">{role} at {company}</p>
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

