import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

import {
  FiCode,
  FiMonitor,
  FiPenTool,
  FiCpu,
  FiBarChart,
  FiSearch,
  FiHeart,
  FiBookOpen,
  FiShoppingBag,
  FiBriefcase,
  FiTruck,
  FiCheckCircle,
  FiClock,
  FiUsers,
  FiShield,
  FiLayers,
  FiArrowRight,
  FiSmile,
  FiSmartphone,
  FiCloud,
  FiSettings
} from 'react-icons/fi';

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaLaravel,
  FaAndroid,
  FaApple,
  FaAws,
  FaDocker
} from 'react-icons/fa';

import {
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiMicrosoftazure,
  SiMysql
} from 'react-icons/si';

const fallbackServices = [
  {
    icon: FiCpu,
    slug: "ai-development",
    title: "AI Development",
    description: "Chatbots, Computer Vision, NLP"
  },
  {
    icon: FiMonitor,
    slug: "web-development",
    title: "Web Development",
    description: "React Website, E-commerce, Business Portals"
  },
  {
    icon: FiSmartphone,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Android Apps, iOS Apps, Flutter Apps"
  },
  {
    icon: FiCloud,
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description: "AWS, Azure, Google Cloud Integration"
  },
  {
    icon: FiCpu,
    slug: "robotics-iot",
    title: "Robotics & IoT",
    description: "Hardware Integration, Smart Devices, Automation"
  },
  {
    icon: FiBarChart,
    slug: "data-analytics",
    title: "Data Analytics",
    description: "Business Intelligence, Big Data, Predictive Analysis"
  }
];

const technologies = [
  { icon: FaReact, name: "React", color: "text-blue-400" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { icon: FaPython, name: "Python", color: "text-yellow-500" },
  { icon: SiDotnet, name: ".NET", color: "text-purple-600" },
  { icon: FaAndroid, name: "Android", color: "text-green-400" },
  { icon: FaApple, name: "iOS", color: "text-gray-300" },
  { icon: FaLaravel, name: "Laravel", color: "text-red-500" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-500" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
  { icon: SiMicrosoftazure, name: "Azure", color: "text-blue-500" },
];

const processSteps = [
  { id: 1, title: "Discovery", description: "Understanding your business goals, target audience, and project requirements.", icon: FiSearch },
  { id: 2, title: "Design", description: "Creating intuitive UI/UX designs and wireframes for your approval.", icon: FiPenTool },
  { id: 3, title: "Development", description: "Writing clean, scalable code using cutting-edge technologies.", icon: FiCode },
  { id: 4, title: "Testing", description: "Rigorous quality assurance to ensure bug-free and smooth performance.", icon: FiShield },
  { id: 5, title: "Deployment", description: "Launching your product securely on the desired platforms.", icon: FiMonitor },
  { id: 6, title: "Support", description: "Continuous maintenance and updates to keep your software running optimally.", icon: FiClock },
];

const industries = [
  { icon: FiHeart, title: "Healthcare", description: "Secure healthcare management systems, patient portals, and telemedicine solutions." },
  { icon: FiBookOpen, title: "Education", description: "Learning Management Systems, online examinations, and student ERP solutions." },
  { icon: FiShoppingBag, title: "E-Commerce", description: "Scalable online stores, payment gateways, and inventory management." },
  { icon: FiBriefcase, title: "Enterprise", description: "ERP, CRM, HRMS, and enterprise digital transformation." },
  { icon: FiTruck, title: "Logistics", description: "Fleet management, shipment tracking, and transportation automation." },
  { icon: FiBarChart, title: "Finance", description: "Accounting software, financial reporting, and secure fintech applications." },
];

const chooseReasons = [
  { icon: FiUsers, title: "Expert Team", description: "Highly skilled developers with years of experience across various tech stacks." },
  { icon: FiClock, title: "On-Time Delivery", description: "We adhere strictly to deadlines, ensuring your project launches when you need it." },
  { icon: FiShield, title: "Secure & Scalable", description: "Building robust architectures designed to grow securely with your business." },
  { icon: FiSmile, title: "Client-Centric", description: "Your success is our priority. We maintain transparent communication throughout." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      
      {/* 1. Our Services (Hero Section) */}
      <section className="relative pt-32 pb-20 bg-[#051329] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C8DA1]/20 to-transparent opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0C8DA1] font-semibold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We provide end-to-end IT solutions designed to accelerate your digital transformation and drive sustainable business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 6 Premium Service Cards */}
      <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-[3rem] z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Choose the Right Solution for Your Business</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fallbackServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.description}
                slug={service.slug}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Technologies We Use */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technologies We Use</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Leveraging the latest and most powerful tech stacks to build robust, scalable, and secure applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
            {technologies.map((tech, index) => {
              const TechIcon = tech.icon;
              const slug = tech.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <Link to={`/technology/${slug}`} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex flex-row items-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0C8DA1]/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#0C8DA1]/10 transition-colors duration-300">
                      <TechIcon className={`text-2xl ${tech.color || 'text-slate-700'}`} />
                    </div>
                    <span className="ml-4 font-bold text-slate-800 text-lg tracking-wide group-hover:text-[#0C8DA1] transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Our Development Process */}
      <section className="py-24 bg-[#051329] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A transparent, agile, and structured approach to bringing your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors"
                >
                  <div className="absolute top-0 right-0 p-4 text-7xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                    0{step.id}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center mb-6 border border-brand-blue/30 group-hover:bg-brand-blue group-hover:border-transparent transition-all">
                    <StepIcon className="text-2xl text-brand-cyan group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Delivering customized digital solutions across diverse business domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IndIcon = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-blue/30 hover:shadow-md transition-all"
                >
                  <div className="p-4 bg-brand-blue/10 rounded-xl text-brand-blue">
                    <IndIcon className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Ashoksoft? */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Ashoksoft?</h2>
              <p className="text-lg text-slate-600 mb-8">
                We don't just build software; we build partnerships. Our commitment to excellence, innovation, and client satisfaction sets us apart in the digital landscape.
              </p>
              
              <div className="space-y-6">
                {chooseReasons.map((reason, index) => {
                  const ReasonIcon = reason.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="mt-1 w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0">
                        <ReasonIcon className="text-brand-cyan" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{reason.title}</h4>
                        <p className="text-slate-600 text-sm">{reason.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team Collaboration" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 hidden sm:flex"
              >
                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  50+
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Projects</p>
                  <p className="text-xl font-bold text-slate-900">Delivered</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-[#0C8DA1]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's discuss how our premium IT solutions can help you achieve your goals. Get in touch with our experts today.
            </p>
            <Link to="/contact?type=sales">
              <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-red-500/30 flex items-center gap-2 mx-auto hover:scale-105">
                Start Your Project <FiArrowRight />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default Services;
