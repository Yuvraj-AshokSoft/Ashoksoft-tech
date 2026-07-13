import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans"
    >
      <h1 className="text-4xl font-bold text-slate-900 mb-8 relative inline-block">
        Privacy Policy
        <span className="absolute left-0 -bottom-2 w-16 h-1.5 bg-gradient-to-r from-[#0C8DA1] to-[#0a7586] rounded-full"></span>
      </h1>
      
      <div className="space-y-8 text-slate-600 leading-relaxed text-lg mt-12">
        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Introduction</h2>
          <p>
            At AshokSoft Technologies, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services or visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Information We Collect</h2>
          <p className="mb-3">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Usage data (How you interact with our website)</li>
            <li>Cookies and tracking data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. How We Use Your Information</h2>
          <p className="mb-3">The information we collect is used in the following ways:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. However, please note that no method of transmission over the Internet, or method of electronic storage, is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at Ashoksoft.technologies@gmail.com.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
