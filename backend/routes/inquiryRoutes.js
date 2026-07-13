// Inquiry Routes
import express from 'express';
import { createInquiry, getUserInquiries, getSingleInquiry } from '../controllers/inquiryController.js';
import { protect, optionalProtect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', optionalProtect, createInquiry);
router.get('/', protect, getUserInquiries);
router.get('/:id', protect, getSingleInquiry);

export default router;
