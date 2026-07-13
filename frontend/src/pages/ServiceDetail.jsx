import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
  const { id } = useParams();
  
  // Try to find the service in our robust static data, otherwise handle 404
  const service = servicesData[id];

  useEffect(() => {
    // Scroll to top when changing services
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen pt-40 bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
          We couldn't find the specific service you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  const IconComponent = service.imageIcon;

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
                <span>Premium Service</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10">
                {service.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact?type=sales">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg shadow-[#0C8DA1]/20">
                    Get a Free Consultation
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Why Choose Us?" 
            subtitle={`The advantages of our ${service.title.toLowerCase()} service`} 
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {service.benefits.map((benefit, idx) => (
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
                Comprehensive <span className="text-[#0C8DA1]">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide end-to-end services tailored to your exact requirements. Our expertise ensures that every aspect of your project is handled with precision and care.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.offerings.map((offering, idx) => (
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
              <div className="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technologies We Master</h3>
                <div className="grid grid-cols-2 gap-4">
                  {service.technologies.map((tech, idx) => {
                    const TechIcon = service.techIcons[idx % service.techIcons.length];
                    const techSlug = tech.toLowerCase().replace(/ & /g, '-and-').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                    return (
                      <Link to={`/technology/${techSlug}`} key={idx}>
                        <motion.div 
                          whileHover={{ y: -5 }}
                          className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0C8DA1] transition-all cursor-pointer h-full"
                        >
                          <TechIcon className="text-2xl text-[#0C8DA1]" />
                          <span className="font-semibold text-gray-700">{tech}</span>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
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
            Ready to transform your ideas into reality?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} expertise can drive your business forward.
          </p>
          <Link to="/contact?type=sales">
            <button className="px-10 py-5 bg-[#0C8DA1] hover:bg-[#0A6E7E] text-white font-bold text-lg rounded-full shadow-[0_0_20px_rgba(12,141,161,0.4)] transition-all hover:scale-105 flex items-center gap-2 mx-auto">
              Start Your Project <FiArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default ServiceDetail;
