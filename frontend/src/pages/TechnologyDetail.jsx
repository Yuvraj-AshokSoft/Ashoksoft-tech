import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiCode } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { technologiesData } from '../data/technologiesData';

const TechnologyDetail = () => {
  const { id } = useParams();
  
  // Try to find the technology in our robust static data, otherwise dynamically generate a generic page
  let tech = technologiesData[id];

  if (!tech && id) {
    // Generate a beautiful fallback page using the ID
    const formattedTitle = id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      
    tech = {
      title: formattedTitle,
      subtitle: `Expert ${formattedTitle} Development Services`,
      description: `We leverage ${formattedTitle} to build highly scalable, performant, and secure solutions tailored to your business needs. Our expert team ensures industry best practices and rapid deployment.`,
      imageIcon: null,
      benefits: [
        { title: 'High Performance', description: 'Optimized architectures ensuring blazing fast execution.' },
        { title: 'Scalable Solutions', description: 'Designed to grow seamlessly alongside your enterprise.' },
        { title: 'Robust Security', description: 'Built with industry-leading security standards and compliance.' }
      ],
      offerings: ['Custom Development', 'Consulting & Strategy', 'System Integration', 'Maintenance & Support']
    };
  }

  useEffect(() => {
    // Scroll to top when changing technologies
    window.scrollTo(0, 0);
  }, [id]);

  if (!tech) {
    return (
      <div className="min-h-screen pt-40 bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Technology Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
          We couldn't find the specific technology you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  const IconComponent = tech.imageIcon || FiCode;

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#0C8DA1]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-[#0A6E7E]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C8DA1]/10 text-[#0C8DA1] font-semibold text-sm mb-6">
                <IconComponent className="text-lg" />
                <span>Core Technology</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                {tech.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10">
                {tech.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact?type=sales">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg shadow-[#0C8DA1]/20">
                    Hire {tech.title} Developers
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-tr from-[#0C8DA1] to-[#0A6E7E] rounded-3xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center p-12 overflow-hidden relative">
                  {/* Decorative internal elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0C8DA1]/5 rounded-tr-full" />
                  
                  <IconComponent className="w-48 h-48 text-[#0C8DA1] relative z-10" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Use {tech.title}</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {tech.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={`The Power of ${tech.title}`} 
            subtitle="Key advantages of building with this technology" 
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {tech.benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#0C8DA1]/10 rounded-xl flex items-center justify-center mb-6 text-[#0C8DA1]">
                  <FiCheckCircle className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                What We Build With <span className="text-[#0C8DA1]">{tech.title}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our expert developers leverage {tech.title} to deliver highly scalable, performant, and secure solutions tailored to your business needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {tech.offerings.map((offering, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#0C8DA1]/10 flex items-center justify-center flex-shrink-0 text-[#0C8DA1]">
                      <FiCheckCircle className="text-sm" />
                    </div>
                    <span className="text-gray-700 font-medium">{offering}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0C8DA1]/20 to-transparent rounded-3xl -rotate-3 scale-105" />
              <div className="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-lg flex items-center justify-center flex-col text-center">
                <IconComponent className="text-9xl text-[#0C8DA1] mb-6" strokeWidth={1} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert {tech.title} Team</h3>
                <p className="text-gray-600">Years of hands-on experience deploying production-ready applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0C8DA1]/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0C8DA1]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Looking for expert {tech.title} developers?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can leverage this technology to build your next digital product.
          </p>
          <Link to="/contact?type=sales">
            <button className="px-10 py-5 bg-[#0C8DA1] hover:bg-[#0A6E7E] text-white font-bold text-lg rounded-full shadow-[0_0_20px_rgba(12,141,161,0.4)] transition-all hover:scale-105 flex items-center gap-2 mx-auto">
              Schedule a Call <FiArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default TechnologyDetail;
