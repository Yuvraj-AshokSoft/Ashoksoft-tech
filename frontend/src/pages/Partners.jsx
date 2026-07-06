import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const partners = [
  { name: 'Amazon Web Services', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', type: 'Cloud Partner' },
  { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg', type: 'Technology Partner' },
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg', type: 'Cloud Partner' },
  { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg', type: 'Database Partner' },
  { name: 'Vercel', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg', type: 'Deployment Partner' },
  { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg', type: 'Payment Partner' }
];

const benefits = [
  'Access to enterprise-grade tools and early beta releases.',
  'Direct support from dedicated technical account managers.',
  'Certified developers trained on the latest platforms.',
  'Exclusive pricing and discounts passed down to our clients.'
];

const Partners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionTitle 
            title="Our Technology Partners" 
            subtitle="Collaborating with industry leaders to deliver excellence" 
          />
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            We partner with the world's leading technology providers to ensure our clients receive the most secure, scalable, and innovative solutions available.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-24">
          {partners.map((partner, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center hover:shadow-xl hover:border-[#0C8DA1] transition-all duration-300 group h-48"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-[120px] max-h-[60px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider group-hover:text-[#0C8DA1] transition-colors">
                {partner.type}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-br from-[#0C8DA1]/5 to-transparent border border-[#0C8DA1]/20 rounded-3xl p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Our Partnerships Matter to You</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                By maintaining strong relationships with these technology giants, we are uniquely positioned to architect solutions that leverage the absolute best the industry has to offer.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#0C8DA1]/10 flex items-center justify-center flex-shrink-0 text-[#0C8DA1]">
                      <FiCheckCircle className="text-sm" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Partner</h3>
              <p className="text-gray-600 mb-8">
                Are you a technology provider or an agency looking to collaborate? We are always open to expanding our network.
              </p>
              <Link to="/contact">
                <Button className="w-full sm:w-auto">Let's Collaborate <FiArrowRight className="inline ml-2" /></Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Partners;
