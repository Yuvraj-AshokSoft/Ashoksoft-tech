import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const ServiceCard = ({ icon: Icon, title, description, slug, delay = 0 }) => {
  const content = (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg border border-[#0C8DA1]/30 flex items-center justify-center bg-white text-[#0C8DA1]">
            <Icon className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0C8DA1] transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex items-center text-[#0C8DA1] font-semibold text-sm">
        Learn More <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );

  return (
    <motion.div
      className="group bg-[#f9fafa] hover:bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-[#0C8DA1]/50 transition-all duration-300 cursor-pointer h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {slug ? (
        <Link to={`/service/${slug}`} className="block h-full">
          {content}
        </Link>
      ) : content}
    </motion.div>
  );
};

export default ServiceCard;

