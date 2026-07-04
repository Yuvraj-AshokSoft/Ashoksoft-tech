import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const TestimonialCard = ({ name, role, company, content, delay = 0 }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-dark-card to-dark-card/50 border border-dark-border rounded-xl p-6 hover:border-brand-cyan transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className="text-brand-blue fill-brand-blue" size={16} />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-300 mb-6 line-clamp-4">"{content}"</p>

      {/* Author */}
      <div>
        <h4 className="text-white font-bold">{name}</h4>
        <p className="text-brand-blue text-sm">{role} at {company}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

