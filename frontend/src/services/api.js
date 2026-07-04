import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Handle responses
API.interceptors.response.use((response) => {
  return response;
}, (error) => {
  const isLoginRequest = error.config?.url?.includes('/auth/login');

  if (error.response?.status === 401 && !isLoginRequest) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
  return Promise.reject(error);
});

// Auth Services
export const authService = {
  register: (data) => API.post('/auth/register', data),
  login: (data) => API.post('/auth/login', data),
  getCurrentUser: () => API.get('/auth/me'),
  updateProfile: (data) => API.put('/auth/profile', data),
};

// Inquiry Services
export const inquiryService = {
  createInquiry: (data) => API.post('/inquiries', data),
  getUserInquiries: () => API.get('/inquiries'),
  getSingleInquiry: (id) => API.get(`/inquiries/${id}`),
};

// Service Catalog
export const serviceService = {
  getServices: () => API.get('/services'),
  getService: (slug) => API.get(`/services/${slug}`),
};

// Admin Services
export const adminService = {
  getDashboardStats: () => API.get('/admin/stats/dashboard'),
  getInquiryStats: () => API.get('/admin/stats/inquiries'),
  getAllInquiries: (params) => API.get('/admin/inquiries', { params }),
  updateInquiryStatus: (id, data) => API.put(`/admin/inquiries/${id}`, data),
  deleteInquiry: (id) => API.delete(`/admin/inquiries/${id}`),
  getAllUsers: (params) => API.get('/admin/users', { params }),
  getServices: () => API.get('/admin/services', { params: { includeInactive: true } }),
  updateService: (slug, data) => API.put(`/admin/services/${slug}`, data),
  // Portfolio Admin
  getAllPortfolioItems: (params) => API.get('/portfolio/admin/all', { params }),
  createPortfolioItem: (data) => API.post('/portfolio', data),
  updatePortfolioItem: (slug, data) => API.put(`/portfolio/${slug}`, data),
  deletePortfolioItem: (slug) => API.delete(`/portfolio/${slug}`),
  addPortfolioImages: (slug, data) => API.post(`/portfolio/${slug}/images`, data),
  deletePortfolioImage: (slug, imageId) => API.delete(`/portfolio/${slug}/images/${imageId}`),
  reorderPortfolioImages: (slug, data) => API.post(`/portfolio/${slug}/reorder-images`, data),
};

// Portfolio Services
export const portfolioService = {
  getPortfolioItems: (params) => API.get('/portfolio', { params }),
  getPortfolioBySlug: (slug) => API.get(`/portfolio/${slug}`),
};

export default API;
