import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const ServiceCard = ({ icon: Icon, title, description, slug, delay = 0 }) => {
  const content = (
    <>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-lg flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="text-white text-2xl" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Arrow */}
        <motion.div
          className="flex items-center text-brand-blue"
          whileHover={{ x: 5 }}
        >
          <FiArrowRight className="text-lg" />
        </motion.div>
      </div>
    </>
  );

  return (
<<<<<<< HEAD
    <div
      className="group relative h-full bg-gradient-to-br from-dark-card to-dark-card/50 border border-dark-border rounded-2xl p-6 hover:border-brand-blue transition-all duration-300 cursor-pointer overflow-hidden"
=======
    <motion.div
      className="group relative bg-gradient-to-br from-dark-card to-dark-card/50 border border-dark-border rounded-xl p-6 hover:border-brand-blue transition-all duration-300 cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
    >
      {slug ? (
        <Link to={`/service/${slug}`} className="block h-full">
          {content}
        </Link>
      ) : content}
<<<<<<< HEAD
    </div>
=======
    </motion.div>
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
  );
};

export default ServiceCard;

