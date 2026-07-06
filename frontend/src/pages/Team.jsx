import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';

const teamMembers = [
  {
    name: 'Ashok Kumar',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 10+ years of experience in enterprise software development and business strategy.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ashok&backgroundColor=0C8DA1'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Chief Technology Officer',
    bio: 'Former FAANG engineer specializing in cloud architecture and highly scalable systems.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=0a7587'
  },
  {
    name: 'David Chen',
    role: 'Lead AI Engineer',
    bio: 'Expert in machine learning models and NLP integrations with a passion for automation.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=0C8DA1'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Design',
    bio: 'Award-winning UI/UX designer focused on creating intuitive, human-centric digital experiences.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=0a7587'
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Frontend Developer',
    bio: 'React and Next.js specialist who obsesses over performance and pixel-perfect UIs.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=0C8DA1'
  },
  {
    name: 'Priya Patel',
    role: 'Product Manager',
    bio: 'Bridging the gap between business requirements and technical execution with agile methodologies.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=0a7587'
  }
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The passionate experts driving digital innovation" 
          />
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            We are a diverse group of engineers, designers, and strategists united by a single goal: to build exceptional software that solves real-world problems.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:border-[#0C8DA1] hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0C8DA1] to-[#0a7587] rounded-full rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-lg bg-white"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-[#0C8DA1] font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {member.bio}
              </p>
              
              <div className="flex justify-center gap-4 text-gray-400">
                <a href="#" className="hover:text-[#0C8DA1] transition-colors p-2 hover:bg-[#0C8DA1]/10 rounded-full">
                  <FiLinkedin className="text-xl" />
                </a>
                <a href="#" className="hover:text-[#0C8DA1] transition-colors p-2 hover:bg-[#0C8DA1]/10 rounded-full">
                  <FiTwitter className="text-xl" />
                </a>
                <a href="#" className="hover:text-[#0C8DA1] transition-colors p-2 hover:bg-[#0C8DA1]/10 rounded-full">
                  <FiGithub className="text-xl" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Team;
