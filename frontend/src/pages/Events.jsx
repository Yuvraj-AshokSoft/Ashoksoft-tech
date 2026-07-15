import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiTool, 
  FiBriefcase, 
  FiMonitor, 
  FiCalendar, 
  FiUsers, 
  FiTrendingUp, 
  FiAward, 
  FiMessageCircle,
  FiMail,
  FiImage,
  FiBookOpen,
  FiArrowRight
} from 'react-icons/fi';
import eventsVectorHero from '../assets/events-vector-hero.png';

const Events = () => {
  const [events, setEvents] = React.useState([]);
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState({ type: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (e, link) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const targetId = link.substring(1);
      scrollToSection(targetId);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      setStatus({ type: 'success', message: `Thank you! ${email} has been subscribed to updates.` });
      setEmail('');
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    }
  };

  const eventCategories = [
    {
      title: "Workshops",
      subtitle: "Hands-on labs with real workflows",
      actionText: "Register for practical sessions",
      icon: <FiTool size={32} />,
      link: "#upcoming-events"
    },
    {
      title: "School Events",
      subtitle: "AI workshops, robotics workshops & IoT",
      actionText: "Join our school workshops",
      icon: <FiBookOpen size={32} />,
      link: "/contact?type=partnership"
    },
    {
      title: "Tech Talks",
      subtitle: "Architecture deep dives & best practices",
      actionText: "Explore our tech practices",
      icon: <FiMonitor size={32} />,
      link: "/technologies"
    }
  ];

  const benefits = [
    {
      title: "Direct Access to Experts",
      description: "Learn directly from senior engineers and product managers who build scalable enterprise software.",
      icon: <FiUsers className="w-8 h-8 text-[#0C8DA1]" />
    },
    {
      title: "Stay Ahead of the Curve",
      description: "Get early access to cutting-edge tech trends and best practices before they become mainstream.",
      icon: <FiTrendingUp className="w-8 h-8 text-[#0C8DA1]" />
    },
    {
      title: "Hands-on Experience",
      description: "Participate in live coding sessions and interactive workshops to solidify your knowledge.",
      icon: <FiAward className="w-8 h-8 text-[#0C8DA1]" />
    },
    {
      title: "Community Networking",
      description: "Connect with like-minded developers, potential partners, and industry leaders in our networking lounges.",
      icon: <FiMessageCircle className="w-8 h-8 text-[#0C8DA1]" />
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans pt-24 sm:pt-32 pb-20 relative overflow-hidden">
      
      {/* Floating Blobs (matching home screen blob animations) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0C8DA1]/5 rounded-full filter blur-3xl opacity-70 animate-blob pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#F97316]/5 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#0C8DA1]/5 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Heading and Text */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#0C8DA1] font-semibold tracking-wider uppercase text-sm mb-4 block">Events Hub</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
                Events That Inspire Innovation
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mb-8">
                Explore workshops, webinars, technology sessions, client meetups, and community events where we share knowledge, build connections, and drive digital transformation.
              </p>
              
              <div className="mb-8 relative max-w-md">
                <input 
                  type="text" 
                  placeholder="Search events, speakers, or topics" 
                  className="w-full px-6 py-4 rounded-xl text-gray-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0C8DA1] focus:border-transparent shadow-sm"
                />
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/contact?type=partnership">
                  <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg shadow-[#0C8DA1]/15 text-white bg-[#0C8DA1] hover:bg-[#097586] transition-all duration-300">
                    Host an Event With Us <FiArrowRight className="ml-2" />
                  </button>
                </Link>
                <span className="text-gray-300 text-lg hidden sm:inline-block">|</span>
                <button 
                  onClick={() => scrollToSection('upcoming-events')}
                  className="text-[#0C8DA1] font-semibold text-sm tracking-wider uppercase hover:text-[#097586] transition-colors"
                >
                  Explore Events
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic floating illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-square rounded-[2rem] overflow-hidden shadow-hover border border-brand-border/40 bg-slate-50 flex items-center justify-center p-6"
            >
              {/* Radial glow background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0C8DA1]/15 to-[#F97316]/5 opacity-40 blur-2xl rounded-[2rem]" />
              
              <motion.img 
                src={eventsVectorHero} 
                alt="Digital Events Illustration" 
                className="w-full h-full object-contain relative z-10 rounded-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section id="categories" className="py-24 bg-[#F8F9FA] relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Event Categories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              Pick a track to discover relevant sessions across hands-on learning, webinars, and industry meetups.
            </p>
            
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => scrollToSection('categories')}
                className="px-8 py-3 rounded-xl border border-[#0C8DA1] font-semibold text-[#0C8DA1] hover:bg-[#0C8DA1] hover:text-white transition-colors shadow-sm"
              >
                Browse All
              </button>
              <button 
                onClick={() => scrollToSection('upcoming-events')}
                className="px-8 py-3 rounded-xl bg-[#0C8DA1] text-white font-semibold hover:bg-[#097586] transition-colors shadow-sm"
              >
                View Events
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {eventCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#0C8DA1]/30 transition-all group"
              >
                <div className="w-20 h-20 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center text-[#0C8DA1] mb-6 group-hover:bg-[#0C8DA1]/10 group-hover:scale-110 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#0C8DA1] transition-colors">{category.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{category.subtitle}</p>
                <Link 
                  to={category.link} 
                  onClick={(e) => handleCategoryClick(e, category.link)}
                  className="mt-auto text-xl font-bold text-[#0C8DA1] group-hover:text-gray-900 transition-colors flex items-center gap-2"
                >
                  {category.actionText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event Section */}
      <section className="py-24 bg-white border-t border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Host an Event With AshokSoft</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              Bring your audience together with an enterprise-grade event experience—strategy, content, and delivery support.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact?type=sales">
                <button className="px-8 py-3 rounded-xl border border-[#0C8DA1] font-semibold text-[#0C8DA1] hover:bg-[#0C8DA1] hover:text-white transition-colors shadow-sm">
                  Request a Proposal
                </button>
              </Link>
              <Link to="/contact?type=partnership">
                <button className="px-8 py-3 rounded-xl bg-[#0C8DA1] text-white font-semibold hover:bg-[#097586] transition-colors shadow-sm">
                  Collaborate With Us
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 flex flex-col sm:flex-row gap-6 items-start hover:shadow-md hover:border-[#0C8DA1]/30 transition-all group"
            >
              <div className="w-24 h-24 rounded-xl flex-shrink-0 overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Benefits of partnering" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0C8DA1] transition-colors">Benefits of partnering for an event</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Access expertise across AI, cloud, security, and enterprise automation. Co-create premium agendas, and deliver high-impact sessions.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 flex flex-col sm:flex-row gap-6 items-start hover:shadow-md hover:border-[#0C8DA1]/30 transition-all group"
            >
              <div className="w-24 h-24 rounded-xl flex-shrink-0 overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Choose a collaboration type" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#0C8DA1] transition-colors">Choose a collaboration type</h3>
                <p className="text-slate-400 text-xs mb-3 font-medium">Select the format that fits your goals</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Host Workshop, College Collaboration, Corporate Training, or Community Meetup. We'll handle content and support.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Host Workshop', 'College Collaboration', 'Corporate Training', 'Community'].map((tag, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-600 border border-gray-200 text-[10px] font-semibold px-2 py-1 rounded-md group-hover:border-[#0C8DA1]/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section (Placeholder) */}
      <section id="upcoming-events" className="py-24 bg-slate-50 relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Upcoming Events</h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Secure your spot in our highly anticipated upcoming sessions.
              </p>
            </div>
            <button className="px-6 py-3 rounded-lg text-[#0C8DA1] font-semibold border border-[#0C8DA1] hover:bg-[#0C8DA1] hover:text-white transition-all flex items-center gap-2">
              View Calendar <FiCalendar />
            </button>
          </div>

          {events.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 border-dashed rounded-2xl py-24 flex flex-col items-center justify-center text-center shadow-sm hover:border-[#0C8DA1]/30 transition-colors group"
            >
              <div className="w-20 h-20 bg-slate-50 border border-gray-100 text-[#0C8DA1] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0C8DA1]/10 transition-colors">
                <FiCalendar size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#0C8DA1] transition-colors">More Events Coming Soon!</h3>
              <p className="text-slate-500 max-w-md">
                We are currently planning our next batch of exciting events. Stay tuned for school workshops, tech talks, and more.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Why Attend Our Events?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our events are designed to provide maximum value, actionable insights, and unparalleled networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#0C8DA1]/30 transition-colors hover:shadow-md group"
              >
                <div className="w-16 h-16 bg-slate-50 border border-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0C8DA1]/10 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0C8DA1] transition-colors">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#051329] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C8DA1]/20 to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <FiMail className="w-8 h-8 text-[#0C8DA1]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Never Miss An Update</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Subscribe to our events newsletter to get early access to registration, exclusive speaker announcements, and special community discounts.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="flex-grow px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0C8DA1]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-[#0C8DA1] hover:bg-[#097586] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#0C8DA1]/30 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            {status.message && (
              <p className={`mt-4 text-sm font-semibold ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status.message}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
