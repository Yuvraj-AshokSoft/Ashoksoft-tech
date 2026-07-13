// Admin Routes
import express from 'express';
import {
  getDashboardStats,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
  getAllUsers,
  getInquiryStats
} from '../controllers/adminController.js';
import { getServices, updateService } from '../controllers/serviceController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// All admin routes require authentication and admin role
router.use(protect, authorize('admin'));

router.get('/stats/dashboard', getDashboardStats);
router.get('/stats/inquiries', getInquiryStats);
router.get('/inquiries', getAllInquiries);
router.put('/inquiries/:id', updateInquiryStatus);
router.delete('/inquiries/:id', deleteInquiry);
router.get('/users', getAllUsers);
router.get('/services', getServices);
router.put('/services/:slug', updateService);

export default router;
