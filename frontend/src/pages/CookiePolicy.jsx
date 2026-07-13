import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans"
    >
      <h1 className="text-4xl font-bold text-slate-900 mb-8 relative inline-block">
        Cookie Policy
        <span className="absolute left-0 -bottom-2 w-16 h-1.5 bg-gradient-to-r from-[#0C8DA1] to-[#0a7586] rounded-full"></span>
      </h1>
      
      <div className="space-y-8 text-slate-600 leading-relaxed text-lg mt-12">
        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. What Are Cookies</h2>
          <p>
            As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. How We Use Cookies</h2>
          <p>
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. The Cookies We Set</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account related cookies:</strong> If you create an account with us then we will use cookies for the management of the signup process and general administration.</li>
            <li><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact.</li>
            <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Disabling Cookies</h2>
          <p>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. More Information</h2>
          <p>
            For more information, feel free to contact us at Ashoksoft.technologies@gmail.com.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default CookiePolicy;
