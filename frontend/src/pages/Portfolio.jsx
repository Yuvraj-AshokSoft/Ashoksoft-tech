import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiFilter, FiShoppingCart, FiX } from 'react-icons/fi';
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
    <div className="bg-dark-bg min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Portfolio"
            subtitle="Showcase of our latest projects and digital solutions"
          />
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-dark-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <div className="flex items-center gap-2 text-slate-600">
              <FiFilter size={20} />
              <span className="font-semibold">Filters:</span>
            </div>

            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-brand-blue transition-colors"
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
              className="px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-brand-blue transition-colors"
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
                className="px-4 py-2 text-brand-blue hover:text-brand-cyan transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <FiX size={18} /> Clear Filters
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {portfolioItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No portfolio items found matching your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, idx) => (
                <motion.div
                  key={item._id}
                  className="group bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-brand-blue transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    setSelectedItem(item);
                    setCurrentImageIndex(0);
                  }}
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    {item.thumbnail ? (
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 flex items-center justify-center">
                        <span className="text-slate-500">No Image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <motion.button
                        className="px-4 py-2 bg-brand-blue text-white rounded-lg flex items-center gap-2 font-semibold hover:shadow-brand-blue transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiShoppingCart size={18} /> View Details
                      </motion.button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-slate-900/50 text-brand-cyan px-2 py-1 rounded">
                        {item.category}
                      </span>
                      {item.price > 0 && (
                        <span className="text-lg font-bold text-brand-blue">₹{item.price}</span>
                      )}
                    </div>

                    {item.images && item.images.length > 0 && (
                      <p className="text-xs text-slate-500 mt-2">
                        {item.images.length} image{item.images.length !== 1 ? 's' : ''}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal for viewing portfolio details */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="bg-dark-bg border border-dark-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-dark-border bg-dark-card/95 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-slate-900">{selectedItem.title}</h2>
              <motion.button
                onClick={() => setSelectedItem(null)}
                className="p-2 hover:bg-slate-900 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FiX size={24} className="text-slate-600" />
              </motion.button>
            </div>

            <div className="p-6 space-y-6">
              {/* Image Carousel */}
              {selectedItem.images && selectedItem.images.length > 0 && (
                <div className="space-y-4">
                  <div className="relative bg-slate-900 rounded-xl overflow-hidden">
                    <img
                      src={selectedItem.images[currentImageIndex].imageData}
                      alt={`Portfolio ${currentImageIndex + 1}`}
                      className="w-full h-96 object-cover"
                    />
                    {selectedItem.images.length > 1 && (
                      <>
                        <motion.button
                          onClick={handlePrevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-brand-blue/80 hover:bg-brand-blue text-white rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          ←
                        </motion.button>
                        <motion.button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-brand-blue/80 hover:bg-brand-blue text-white rounded-lg transition-colors"
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
                            ? 'ring-2 ring-brand-blue'
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
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-2">Description</h3>
                  <p className="text-slate-300 leading-relaxed">{selectedItem.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-2">Details</h3>
                  <div className="space-y-2 text-sm text-slate-300">
                    <p><span className="text-slate-400">Category:</span> {selectedItem.category}</p>
                    {selectedItem.price > 0 && (
                      <p><span className="text-slate-400">Price:</span> <span className="text-brand-blue font-bold">₹{selectedItem.price}</span></p>
                    )}
                    {selectedItem.technologies && selectedItem.technologies.length > 0 && (
                      <p><span className="text-slate-400">Technologies:</span> {selectedItem.technologies.join(', ')}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Tags */}
              {selectedItem.tags && selectedItem.tags.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-brand-blue/20 text-brand-cyan rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <Link to="/contact" className="block">
                <motion.button
                  className="w-full px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold rounded-lg hover:shadow-brand-blue transition-all"
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
    </div>
  );
};

export default Portfolio;
