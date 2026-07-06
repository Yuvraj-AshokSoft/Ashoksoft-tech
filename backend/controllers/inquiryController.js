// Inquiry Controller
import Inquiry from '../models/Inquiry.js';

// Create Inquiry
export const createInquiry = async (req, res) => {
  try {
    const name = req.body.name?.trim() || req.user.name;
    const email = req.body.email?.trim().toLowerCase() || req.user.email;
    const phone = req.body.phone?.trim();
    const companyName = req.body.companyName?.trim();
    const projectType = req.body.projectType;
    const budget = req.body.budget;
    const timeline = req.body.timeline;
    const description = req.body.description?.trim();

    // Validation
    if (!name || !email || !phone || !companyName || !projectType || !budget || !timeline || !description) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Create inquiry
    const inquiry = await Inquiry.create({
      userId: req.user.id,
      name,
      email,
      phone,
      companyName,
      projectType,
      budget,
      timeline,
      description,
      status: 'Pending'
    });

    res.status(201).json({
      success: true,
      message: 'Inquiry created successfully',
      inquiry
    });
  } catch (error) {
    console.error('Create inquiry error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error creating inquiry'
    });
  }
};

// Get User Inquiries
export const getUserInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({ userId: req.user.id }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: inquiries.length,
      inquiries
    });
  } catch (error) {
    console.error('Get inquiries error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching inquiries'
    });
  }
};

// Get Single Inquiry
export const getSingleInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    // Check authorization
    if (inquiry.userId.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this inquiry'
      });
    }

    res.status(200).json({
      success: true,
      inquiry
    });
  } catch (error) {
    console.error('Get inquiry error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching inquiry'
    });
  }
};
