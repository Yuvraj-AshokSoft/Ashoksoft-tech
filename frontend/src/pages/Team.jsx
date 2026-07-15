import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin } from 'react-icons/fi';

const teamMembers = [
  {
    name: 'Pushpendra Chauhan',
    role: 'CEO & Founder',
    bio: 'Visionary leader with a passion for driving digital innovation and leading enterprise software development.',
    image: '/pushpendra.png',
    linkedin: 'https://www.linkedin.com/in/pushpendra-chauhan-835538206?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Yashraj Chauhan',
    role: 'Managing Director',
    bio: 'Strategic thinker focused on expanding business horizons and managing operational excellence.',
    image: '/yashraj.png',
    linkedin: 'https://www.linkedin.com/in/yashraj-chauhan-62113b33b?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Dr. Shubham Kumar Singh',
    role: 'Guest Faculty',
    bio: 'Academic expert providing technical mentorship and guiding our research and development initiatives.',
    image: '/Shubham.jpeg',
    linkedin: ''
  },
  {
    name: 'Krishnam',
    role: 'Lead Software Engineer',
    bio: 'Expert in scalable system architecture and bringing complex technology solutions to life.',
    image: '/krishnam.png',
    linkedin: 'https://www.linkedin.com/in/krishnam-133a9a329?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Shrishti',
    role: 'Frontend Developer',
    bio: 'Passionate about creating intuitive, pixel-perfect, and highly responsive user interfaces.',
    image: '/shrishti.png',
    linkedin: 'https://www.linkedin.com/in/shrishti-singh-8b7107381?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Yuvraj',
    role: 'Backend Developer',
    bio: 'Specialist in robust database management, cloud integrations, and building secure APIs.',
    image: '/yuvraj.png',
    linkedin: 'https://www.linkedin.com/in/yuvraj-singh-996a23328/'
  }
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Banner Section */}
      <div className="relative pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#161C2D] mb-4 uppercase tracking-wide"
          >
            Meet The Leadership
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-semibold text-[#0C8DA1] mb-6 flex items-center justify-center"
          >
            <span className="w-8 h-1 bg-[#0C8DA1] rounded-full mr-4 hidden sm:block"></span>
            The people that propel us forward
            <span className="w-8 h-1 bg-[#0C8DA1] rounded-full ml-4 hidden sm:block"></span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            AshokSoft is led by a team of passionate, bold, and creative people.
            Meet our cross-cultural team of IT & Engineering professionals who ensure the success of your
            operations. Discover how our strong team of experienced and competent leaders can create a
            difference for your business.
          </motion.p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col items-center relative overflow-hidden group"
            >
              {member.linkedin && (
                <a 
                  href={member.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-[#0C8DA1] text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#0a7587]"
                >
                  <FiLinkedin className="text-xl" />
                </a>
              )}

              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-50 shadow-md mb-6"
              />
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <h6 className="text-[#0C8DA1] font-semibold mb-4 text-sm uppercase tracking-wide">{member.role}</h6>
              <p className="text-gray-600 leading-relaxed text-center text-sm">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Team;
