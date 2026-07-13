import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiFilter, FiX, FiArrowRight } from 'react-icons/fi';
import { portfolioService, serviceService } from '../services/api';
import Loader from '../components/Loader';
import SectionTitle from '../components/SectionTitle';

const fallbackPortfolioData = [
  {
    _id: '1',
    title: 'Enterprise ERP Solution for Manufacturing',
    description: 'A comprehensive Enterprise Resource Planning system built to streamline operations, inventory management, and human resources for a large manufacturing firm. Includes real-time analytics and IoT integrations.',
    category: 'Software Development',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    impact: 'Increased operational efficiency by 40% and reduced inventory waste.'
  },
  {
    _id: '2',
    title: 'Global E-Commerce Marketplace',
    description: 'A highly scalable multi-vendor e-commerce platform handling over 100k daily transactions. Features AI-driven product recommendations, multi-currency support, and seamless payment gateway integrations.',
    category: 'Website Development',
    technologies: ['Next.js', 'MongoDB', 'Stripe', 'Redis'],
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    impact: 'Achieved $2M in GMV within the first 6 months of launch.'
  },
  {
    _id: '3',
    title: 'Smart Health Monitoring Mobile App',
    description: 'An intuitive healthcare mobile application that pairs with wearables to track patient vitals in real-time, allowing doctors to monitor high-risk patients remotely.',
    category: 'Mobile App Development',
    technologies: ['React Native', 'Firebase', 'GraphQL', 'HealthKit'],
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    impact: 'Adopted by 50+ hospitals for remote patient care.'
  },
  {
    _id: '4',
    title: 'AI Customer Support Chatbot',
    description: 'A sophisticated NLP-powered chatbot deployed for a telecom giant. It handles 80% of level 1 customer queries, significantly reducing wait times and support costs.',
    category: 'Artificial Intelligence',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'AWS Lex'],
    thumbnail: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    impact: 'Reduced customer support ticket volume by 65%.'
  }
];

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterService, setFilterService] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    filterPortfolioItems();
  }, [filterService, filterCategory]);

  const loadData = async () => {
    try {
      const [servicesRes, portfolioRes] = await Promise.all([
        serviceService.getServices(),
        portfolioService.getPortfolioItems({ limit: 100 })
      ]);

      setServices(servicesRes.data.services || []);
      
      let items = portfolioRes.data.items || [];
      if (items.length === 0) {
        items = fallbackPortfolioData;
      }
      setPortfolioItems(items);

      // Extract unique categories
      const uniqueCategories = [...new Set(items.map(item => item.category))];
      setCategories(uniqueCategories);
    } catch (err) {
      console.error('Error loading portfolio:', err);
      setPortfolioItems(fallbackPortfolioData);
      const uniqueCategories = [...new Set(fallbackPortfolioData.map(item => item.category))];
      setCategories(uniqueCategories);
    } finally {
      setLoading(false);
    }
  };

  const filterPortfolioItems = async () => {
    try {
      const params = {};
      if (filterService) params.serviceSlug = filterService;
      if (filterCategory) params.category = filterCategory;

      const res = await portfolioService.getPortfolioItems(params);
      let items = res.data.items || [];

      if (items.length === 0) {
        items = fallbackPortfolioData.filter(item => {
          let match = true;
          if (filterCategory && item.category !== filterCategory) match = false;
          return match;
        });
      }

      setPortfolioItems(items);
    } catch (err) {
      console.error('Error filtering portfolio:', err);
      const items = fallbackPortfolioData.filter(item => {
        let match = true;
        if (filterCategory && item.category !== filterCategory) match = false;
        return match;
      });
      setPortfolioItems(items);
    }
  };

  const handleNextImage = () => {
    if (selectedItem && selectedItem.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedItem && selectedItem.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 relative z-0">
      {/* Background decoration for Hero */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#0C8DA1]/10 via-[#0C8DA1]/5 to-[#f8fafc] -z-10" />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200/50 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle
            title="Our Portfolio"
            subtitle="Showcase of our latest projects and digital solutions"
          />
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-200/50 bg-white/80 backdrop-blur-md sticky top-24 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center">
            <div className="flex items-center gap-2 text-gray-600">
              <FiFilter size={20} />
              <span className="font-semibold">Filters:</span>
            </div>

            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-[#0C8DA1] transition-colors"
            >
              <option value="">All Services</option>
              {services.map(service => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
            </select>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-[#0C8DA1] transition-colors"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {(filterService || filterCategory) && (
              <motion.button
                onClick={() => {
                  setFilterService('');
                  setFilterCategory('');
                }}
                className="px-4 py-2 text-[#0C8DA1] hover:text-[#0a7587] transition-colors flex items-center gap-2 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <FiX size={18} /> Clear Filters
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* Vofox-style Alternating Portfolio List */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-32">
          {portfolioItems.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-500 text-xl font-medium">No portfolio items found matching your filters.</p>
            </div>
          ) : (
            portfolioItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.article 
                  key={item._id} 
                  className="relative cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                  >
                    
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-white aspect-[4/3] flex items-center justify-center group border border-gray-100 hover:shadow-2xl hover:shadow-[#0C8DA1]/10 transition-all duration-500">
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                        
                        {item.thumbnail || (item.images && item.images.length > 0) ? (
                          <img
                            src={item.thumbnail || item.images[0].imageData}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        ) : (
                          <div className="text-gray-400 font-medium">No Image Available</div>
                        )}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                      <h3 className="text-4xl sm:text-[40px] font-extrabold text-gray-900 leading-tight tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-loose text-lg font-medium">
                        {item.description}
                      </p>
                      
                      {item.impact && (
                        <div className="bg-[#0C8DA1]/5 border-l-4 border-[#0C8DA1] p-5 rounded-r-lg mt-6">
                          <p className="text-[#0a7587] font-semibold text-base leading-relaxed">
                            <span className="font-extrabold text-gray-900 mr-3 uppercase tracking-wider text-sm">Project Impact:</span> 
                            {item.impact}
                          </p>
                        </div>
                      )}
                      
                      <div className="pt-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {/* Fallback to category if technologies array isn't populated */}
                          {item.technologies && item.technologies.length > 0 ? (
                            item.technologies.map((tech, tIdx) => (
                              <span key={tIdx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold border border-gray-200">
                                {tech}
                              </span>
                            ))
                          ) : (
                            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold border border-gray-200">
                              {item.category}
                            </span>
                          )}
                        </div>
                      </div>


                    </div>

                  </motion.div>
                </motion.article>
              );
            })
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0C8DA1] to-[#0a7586] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Have a Project in Mind?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 font-medium"
          >
            Let's Build Your Next Digital Solution
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact?type=sales">
              <motion.button
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#0C8DA1] font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.button>
            </Link>
            <Link to="/contact?type=sales">
              <motion.button
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote <FiArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal for viewing portfolio details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h2>
                <motion.button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiX size={24} className="text-gray-600" />
                </motion.button>
              </div>

              <div className="p-6 space-y-6">
                {/* Image Carousel */}
                {selectedItem.images && selectedItem.images.length > 0 && (
                  <div className="space-y-4">
                    <div className="relative bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                      <img
                        src={selectedItem.images[currentImageIndex].imageData}
                        alt={`Portfolio ${currentImageIndex + 1}`}
                        className="w-full h-96 object-cover"
                      />
                      {selectedItem.images.length > 1 && (
                        <>
                          <motion.button
                            onClick={handlePrevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white hover:bg-gray-100 text-gray-800 rounded-full transition-colors shadow-lg border border-gray-200"
                            whileHover={{ scale: 1.1 }}
                          >
                            ←
                          </motion.button>
                          <motion.button
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white hover:bg-gray-100 text-gray-800 rounded-full transition-colors shadow-lg border border-gray-200"
                            whileHover={{ scale: 1.1 }}
                          >
                            →
                          </motion.button>
                        </>
                      )}
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {selectedItem.images.map((img, idx) => (
                        <motion.img
                          key={idx}
                          src={img.imageData}
                          alt={`Thumbnail ${idx + 1}`}
                          className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all ${
                            currentImageIndex === idx
                              ? 'ring-2 ring-[#0C8DA1]'
                              : 'opacity-60 hover:opacity-100'
                          }`}
                          onClick={() => setCurrentImageIndex(idx)}
                          whileHover={{ scale: 1.05 }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedItem.description}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Details</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><span className="text-gray-500 font-medium">Category:</span> {selectedItem.category}</p>
                      {selectedItem.price > 0 && (
                        <p><span className="text-gray-500 font-medium">Price:</span> <span className="text-[#0C8DA1] font-bold">₹{selectedItem.price}</span></p>
                      )}
                      {selectedItem.technologies && selectedItem.technologies.length > 0 && (
                        <p><span className="text-gray-500 font-medium">Technologies:</span> {selectedItem.technologies.join(', ')}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {selectedItem.tags && selectedItem.tags.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <Link to="/contact?type=sales" className="block">
                  <motion.button
                    className="w-full px-6 py-4 bg-[#0C8DA1] text-white font-bold rounded-full hover:bg-[#0a7586] hover:shadow-lg hover:shadow-[#0C8DA1]/30 transition-all text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Discuss Similar Project
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
