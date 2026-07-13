import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans"
    >
      <h1 className="text-4xl font-bold text-slate-900 mb-8 relative inline-block">
        Terms of Service
        <span className="absolute left-0 -bottom-2 w-16 h-1.5 bg-gradient-to-r from-[#0C8DA1] to-[#0a7586] rounded-full"></span>
      </h1>
      
      <div className="space-y-8 text-slate-600 leading-relaxed text-lg mt-12">
        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the services provided by AshokSoft Technologies, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Provision of Services</h2>
          <p>
            AshokSoft Technologies is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the services which AshokSoft Technologies provides may change from time to time without prior notice to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. User Conduct</h2>
          <p className="mb-3">When using our services, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account and password</li>
            <li>Accept responsibility for all activities that occur under your account</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Intellectual Property</h2>
          <p>
            The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Contact Information</h2>
          <p>
            If you have any questions regarding these Terms of Service, you can contact us at Ashoksoft.technologies@gmail.com.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
