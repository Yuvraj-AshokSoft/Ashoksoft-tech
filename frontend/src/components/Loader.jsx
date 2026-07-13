import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ fullScreen = false }) => {
  return (
    <motion.div
      className={`flex items-center justify-center ${
        fullScreen ? 'fixed inset-0 bg-dark-bg/80 backdrop-blur-sm' : 'w-full h-32'
      }`}
    >
      <motion.div
        className="flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[0, 1, 2].map((dot) => (
          <motion.div
            key={dot}
            className="w-3 h-3 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              delay: dot * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;

