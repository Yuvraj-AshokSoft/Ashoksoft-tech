import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FAQ = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="border border-dark-border rounded-lg overflow-hidden hover:border-brand-blue transition-all duration-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {/* Question */}
          <motion.button
            className="w-full px-6 py-4 flex items-center justify-between bg-dark-card/50 hover:bg-dark-card transition-colors duration-300"
            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
          >
            <span className="text-white font-semibold text-left">{item.question}</span>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown className="text-brand-blue" size={20} />
            </motion.div>
          </motion.button>

          {/* Answer */}
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                className="px-6 py-4 bg-gradient-to-r from-dark-bg to-dark-card/30 border-t border-dark-border"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-400">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;

