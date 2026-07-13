import React, { useState, useEffect } from 'react';
import { FiUpload, FiTrash2, FiEdit2, FiPlus, FiX } from 'react-icons/fi';
import { adminService, serviceService } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './Loader.jsx';

const PortfolioManager = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    serviceSlug: '',
    price: 0,
    category: '',
    tags: '',
    technologies: '',
    deliverables: ''
  });
  const [uploadingImages, setUploadingImages] = useState({});

  useEffect(() => {
    loadPortfolioItems();
    loadServices();
  }, []);

  const loadPortfolioItems = async () => {
    try {
      const res = await adminService.getAllPortfolioItems();
      setPortfolioItems(res.data.items || []);
    } catch (err) {
      setError('Failed to load portfolio items');
    } finally {
      setLoading(false);
    }
  };

  const loadServices = async () => {
    try {
      const res = await serviceService.getServices();
      setServices(res.data.services || []);
    } catch (err) {
      console.error('Failed to load services');
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!formData.title || !formData.description || !formData.serviceSlug || !formData.category) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      let res;
      if (editingItem) {
        res = await adminService.updatePortfolioItem(editingItem.slug, {
          ...formData,
          tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
          technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
          deliverables: formData.deliverables.split(',').map(t => t.trim()).filter(Boolean),
        });
        setPortfolioItems(prev => prev.map(item => 
          item.slug === editingItem.slug ? res.data.item : item
        ));
        setEditingItem(null);
      } else {
        res = await adminService.createPortfolioItem({
          ...formData,
          tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
          technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
          deliverables: formData.deliverables.split(',').map(t => t.trim()).filter(Boolean),
        });
        setPortfolioItems(prev => [...prev, res.data.item]);
      }

      setMessage(`Portfolio item ${editingItem ? 'updated' : 'created'} successfully`);
      setFormData({
        title: '',
        description: '',
        serviceSlug: '',
        price: 0,
        category: '',
        tags: '',
        technologies: '',
        deliverables: ''
      });
      setShowForm(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save portfolio item');
    }
  };

  const handleImageUpload = async (itemSlug, files) => {
    if (!files.length) return;

    setUploadingImages(prev => ({ ...prev, [itemSlug]: true }));
    setError('');
    setMessage('');

    const formattedImages = [];

    for (let file of files) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload only image files');
        setUploadingImages(prev => ({ ...prev, [itemSlug]: false }));
        return;
      }

      if (file.size > 5 * 1024 * 1024) { // 5MB per image
        setError('Each image must be less than 5MB');
        setUploadingImages(prev => ({ ...prev, [itemSlug]: false }));
        return;
      }

      await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          formattedImages.push({
            imageData: e.target.result,
            imageName: file.name
          });
          resolve();
        };
        reader.readAsDataURL(file);
      });
    }

    try {
      const res = await adminService.addPortfolioImages(itemSlug, { images: formattedImages });
      setPortfolioItems(prev => prev.map(item =>
        item.slug === itemSlug ? res.data.item : item
      ));
      setMessage(`${files.length} image(s) added successfully`);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to upload images');
    } finally {
      setUploadingImages(prev => ({ ...prev, [itemSlug]: false }));
    }
  };

  const handleDeleteImage = async (itemSlug, imageId) => {
    try {
      const res = await adminService.deletePortfolioImage(itemSlug, imageId);
      setPortfolioItems(prev => prev.map(item =>
        item.slug === itemSlug ? res.data.item : item
      ));
      setMessage('Image deleted successfully');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete image');
    }
  };

  const handleDeleteItem = async (slug) => {
    if (!window.confirm('Are you sure you want to delete this portfolio item?')) return;

    try {
      await adminService.deletePortfolioItem(slug);
      setPortfolioItems(prev => prev.filter(item => item.slug !== slug));
      setMessage('Portfolio item deleted successfully');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete portfolio item');
    }
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      serviceSlug: item.serviceSlug,
      price: item.price,
      category: item.category,
      tags: item.tags?.join(', ') || '',
      technologies: item.technologies?.join(', ') || '',
      deliverables: item.deliverables?.join(', ') || ''
    });
    setShowForm(true);
  };

  if (loading) return <Loader />;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Portfolio Management</h2>
        <motion.button
          onClick={() => {
            setEditingItem(null);
            setFormData({
              title: '',
              description: '',
              serviceSlug: '',
              price: 0,
              category: '',
              tags: '',
              technologies: '',
              deliverables: ''
            });
            setShowForm(!showForm);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-lg hover:shadow-brand-blue transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiPlus /> {showForm ? 'Cancel' : 'Add Portfolio Item'}
        </motion.button>
      </div>

      {/* Messages */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700"
          >
            {message}
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-rose-50 border border-rose-200 rounded-lg text-rose-700"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white p-6 rounded-lg border border-slate-200 space-y-4"
        >
          <form onSubmit={handleSubmitForm} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Portfolio Item Title"
              value={formData.title}
              onChange={handleFormChange}
              className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-brand-blue"
              required
            />

            <select
              name="serviceSlug"
              value={formData.serviceSlug}
              onChange={handleFormChange}
              className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-brand-blue"
              required
            >
              <option value="">Select Service</option>
              {services.map(service => (
                <option key={service.slug} value={service.slug}>{service.title}</option>
              ))}
            </select>

            <input
              type="text"
              name="category"
              placeholder="Category (e.g., Fashion, ERP, E-Commerce)"
              value={formData.category}
              onChange={handleFormChange}
              className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-brand-blue"
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleFormChange}
              className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-brand-blue"
              min="0"
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleFormChange}
              className="md:col-span-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-brand-blue"
              rows="3"
              required
            />

            <input
              type="text"
              name="tags"
              placeholder="Tags (comma separated)"
              value={formData.tags}
              onChange={handleFormChange}
              className="md:col-span-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-brand-blue"
            />

            <input
              type="text"
              name="technologies"
              placeholder="Technologies used (comma separated)"
              value={formData.technologies}
              onChange={handleFormChange}
              className="md:col-span-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-brand-blue"
            />

            <textarea
              name="deliverables"
              placeholder="Deliverables (comma separated)"
              value={formData.deliverables}
              onChange={handleFormChange}
              className="md:col-span-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-brand-blue"
              rows="2"
            />

            <motion.button
              type="submit"
              className="md:col-span-2 px-4 py-2 bg-brand-blue text-white rounded-lg hover:shadow-brand-blue transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {editingItem ? 'Update' : 'Create'} Portfolio Item
            </motion.button>
          </form>
        </motion.div>
      )}

      {/* Portfolio Items List */}
      <div className="space-y-4">
        {portfolioItems.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            No portfolio items yet. Create one to get started!
          </div>
        ) : (
          portfolioItems.map(item => (
            <motion.div
              key={item._id}
              className="bg-white border border-slate-200 rounded-lg p-6 space-y-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.category}</p>
                  <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                  {item.price > 0 && (
                    <p className="text-sm font-semibold text-brand-blue mt-2">₹{item.price}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <motion.button
                    onClick={() => handleEditItem(item)}
                    className="p-2 text-slate-600 hover:text-brand-blue transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiEdit2 size={18} />
                  </motion.button>
                  <motion.button
                    onClick={() => handleDeleteItem(item.slug)}
                    className="p-2 text-slate-600 hover:text-rose-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiTrash2 size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Images Section */}
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900">Images ({item.images?.length || 0})</h4>
                
                {/* Image Upload */}
                <label className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-brand-blue transition-colors">
                  <FiUpload size={18} />
                  <span className="text-sm text-slate-600">
                    {uploadingImages[item.slug] ? 'Uploading...' : 'Add Images'}
                  </span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleImageUpload(item.slug, e.target.files)}
                    disabled={uploadingImages[item.slug]}
                    className="hidden"
                  />
                </label>

                {/* Images Grid */}
                {item.images && item.images.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {item.images.map(img => (
                      <div key={img._id} className="relative group">
                        <img
                          src={img.imageData}
                          alt={img.imageName}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <motion.button
                          onClick={() => handleDeleteImage(item.slug, img._id)}
                          className="absolute top-1 right-1 p-1 bg-rose-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.1 }}
                        >
                          <FiTrash2 size={14} />
                        </motion.button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tags and Technologies */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                {item.tags && item.tags.length > 0 && (
                  <div>
                    <p className="font-semibold text-slate-700 mb-1">Tags:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {item.technologies && item.technologies.length > 0 && (
                  <div>
                    <p className="font-semibold text-slate-700 mb-1">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default PortfolioManager;
