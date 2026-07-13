import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCpu, FiMonitor, FiSmartphone, FiCloud, FiSettings, FiBarChart2, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const virtualTeams = [
  {
    title: 'AI Development Team',
    desc: 'Hire dedicated experts in Machine Learning, Computer Vision, and NLP to build intelligent systems.',
    icon: FiCpu,
    link: '/service/ai-development'
  },
  {
    title: 'Web Development Team',
    desc: 'Hire full-stack developers for robust React applications, E-commerce, and Business Portals.',
    icon: FiMonitor,
    link: '/service/web-development'
  },
  {
    title: 'Mobile App Team',
    desc: 'Hire dedicated iOS, Android, and React Native developers for high-performance mobile solutions.',
    icon: FiSmartphone,
    link: '/service/mobile-app-development'
  },
  {
    title: 'Cloud Architects',
    desc: 'Hire certified AWS, Azure, and Google Cloud architects to scale your infrastructure securely.',
    icon: FiCloud,
    link: '/service/cloud-solutions'
  },
  {
    title: 'IoT & Robotics Team',
    desc: 'Hire hardware integration experts and automation engineers for smart device networks.',
    icon: FiSettings,
    link: '/service/robotics-iot'
  },
  {
    title: 'Data Science Team',
    desc: 'Hire data analysts and engineers for Business Intelligence, Big Data, and Predictive Analysis.',
    icon: FiBarChart2,
    link: '/service/data-analytics'
  }
];

const benefits = [
  "Top 1% vetted tech talent",
  "No recruitment or overhead costs",
  "Flexible scaling up or down",
  "Direct communication and tracking",
  "Aligned with your time zone",
  "Dedicated project managers"
];

const VirtualTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#051329] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C8DA1]/20 to-transparent opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0C8DA1] font-semibold tracking-wider uppercase text-sm mb-4 block">Dedicated Resources</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Hire Your Virtual Team</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Scale your development capacity instantly with our world-class dedicated teams. Get the expertise you need, exactly when you need it.
            </p>
            <Link to="/contact?type=sales">
              <button className="bg-[#0C8DA1] hover:bg-[#097383] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-[#0C8DA1]/30">
                Build Your Team Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-[3rem] z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Choose Your Specialized Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select from our diverse pools of expert technologists ready to integrate with your workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtualTeams.map((team, index) => {
              const Icon = team.icon;
              return (
                <Link key={index} to={team.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#0C8DA1]/30 transition-all duration-300 group h-full flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center text-[#0C8DA1] group-hover:bg-[#0C8DA1] group-hover:text-white transition-all duration-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0C8DA1] transition-colors">{team.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-8 flex-grow">{team.desc}</p>
                    <div className="mt-auto inline-flex items-center text-[#0C8DA1] font-semibold group-hover:text-gray-900 transition-colors">
                      Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-10 md:p-16 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Hire a Virtual Team With Us?</h2>
                <p className="text-lg text-slate-600 mb-8">
                  By partnering with AshokSoft Technologies, you bypass the expensive and time-consuming hiring process. We provide fully managed, highly skilled professionals who seamlessly integrate as an extension of your own company.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FiCheckCircle className="text-[#0C8DA1] flex-shrink-0" size={20} />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Virtual Team Working" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-4xl font-extrabold text-[#0C8DA1] mb-1">100+</div>
                  <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Expert Developers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VirtualTeam;
