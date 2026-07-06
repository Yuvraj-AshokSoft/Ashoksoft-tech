import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';

const blogData = [
  {
    id: 1,
    title: 'Hire React Native Developers: Everything You Need to Know Before Starting a Project',
    snippet: 'About a third or roughly 35 per cent of the cross platform mobile app development market is still dominated by React Native, and for good reason. The 17 per cent CAGR and leading number of job postings prove that React Native still has what it takes to meet such development needs for top platforms...',
    date: 'June 29, 2026',
    author: 'Manek',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'Key Services Offered by a React Native App Development Company',
    snippet: 'Businesses see advertisements and applications in the digital space to be of vital importance especially in the 2020s. When it comes to the adoption of mobile phones in particular, we are currently at 5.8 billion subscribers...',
    date: 'June 22, 2026',
    author: 'Ajanth',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655cb?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'React Native Development Services and Their Role in App Development',
    snippet: 'Both businesses and indie developers alike are looking for cost effective apps that work across platforms and don’t take months to develop. Facebook answered this need more than a decade ago...',
    date: 'June 15, 2026',
    author: 'Deepthy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Top Benefits of Working with a React Native App Development Company',
    snippet: 'Businesses, especially those that are not tech heavy, tend to look for streamlined solutions that help them create a digital presence without investing too heavily to do so...',
    date: 'June 10, 2026',
    author: 'Deepthy',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'How AI Is Transforming Software Outsourcing Services',
    snippet: 'The global software outsourcing market has passed 450 billion dollars in the current year alone, with estimated growth being forecasted in the future. As more companies look towards hiring the services...',
    date: 'June 04, 2026',
    author: 'Manek',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'How to Choose the Right Software Outsourcing Company for Your Business',
    snippet: 'Making the right choice of a software outsourcing partner can be critical to your business growth. Learn about the key metrics you need to evaluate before making a decision...',
    date: 'May 25, 2026',
    author: 'Deepthy',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
  }
];

const Blogs = () => {
  const featuredBlog = blogData.find(blog => blog.featured);
  const regularBlogs = blogData.filter(blog => !blog.featured);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle
            title="Our Blogs"
            subtitle="Insights and updates from our development experts"
          />
        </div>
      </section>

      {/* Featured Blog (Carousel Style) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {featuredBlog && (
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                <img 
                  src={featuredBlog.image} 
                  alt={featuredBlog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">
                  <span>{featuredBlog.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0C8DA1]"></span>
                  <span>By {featuredBlog.author}</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight hover:text-[#0C8DA1] transition-colors cursor-pointer">
                  {featuredBlog.title}
                </h2>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {featuredBlog.snippet}
                </p>
                
                <div>
                  <Link to="#" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#0C8DA1] text-[#0C8DA1] hover:bg-[#0C8DA1] hover:text-white font-bold transition-all duration-300">
                    Read More <FiArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.article>
          )}
        </div>
      </section>

      {/* Blog List Area (Grid) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog, idx) => (
              <motion.div 
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group"
              >
                {/* Thumbnail */}
                <div className="h-56 overflow-hidden">
                  <Link to="#">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wide">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#0C8DA1]"></span>
                    <span>By {blog.author}</span>
                  </div>
                  
                  <Link to="#">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#0C8DA1] transition-colors">
                      {blog.title}
                    </h3>
                  </Link>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link to="#" className="text-sm font-bold text-[#0C8DA1] hover:text-gray-900 transition-colors flex items-center gap-2">
                      Read More <FiArrowRight size={16} />
                    </Link>
                    
                    <div className="flex gap-3 text-gray-400">
                      <a href="#" className="hover:text-[#0C8DA1] transition-colors"><FiFacebook size={18} /></a>
                      <a href="#" className="hover:text-[#0C8DA1] transition-colors"><FiTwitter size={18} /></a>
                      <a href="#" className="hover:text-[#0C8DA1] transition-colors"><FiLinkedin size={18} /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blogs;
