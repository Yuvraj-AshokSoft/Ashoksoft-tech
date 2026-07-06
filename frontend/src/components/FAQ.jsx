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
<<<<<<< HEAD
          className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#0C8DA1] transition-all duration-300 shadow-sm"
=======
          className="border border-dark-border rounded-lg overflow-hidden hover:border-brand-blue transition-all duration-300"
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {/* Question */}
          <motion.button
<<<<<<< HEAD
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
          >
            <span className="text-gray-900 font-semibold text-left text-lg">{item.question}</span>
=======
            className="w-full px-6 py-4 flex items-center justify-between bg-dark-card/50 hover:bg-dark-card transition-colors duration-300"
            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
          >
            <span className="text-white font-semibold text-left">{item.question}</span>
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
<<<<<<< HEAD
              <FiChevronDown className="text-[#0C8DA1]" size={22} />
=======
              <FiChevronDown className="text-brand-blue" size={20} />
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
            </motion.div>
          </motion.button>

          {/* Answer */}
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
<<<<<<< HEAD
                className="px-6 py-5 bg-gray-50 border-t border-gray-200"
=======
                className="px-6 py-4 bg-gradient-to-r from-dark-bg to-dark-card/30 border-t border-dark-border"
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
<<<<<<< HEAD
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
=======
                <p className="text-gray-400">{item.answer}</p>
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;

