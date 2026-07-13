import React from 'react';
import { motion } from 'framer-motion';

const StatsCard = ({ icon: Icon, label, value, delay = 0 }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-dark-card to-dark-card/50 border border-dark-border rounded-lg p-6 hover:border-brand-blue transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-1">{label}</p>
          <motion.h3
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
            viewport={{ once: true }}
          >
            {value}
          </motion.h3>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-lg flex items-center justify-center">
          <Icon className="text-white text-2xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;

