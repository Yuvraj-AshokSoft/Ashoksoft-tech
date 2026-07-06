import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiFilter, FiX, FiArrowRight } from 'react-icons/fi';
import { portfolioService, serviceService } from '../services/api';
import Loader from '../components/Loader';
import SectionTitle from '../components/SectionTitle';

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
      setPortfolioItems(portfolioRes.data.items || []);

      // Extract unique categories
      const uniqueCategories = [...new Set((portfolioRes.data.items || []).map(item => item.category))];
      setCategories(uniqueCategories);
    } catch (err) {
      console.error('Error loading portfolio:', err);
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
      setPortfolioItems(res.data.items || []);
    } catch (err) {
      console.error('Error filtering portfolio:', err);
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
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle
            title="Our Portfolio"
            subtitle="Showcase of our latest projects and digital solutions"
          />
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-200 bg-white">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-24">
          {portfolioItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No portfolio items found matching your filters.</p>
            </div>
          ) : (
            portfolioItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <article key={item._id} className="relative">
                  <div className={`flex flex-col lg:flex-row gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-[4/3] flex items-center justify-center group border border-gray-200">
                        {item.thumbnail || (item.images && item.images.length > 0) ? (
                          <img
                            src={item.thumbnail || item.images[0].imageData}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="text-gray-400 font-medium">No Image Available</div>
                        )}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {item.description}
                      </p>
                      
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

                      <div className="pt-6">
                        <Link to={`/portfolio`} className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#0C8DA1] text-[#0C8DA1] hover:bg-[#0C8DA1] hover:text-white font-bold transition-all duration-300">
                          View Project <FiArrowRight size={20} />
                        </Link>
                      </div>
                    </div>

                  </div>
                </article>
              );
            })
          )}
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
                <Link to="/contact" className="block">
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
