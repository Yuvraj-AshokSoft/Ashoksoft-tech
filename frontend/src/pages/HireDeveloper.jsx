import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiUser, FiUsers, FiTag, FiCode } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { hireData } from '../data/hireData';

const HireDeveloper = () => {
  const { id } = useParams();
  
  const role = hireData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!role) {
    return (
      <div className="min-h-screen pt-40 bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Role Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
          We couldn't find the specific developer role you're looking for.
        </p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  const IconComponent = role.imageIcon;
  const TechIcon = role.techIcon;

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
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
                <span>Dedicated Resources</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                {role.roleTitle}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10">
                {role.subtitle} {role.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg shadow-[#0C8DA1]/20">
                    Interview Candidates
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
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0C8DA1]/5 rounded-tr-full" />
                  
                  <TechIcon className="w-48 h-48 text-[#0C8DA1] relative z-10" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Flexible Engagement Models" 
            subtitle={`Choose how you want to hire our ${role.title}`} 
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Hire Developer Model', desc: 'Best suited for medium to large projects that require long-term collaboration. You get a dedicated developer working exclusively on your project.', icon: FiUser },
              { title: 'DGR Model', desc: 'A dedicated resource manages the offshore team by working onshore directly with your in-house team for maximum alignment.', icon: FiUsers },
              { title: 'Fixed Price Model', desc: 'Best suited for businesses planning to build an MVP within a limited budget and strict timeline.', icon: FiTag }
            ].map((model, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#0C8DA1] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#0C8DA1]/10 rounded-xl flex items-center justify-center mb-6 text-[#0C8DA1] group-hover:bg-[#0C8DA1] group-hover:text-white transition-colors">
                  <model.icon className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{model.title}</h3>
                <p className="text-gray-600 leading-relaxed">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Benefits & Skills */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Why Hire Our <span className="text-[#0C8DA1]">{role.title}</span>?
              </h2>
              <div className="space-y-8 mt-10">
                {role.benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 w-8 h-8 rounded-full bg-[#0C8DA1]/10 flex items-center justify-center flex-shrink-0 text-[#0C8DA1]">
                      <FiCheckCircle className="text-lg" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative sticky top-32">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0C8DA1]/20 to-transparent rounded-3xl -rotate-3 scale-105" />
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <FiCode className="text-[#0C8DA1]" /> Technical Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {role.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-[#0C8DA1] hover:text-[#0C8DA1] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                   <p className="text-sm text-gray-500 mb-4">Ready to augment your team?</p>
                   <Link to="/contact">
                    <Button className="w-full">Get Candidates in 48 Hours</Button>
                   </Link>
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
            Scale your team with top-tier talent
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Skip the lengthy recruitment process. Interview our pre-vetted {role.title.toLowerCase()} today.
          </p>
          <Link to="/contact">
            <button className="px-10 py-5 bg-[#0C8DA1] hover:bg-[#0A6E7E] text-white font-bold text-lg rounded-full shadow-[0_0_20px_rgba(12,141,161,0.4)] transition-all hover:scale-105 flex items-center gap-2 mx-auto">
              Schedule an Interview <FiArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default HireDeveloper;
