import express from 'express';
import {
  getPortfolioItems,
  getPortfolioBySlug,
  createPortfolioItem,
  updatePortfolioItem,
  addPortfolioImages,
  deletePortfolioImage,
  reorderPortfolioImages,
  deletePortfolioItem,
  getAllPortfolioItems
} from '../controllers/portfolioController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getPortfolioItems);
router.get('/:slug', getPortfolioBySlug);

// Admin routes
router.use(protect, authorize('admin'));
router.post('/', createPortfolioItem);
router.get('/admin/all', getAllPortfolioItems);
router.put('/:slug', updatePortfolioItem);
router.post('/:slug/images', addPortfolioImages);
router.delete('/:slug/images/:imageId', deletePortfolioImage);
router.post('/:slug/reorder-images', reorderPortfolioImages);
router.delete('/:slug', deletePortfolioItem);

export default router;
